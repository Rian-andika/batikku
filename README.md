# Decoded — Batik Catalog (Astro + Tailwind)

Web katalog batik dengan storytelling, dibangun pakai **Astro + Tailwind CSS**.

---

## 🚀 Setup Pertama (sekali aja, ~5 menit)

### 1. Pastikan Node.js terinstall

Buka terminal di VS Code (`Ctrl + ~` atau Menu Terminal → New Terminal), ketik:

```bash
node --version
```

Harus muncul `v20.x.x` atau `v22.x.x`. Kalau error, install dulu dari **nodejs.org** (pilih versi LTS).

### 2. Install dependencies

Pertama kali clone/extract, jalankan ini di folder project:

```bash
npm install
```

Ini akan download semua library yang dibutuhkan (Astro, Tailwind, dll). Tunggu sekitar 1-2 menit. Setelah selesai akan muncul folder `node_modules` yang besar — itu wajar.

---

## 💻 Cara Kerja Sehari-hari

### Menjalankan untuk development (test di laptop)

```bash
npm run dev
```

- Akan muncul URL seperti `http://localhost:4321`
- Buka di browser → web kamu udah jalan
- **Edit file apapun → auto-refresh di browser** (gak perlu reload manual)
- Untuk stop, tekan `Ctrl + C` di terminal

### Build untuk deploy ke Netlify

```bash
npm run build
```

- Astro akan compile semua file `.astro` jadi HTML/CSS/JS biasa
- Hasilnya di folder **`dist/`**
- Folder `dist/` inilah yang nanti kamu drag ke Netlify (bukan folder project keseluruhan!)

### Preview hasil build (sebelum deploy)

```bash
npm run preview
```

Cek dulu di lokal apakah build-nya mulus, baru deploy.

---

## 📁 Struktur Folder

```
batik-astro/
├── src/
│   ├── data/
│   │   └── motifs.js          ← Data motif batik (EDIT DI SINI buat isi konten)
│   ├── layouts/
│   │   └── Layout.astro       ← Template header/footer semua halaman
│   ├── pages/
│   │   ├── index.astro        ← Homepage
│   │   ├── catalog.astro      ← Halaman katalog
│   │   ├── map.astro          ← Halaman peta
│   │   ├── about.astro        ← Halaman filosofi
│   │   └── motif/
│   │       └── [id].astro     ← Template detail motif (1 file = 8 halaman)
│   └── styles/
│       └── global.css         ← Style global + Tailwind
├── astro.config.mjs           ← Konfigurasi Astro
├── tailwind.config.mjs        ← Konfigurasi Tailwind (palet warna, dll)
└── package.json               ← Daftar dependencies
```

---

## ✏️ Cara Edit Konten Motif (untuk Dewi)

1. Buka **`src/data/motifs.js`**
2. Cari motif yang mau diisi (misal Parang)
3. Isi field: `philosophy`, `history`, `usage`, `visual`, `sources`
4. Save → halaman detail motif otomatis update

Untuk teks panjang, pakai backtick (`` ` ``) dan pisah paragraf dengan `\n\n`:

```javascript
history: `Paragraf pertama tentang sejarah motif.\n\nParagraf kedua tentang perkembangannya.`,
```

---

## 🚢 Deploy ke Netlify

### Cara A: Drag & Drop (paling simpel)

1. Jalankan `npm run build` → tunggu sampai selesai
2. Buka **netlify.com/drop** (atau halaman project di Netlify)
3. Drag folder **`dist/`** (BUKAN folder project!) ke kotak Netlify
4. Tunggu deploy selesai → web update

### Cara B: Connect GitHub (otomatis tiap commit)

(Nanti aja kalau udah familiar, ini lebih advanced)

---

## ❗ Troubleshooting

**Error `npm not found`** → Node.js belum terinstall, install dulu dari nodejs.org

**Error pas `npm install`** → cek koneksi internet, coba lagi. Atau jalankan `npm install --force`

**Halaman 404 atau error pas `npm run dev`** → cek terminal apa ada error message merah, baca dengan teliti

**Style/Tailwind gak muncul** → restart `npm run dev` (Ctrl+C terus jalankan lagi)

---

## 🆘 Kalau Stuck

Buka chat dengan Claude lagi, attach:
- File yang error (misal motifs.js atau halaman yang bermasalah)
- Screenshot terminal error message
- Penjelasan: lagi ngapain, apa yang diharapkan, apa yang terjadi
