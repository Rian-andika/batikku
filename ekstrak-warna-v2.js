/* =============================================================
   EKSTRAKSI WARNA V2 — PRESISI TINGGI
   Pakai K-means clustering + ruang warna LAB (Delta E).
   Output: report HTML visual + JSON hasil.
   
   CARA PAKAI:
   1. Taruh file ini di root project
   2. Pastikan sharp sudah terinstall: npm install sharp
   3. Jalankan: node ekstrak-warna-v2.js
   4. Buka file laporan-warna.html di browser
   5. Verifikasi & catat hasilnya
   ============================================================= */

import sharp from 'sharp';
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// Token warna batik + RGB
const TOKENS = {
  sogan:   { rgb: [123, 74, 43],   label: "Sogan" },
  indigo:  { rgb: [30, 58, 95],    label: "Indigo" },
  hitam:   { rgb: [31, 26, 21],    label: "Hitam" },
  gading:  { rgb: [237, 227, 204], label: "Gading" },
  merah:   { rgb: [160, 52, 30],   label: "Merah" },
  biru:    { rgb: [44, 110, 143],  label: "Biru" },
  emas:    { rgb: [201, 169, 97],  label: "Emas" },
  oranye:  { rgb: [197, 123, 60],  label: "Oranye" },
  terakota:{ rgb: [156, 91, 59],   label: "Terakota" },
};

// ===== Konversi RGB -> LAB (perceptual color space) =====
// LAB lebih dekat ke cara mata manusia melihat perbedaan warna
function rgbToLab(r, g, b) {
  // RGB -> XYZ
  let R = r / 255, G = g / 255, B = b / 255;
  R = R > 0.04045 ? Math.pow((R + 0.055) / 1.055, 2.4) : R / 12.92;
  G = G > 0.04045 ? Math.pow((G + 0.055) / 1.055, 2.4) : G / 12.92;
  B = B > 0.04045 ? Math.pow((B + 0.055) / 1.055, 2.4) : B / 12.92;
  R *= 100; G *= 100; B *= 100;
  let X = R * 0.4124 + G * 0.3576 + B * 0.1805;
  let Y = R * 0.2126 + G * 0.7152 + B * 0.0722;
  let Z = R * 0.0193 + G * 0.1192 + B * 0.9505;
  // XYZ -> LAB (D65 illuminant)
  X /= 95.047; Y /= 100.000; Z /= 108.883;
  X = X > 0.008856 ? Math.pow(X, 1/3) : 7.787 * X + 16/116;
  Y = Y > 0.008856 ? Math.pow(Y, 1/3) : 7.787 * Y + 16/116;
  Z = Z > 0.008856 ? Math.pow(Z, 1/3) : 7.787 * Z + 16/116;
  return [116*Y - 16, 500*(X-Y), 200*(Y-Z)];
}

// Delta E (jarak warna di ruang LAB, lebih akurat dari Euclidean RGB)
function deltaE(lab1, lab2) {
  return Math.sqrt(
    (lab1[0]-lab2[0])**2 + (lab1[1]-lab2[1])**2 + (lab1[2]-lab2[2])**2
  );
}

// Cari token terdekat dari sebuah warna LAB
function nearestToken(lab) {
  let best = null, bestDist = Infinity;
  for (const [name, t] of Object.entries(TOKENS)) {
    const tLab = rgbToLab(...t.rgb);
    const d = deltaE(lab, tLab);
    if (d < bestDist) { bestDist = d; best = name; }
  }
  return { name: best, distance: bestDist };
}

