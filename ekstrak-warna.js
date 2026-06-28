/* =============================================================
   EKSTRAKSI WARNA DOMINAN — jalankan sekali di laptop kamu.
   Script ini membaca 12 foto di public/images/motifs/,
   mengekstrak warna dominan tiap foto, lalu mencocokkannya
   dengan token warna batik (sogan, indigo, dll).

   CARA PAKAI:
   1. Taruh file ini di root project (sejajar package.json)
   2. Di terminal: npm install sharp
   3. Jalankan: node ekstrak-warna.js
   4. Copy hasil output, kirim ke Claude
   ============================================================= */

import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join } from 'path';

// Token warna batik + nilai RGB referensi
const TOKENS = {
  sogan:   [123, 74, 43],
  indigo:  [30, 58, 95],
  hitam:   [31, 26, 21],
  gading:  [237, 227, 204],
  merah:   [160, 52, 30],
  biru:    [44, 110, 143],
  emas:    [201, 169, 97],
  oranye:  [197, 123, 60],
  terakota:[156, 91, 59],
};

// Hitung jarak warna (makin kecil makin mirip)
function colorDistance(c1, c2) {
  return Math.sqrt(
    (c1[0]-c2[0])**2 + (c1[1]-c2[1])**2 + (c1[2]-c2[2])**2
  );
}

// Cari token terdekat dari sebuah warna RGB
function nearestToken(rgb) {
  let best = null, bestDist = Infinity;
  for (const [name, ref] of Object.entries(TOKENS)) {
    const d = colorDistance(rgb, ref);
    if (d < bestDist) { bestDist = d; best = name; }
  }
  return best;
}

const MOTIF_DIR = join('public', 'images', 'motifs');

async function ekstrakWarna(file) {
  const path = join(MOTIF_DIR, file);
  // Resize kecil + ambil statistik dominan via kmeans sederhana:
  // kita sampling piksel, kelompokkan ke token terdekat, hitung frekuensi
  const { data, info } = await sharp(path)
    .resize(100, 100, { fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const counts = {};
  for (let i = 0; i < data.length; i += channels) {
    const rgb = [data[i], data[i+1], data[i+2]];
    const tok = nearestToken(rgb);
    counts[tok] = (counts[tok] || 0) + 1;
  }

  // Urutkan token by frekuensi, ambil 3 teratas
  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({
      name,
      pct: Math.round((count / (100*100)) * 100)
    }));

  return sorted;
}

async function main() {
  console.log('\n=== HASIL EKSTRAKSI WARNA DOMINAN ===\n');
  let files;
  try {
    files = readdirSync(MOTIF_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  } catch (e) {
    console.error('ERROR: folder', MOTIF_DIR, 'tidak ditemukan. Jalankan script ini dari root project.');
    return;
  }

  if (files.length === 0) {
    console.error('Tidak ada foto di', MOTIF_DIR);
    return;
  }

  for (const file of files.sort()) {
    try {
      const result = await ekstrakWarna(file);
      const id = file.replace(/\.(jpg|jpeg|png)$/i, '');
      // Ambil token >= 8% sebagai warna signifikan (maks 4)
      const significant = result.filter(r => r.pct >= 8).slice(0, 4);
      const list = significant.map(r => `${r.name} (${r.pct}%)`).join(', ');
      console.log(`${id.padEnd(14)} -> ${list}`);
    } catch (e) {
      console.log(`${file.padEnd(14)} -> ERROR: ${e.message}`);
    }
  }

  console.log('\n=== SELESAI. Copy semua baris di atas, kirim ke Claude. ===\n');
}

main();
