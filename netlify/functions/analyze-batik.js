// =============================================================
// Netlify Function: analyze-batik
// Menerima foto (base64) dari frontend, kirim ke Gemini Vision,
// kembalikan analisis pola batik. API KEY AMAN DI SERVER.
// =============================================================

// Model Gemini yang dipakai. Kalau suatu saat di-deprecate,
// ganti string ini saja (cek model aktif di https://ai.google.dev/gemini-api/docs/models)
const GEMINI_MODEL = 'gemini-2.5-flash';

export default async (req, context) => {
  // Hanya terima POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Ambil API key dari environment variable (di-set di dashboard Netlify)
  const API_KEY = process.env.GEMINI_API_KEY;
  if (!API_KEY) {
    return new Response(JSON.stringify({
      error: 'API key belum dikonfigurasi di server.',
      hint: 'Set GEMINI_API_KEY di Netlify environment variables.',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { imageBase64, mimeType } = body;

    if (!imageBase64) {
      return new Response(JSON.stringify({ error: 'Tidak ada gambar yang dikirim.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Prompt yang membatasi Gemini ke konteks batik + 12 motif Batikku
    const prompt = `Kamu adalah ahli batik Indonesia yang sangat teliti. Tugasmu menganalisis gambar yang diunggah.

LANGKAH 1 — Tentukan dulu: apakah gambar ini benar-benar KAIN BATIK?
Batik = kain dengan motif yang dibuat teknik tulis/cap/malam, BUKAN: foto orang, pemandangan, makanan, hewan, objek, kartun, screenshot, atau kain polos/print biasa non-batik.
Kalau RAGU atau jelas BUKAN batik, set "isBatik": false dan JANGAN menebak motif.

LANGKAH 2 — Kalau memang batik, identifikasi motif dari 12 ini yang PALING MIRIP secara POLA (bukan cuma warna):
1. Parang — garis diagonal bergelombang seperti ombak/huruf S miring berulang sejajar
2. Kawung — empat lingkaran/oval simetris seperti irisan buah aren, tersusun rapi berulang
3. Mega Mendung — awan berlapis-lapis bergradasi warna (khas Cirebon)
4. Truntum — bintang/kuntum bunga kecil bertabur di latar (sering gelap)
5. Sido Mukti — pola kotak/belah ketupat berisi ornamen (burung, sayap, tumbuhan, tahta)
6. Ceplok — bentuk geometris simetris berulang dalam grid (bunga/bintang/roset/lingkaran)
7. Sekar Jagad — tambal-tambalan banyak motif berbeda seperti peta/pulau-pulau
8. Poleng — kotak-kotak hitam-putih besar seperti papan catur (khas Bali)
9. Betawi — ikon ondel-ondel, tanjidor, monas, warna cerah urban
10. Aceh — sulur tumbuhan rapat, nuansa Islami, dominan biru tua & krem
11. Simbut — daun talas/kuping gajah besar yang rapat menutup kain
12. Batik Dayak — sulur, spiral, taring/akar khas Kalimantan, sering merah-emas

PENTING soal kepercayaan diri:
- "tinggi" hanya kalau pola SANGAT jelas cocok dengan satu motif
- "sedang" kalau ada kemiripan tapi bisa beberapa kemungkinan
- "rendah" kalau samar/ragu
Jangan asal yakin. Lebih baik jujur "sedang/rendah" daripada salah.

Jawab HANYA JSON valid. Ringkas — reasoning maksimal 1 kalimat pendek, visualFeatures maksimal 2 kata per item.
Format:
{"isBatik": true, "topGuess": "Poleng", "confidence": "tinggi", "reasoning": "kotak hitam-putih khas Poleng Bali", "visualFeatures": ["kotak catur", "hitam putih"], "alternativeGuesses": ["Ceplok"]}

Kalau bukan batik:
{"isBatik": false, "topGuess": "Bukan batik", "confidence": "tinggi", "reasoning": "ini foto kucing", "visualFeatures": [], "alternativeGuesses": []}`;

    // Key dikirim lewat HEADER (x-goog-api-key), bukan lewat URL.
    // Ini kompatibel dengan key format baru (AQ.) maupun lama (AIza).
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY,
      },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt },
            { inline_data: { mime_type: mimeType || 'image/jpeg', data: imageBase64 } },
          ],
        }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1200,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      // Log ke terminal biar keliatan penyebab pastinya
      console.error('=== GEMINI API ERROR ===');
      console.error('Status:', geminiRes.status);
      console.error('Detail:', errText.substring(0, 500));
      console.error('========================');
      return new Response(JSON.stringify({
        error: 'Gemini API error',
        status: geminiRes.status,
        detail: errText.substring(0, 300),
      }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await geminiRes.json();
    const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    // Bersihkan & ekstrak JSON dengan beberapa lapis pertahanan
    let parsed = null;
    try {
      // Lapis 1: buang markdown fence (```json, ```, dll) & whitespace
      let cleaned = rawText
        .replace(/```json/gi, '')
        .replace(/```/g, '')
        .trim();

      // Lapis 2: ekstrak hanya bagian { ... } pertama sampai terakhir
      // (kalau Gemini nambahin teks di luar JSON)
      const firstBrace = cleaned.indexOf('{');
      const lastBrace = cleaned.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        cleaned = cleaned.substring(firstBrace, lastBrace + 1);
      }

      parsed = JSON.parse(cleaned);

      // Validasi field wajib ada (kalau gak ada, kasih default)
      parsed = {
        isBatik: typeof parsed.isBatik === 'boolean' ? parsed.isBatik : true,
        topGuess: parsed.topGuess || 'Tidak yakin',
        confidence: parsed.confidence || 'rendah',
        reasoning: parsed.reasoning || 'AI tidak memberikan alasan.',
        visualFeatures: Array.isArray(parsed.visualFeatures) ? parsed.visualFeatures : [],
        alternativeGuesses: Array.isArray(parsed.alternativeGuesses) ? parsed.alternativeGuesses : [],
      };
    } catch (e) {
      // Kalau JSON tetap gagal di-parse, JANGAN tampilkan pecahan JSON ke user.
      // Coba selamatkan info penting (topGuess) lewat regex sederhana.
      let salvageGuess = null;
      let salvageBatik = true;
      try {
        const guessMatch = rawText.match(/"topGuess"\s*:\s*"([^"]+)"/);
        if (guessMatch) salvageGuess = guessMatch[1];
        const batikMatch = rawText.match(/"isBatik"\s*:\s*(true|false)/);
        if (batikMatch) salvageBatik = batikMatch[1] === 'true';
        const reasonMatch = rawText.match(/"reasoning"\s*:\s*"([^"]+)"/);
        var salvageReason = reasonMatch ? reasonMatch[1] : null;
      } catch (_) {}

      parsed = {
        isBatik: salvageBatik,
        topGuess: salvageGuess || 'Tidak yakin',
        confidence: salvageGuess ? 'sedang' : 'rendah',
        reasoning: (typeof salvageReason !== 'undefined' && salvageReason)
          ? salvageReason
          : 'Analisis AI belum memberikan hasil yang jelas untuk gambar ini.',
        visualFeatures: [],
        alternativeGuesses: [],
      };
    }

    return new Response(JSON.stringify({ success: true, analysis: parsed }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('=== FUNCTION CRASH ===');
    console.error(err);
    console.error('======================');
    return new Response(JSON.stringify({
      error: 'Server error',
      detail: String(err).substring(0, 200),
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