// ===== K-means clustering untuk warna dominan =====
function kmeans(pixels, k = 5, maxIter = 20) {
  // Init centroid: pilih k piksel acak
  let centroids = [];
  const used = new Set();
  while (centroids.length < k && used.size < pixels.length) {
    const idx = Math.floor(Math.random() * pixels.length);
    if (!used.has(idx)) {
      used.add(idx);
      centroids.push([...pixels[idx]]);
    }
  }
  
  let clusters = [];
  for (let iter = 0; iter < maxIter; iter++) {
    // Assign tiap pixel ke centroid terdekat
    clusters = centroids.map(() => []);
    for (const p of pixels) {
      let best = 0, bestDist = Infinity;
      for (let i = 0; i < centroids.length; i++) {
        const d = (p[0]-centroids[i][0])**2 + (p[1]-centroids[i][1])**2 + (p[2]-centroids[i][2])**2;
        if (d < bestDist) { bestDist = d; best = i; }
      }
      clusters[best].push(p);
    }
    // Update centroid jadi rata-rata cluster
    const newCentroids = clusters.map((cluster, i) => {
      if (cluster.length === 0) return centroids[i];
      const sum = cluster.reduce((s, p) => [s[0]+p[0], s[1]+p[1], s[2]+p[2]], [0,0,0]);
      return [sum[0]/cluster.length, sum[1]/cluster.length, sum[2]/cluster.length];
    });
    // Cek konvergen
    const moved = newCentroids.some((c, i) => 
      Math.abs(c[0]-centroids[i][0]) + Math.abs(c[1]-centroids[i][1]) + Math.abs(c[2]-centroids[i][2]) > 1
    );
    centroids = newCentroids;
    if (!moved) break;
  }
  
  // Return cluster + frekuensi
  return centroids.map((c, i) => ({
    rgb: c.map(Math.round),
    count: clusters[i].length,
    pct: (clusters[i].length / pixels.length) * 100
  })).sort((a, b) => b.count - a.count);
}

const MOTIF_DIR = join('public', 'images', 'motifs');

async function ekstrakWarna(file) {
  const path = join(MOTIF_DIR, file);
  // Resize 300x300 (lebih besar = detail lebih akurat), crop center
  const { data, info } = await sharp(path)
    .resize(300, 300, { fit: 'cover', position: 'center' })
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const ch = info.channels;
  const pixels = [];
  // Sample tiap 2 pixel biar gak terlalu banyak (90000 -> 22500)
  for (let i = 0; i < data.length; i += ch * 2) {
    pixels.push([data[i], data[i+1], data[i+2]]);
  }
  
  // K-means dengan k=6 (cari 6 cluster warna dominan)
  const clusters = kmeans(pixels, 6);
  
  // Mapping tiap cluster ke token batik
  const tokenCounts = {};
  for (const c of clusters) {
    const lab = rgbToLab(...c.rgb);
    const { name } = nearestToken(lab);
    tokenCounts[name] = (tokenCounts[name] || 0) + c.pct;
  }
  
  // Sort & filter token >= 6%
  const sorted = Object.entries(tokenCounts)
    .map(([name, pct]) => ({ name, pct: Math.round(pct) }))
    .sort((a, b) => b.pct - a.pct);
  
  return { clusters, tokens: sorted };
}

function rgbToHex([r,g,b]) {
  return '#' + [r,g,b].map(x => Math.round(x).toString(16).padStart(2,'0')).join('');
}

async function main() {
  console.log('\n=== EKSTRAKSI WARNA V2 (K-means + LAB) ===\n');
  
  let files;
  try {
    files = readdirSync(MOTIF_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f)).sort();
  } catch (e) {
    console.error('ERROR: folder', MOTIF_DIR, 'tidak ditemukan.');
    return;
  }
  
  const results = {};
  const reportRows = [];
  
  for (const file of files) {
    const id = file.replace(/\.(jpg|jpeg|png)$/i, '');
    try {
      const r = await ekstrakWarna(file);
      // Ambil token >= 8% dengan max 4 token
      const significant = r.tokens.filter(t => t.pct >= 8).slice(0, 4);
      results[id] = significant.map(t => t.name);
      
      console.log(`${id.padEnd(14)} -> ${significant.map(t => `${t.name}(${t.pct}%)`).join(', ')}`);
      
      // Bikin row HTML
      const clusterSwatches = r.clusters.slice(0, 6).map(c => 
        `<div class="csw" style="background:${rgbToHex(c.rgb)}" title="${rgbToHex(c.rgb)} - ${Math.round(c.pct)}%"></div>`
      ).join('');
      const tokenSwatches = significant.map(t => {
        const hex = rgbToHex(TOKENS[t.name].rgb);
        return `<div class="tsw" style="background:${hex}">
          <span>${TOKENS[t.name].label}</span>
          <span class="pct">${t.pct}%</span>
        </div>`;
      }).join('');
      reportRows.push(`
        <tr>
          <td><img src="public/images/motifs/${file}" /></td>
          <td><strong>${id}</strong></td>
          <td><div class="cluster-row">${clusterSwatches}</div><div class="hint">Warna mentah hasil K-means</div></td>
          <td><div class="token-row">${tokenSwatches}</div></td>
          <td class="code-cell">colors: [${significant.map(t => `"${t.name}"`).join(', ')}]</td>
        </tr>
      `);
    } catch (e) {
      console.log(`${file.padEnd(14)} -> ERROR: ${e.message}`);
    }
  }
  
  // Tulis HTML report
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Laporan Ekstraksi Warna</title>
<style>
body{font-family:system-ui,sans-serif;background:#f5eee1;padding:24px;color:#1f1a15;}
h1{font-family:Georgia,serif;margin-bottom:8px;}
.lead{color:#666;margin-bottom:24px;max-width:70ch;}
table{border-collapse:collapse;width:100%;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);}
th,td{padding:12px;text-align:left;vertical-align:middle;border-bottom:1px solid #eee;}
th{background:#7B4A2B;color:#fff;font-weight:600;font-size:13px;text-transform:uppercase;letter-spacing:1px;}
img{width:120px;height:120px;object-fit:cover;border-radius:8px;display:block;}
.cluster-row,.token-row{display:flex;gap:4px;flex-wrap:wrap;}
.csw{width:32px;height:32px;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);}
.tsw{padding:6px 12px;border-radius:20px;color:#fff;font-size:12px;font-weight:600;text-shadow:0 1px 2px rgba(0,0,0,0.4);display:flex;flex-direction:column;align-items:center;line-height:1.2;}
.tsw .pct{font-size:10px;opacity:0.85;}
.hint{font-size:11px;color:#999;margin-top:4px;}
.code-cell{font-family:Consolas,Monaco,monospace;font-size:12px;background:#f5f5f5;}
</style>
</head><body>
<h1>📊 Laporan Ekstraksi Warna — Verifikasi Manual</h1>
<p class="lead">Tiap baris menunjukkan: foto motif, warna mentah hasil K-means clustering, token batik terdekat (kandidat untuk <code>colors</code>), dan kode siap-salin. Bandingkan kolom 2 (warna mentah) dengan kolom 3 (token). Kalau matching kelihatan keliru, kasih tau Claude motif mana yang perlu di-override.</p>
<table>
<thead><tr><th>Foto</th><th>ID</th><th>K-means Raw (6 cluster)</th><th>Token Batik Terdekat</th><th>Code</th></tr></thead>
<tbody>${reportRows.join('')}</tbody>
</table>
<script>
// Image fallback jika path-relative gak jalan
document.querySelectorAll('img').forEach(img=>{
  img.onerror=()=>{img.style.display='none';img.insertAdjacentHTML('afterend','<div style="width:120px;height:120px;background:#eee;display:flex;align-items:center;justify-content:center;border-radius:8px;color:#999;font-size:11px;text-align:center;padding:8px;">Foto tidak ditemukan<br/>('+img.getAttribute('src')+')</div>');};
});
</script>
</body></html>`;
  
  writeFileSync('laporan-warna.html', html);
  writeFileSync('hasil-warna.json', JSON.stringify(results, null, 2));
  
  console.log('\n✅ Selesai!');
  console.log('   - Buka: laporan-warna.html (di browser)');
  console.log('   - JSON: hasil-warna.json\n');
}

main();
