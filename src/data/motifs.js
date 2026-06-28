/* =============================================================
   DATA MOTIF BATIK — 12 motif dari riset Tahap 2.
   Konten: nama, asal, deskripsi, gaya motif, filosofi dari dataset.
   Metadata 7 dimensi (warna/tema/dll) ditambahkan untuk fitur pencarian.
   ============================================================= */

export const COLOR_TOKENS = {
  sogan:  { label: "Sogan",   hex: "#7B4A2B", meaning: "Cokelat alami dari kulit pohon soga, identitas batik keraton Solo–Yogyakarta. Melambangkan kesederhanaan, ketenangan, kebijaksanaan, dan pribadi yang hangat & rendah hati." },
  indigo: { label: "Indigo",  hex: "#1E3A5F", meaning: "Biru tua dari tarum/wedel (Indigofera), salah satu pewarna tertua dalam batik. Melambangkan kedalaman, kebijaksanaan, dan kewibawaan." },
  hitam:  { label: "Hitam",   hex: "#1F1A15", meaning: "Ketegasan dan keabadian. Dalam Serat Wirid Hidayat Jati menjadi simbol nafsu lawwamah (keduniawian); dalam filosofi Hindu Bali Tridatu, hitam melambangkan sifat tamas yang harus diseimbangkan." },
  gading: { label: "Gading",  hex: "#EDE3CC", meaning: "Putih kekuningan, simbol kesucian dan kesadaran. Dalam tradisi Jawa berkait dengan nafsu mutmainah (kebaikan); dalam Hindu Bali sejalan dengan sifat satwam (kebijaksanaan jernih)." },
  merah:  { label: "Merah",   hex: "#A0341E", meaning: "Keberanian dan semangat hidup. Menonjol di batik pesisir (Cirebon, Lasem) dan batik Dayak Kalimantan; dalam tradisi Jawa & Bali juga melambangkan energi dan ketegasan." },
  biru:   { label: "Biru",    hex: "#2C6E8F", meaning: "Kesegaran dan ketenangan laut. Identik dengan batik pesisir seperti Mega Mendung Cirebon, merefleksikan keterbukaan masyarakat pesisir terhadap pengaruh luar." },
  emas:   { label: "Emas",    hex: "#C9A961", meaning: "Kemuliaan, keagungan, dan kemakmuran. Aksen pada batik untuk acara istimewa; dalam tradisi keraton dikaitkan dengan keluhuran dan perjalanan rohani." },
  oranye: { label: "Oranye",  hex: "#C57B3C", meaning: "Kehangatan dan keceriaan. Tampak pada Sogan Solo (cokelat-oranye yang hangat), batik Betawi yang ramai, hingga batik Dayak Kalimantan." },
  terakota:{ label: "Terakota",hex: "#9C5B3B", meaning: "Cokelat kemerahan tanah, dekat dengan unsur alam. Menggambarkan kesederhanaan, kedekatan dengan bumi, dan kekayaan hayati Nusantara." },
};

export const MOTIFS = [
  {
    id: "parang", name: "Parang", region: "Yogyakarta", pattern: "parang",
    bg: ["#EDE3CC", "#C9A961"], colors: ["gading", "sogan", "hitam", "emas"],
    themes: ["Geometris"], contexts: ["Acara Resmi Keraton"],
    wearer: "Sultan & Bangsawan", technique: "Tulis", era: "Klasik",
    summary: "Motif bergelombang menyerupai ombak atau tebing terjal, simbol kekuatan dan keberanian.",
    philosophy: "Perjuangan, keteguhan, dan jalinan kehidupan yang tak pernah terputus.",
    history: `Motif Parang berkembang di lingkungan keraton Yogyakarta. Kata "parang" berasal dari bahasa Jawa yang bermakna pedang, mencerminkan kesan tegas dan kuat pada motifnya.\n\nMotif ini menyerupai ombak atau tebing terjal, dan secara tradisional dimaknai sebagai simbol kekuatan serta keberanian.`,
    usage: `Secara tradisional, Parang dikenakan dalam acara resmi keraton dan dahulu menjadi motif yang hanya boleh dikenakan oleh sultan dan kalangan bangsawan.`,
    visual: `Pola disusun secara diagonal, berulang, dan bersambung tanpa putus. Susunan yang tak terputus inilah yang melambangkan kesinambungan dan kekuatan.`,
    sources: [
      { label: "Keraton Yogyakarta — Motif Batik Larangan", url: "https://www.kratonjogja.id/kagungan-dalem/12-motif-batik-larangan-keraton-yogyakarta/" },
      { label: "Kompas — Makna Filosofis Batik Parang", url: "https://travel.kompas.com/read/2022/12/08/110200227/5-makna-filosofis-batik-parang-yang-tidak-boleh-dipakai-sembarangan" },
    ],
    metadata: {
      title: "Batik Parang",
      creator: "Tradisi Keraton Mataram (Sultan Agung)",
      subject: "Motif Larangan Keraton; Geometris Diagonal",
      description: "Motif bergelombang diagonal menyerupai ombak atau tebing terjal, simbol kekuatan, keteguhan, dan kontinuitas hidup.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Abad ke-16 (Era Mataram Islam)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:parang",
      source: "Keraton Yogyakarta (kratonjogja.id); Kompas",
      language: "id",
      relation: "Berkait dengan: batikku:kawung, batikku:truntum",
      coverage: "Yogyakarta & Surakarta, Indonesia; Abad 16–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Termasuk motif larangan (awisan dalem). Secara historis hanya boleh dipakai Sultan, putra mahkota, dan keturunan langsung keraton.",
      simbol: "Ombak laut yang tak pernah berhenti — kekuatan yang berkelanjutan dari generasi ke generasi.",
      konteks: "Acara resmi keraton, pelantikan, pertunjukan tari Bedhaya & Srimpi.",
      pantangan: "Tidak boleh dipakai dalam pernikahan rakyat biasa. Secara tradisi tidak digunakan saat melayat.",
      falsafah: "Tan kena pegat — \"tak boleh terputus\", lambang perjuangan yang tak pernah berhenti dan keteguhan dalam menghadapi cobaan hidup."
    },
    cidoc: [
      { s: "Batik Parang", p: "diciptakan di", o: "Keraton Mataram" },
      { s: "Batik Parang", p: "diperuntukkan bagi", o: "Sultan dan keturunannya" },
      { s: "Batik Parang", p: "memiliki simbol", o: "Ombak laut yang tak terputus" },
      { s: "Batik Parang", p: "dilarang untuk", o: "Rakyat jelata (historis)" },
      { s: "Batik Parang", p: "dipakai dalam", o: "Tari Bedhaya & Srimpi" },
      { s: "Batik Parang", p: "berasal dari era", o: "Mataram Islam (Sultan Agung)" }
    ]
  },
  {
    id: "kawung", name: "Kawung", region: "Yogyakarta", pattern: "kawung",
    bg: ["#EDE3CC", "#9C5B3B"], colors: ["gading", "hitam", "sogan", "terakota"],
    themes: ["Geometris"], contexts: ["Acara Resmi Keraton"],
    wearer: "Bangsawan", technique: "Tulis", era: "Klasik",
    summary: "Motif berbentuk lingkaran menyerupai buah kolang-kaling atau bunga teratai, melambangkan kesucian dan keadilan.",
    philosophy: "Makna spiritual, sosial, dan kepemimpinan yang sangat mendalam.",
    history: `Kawung berasal dari bahasa Jawa yang berarti buah pohon palem atau kelapa. Ada pula yang mengaitkannya dengan kata "kwangwung", yakni kumbang tanduk.\n\nMotif ini termasuk salah satu motif tertua di tanah Jawa dan melambangkan kesucian serta keadilan.`,
    usage: `Secara tradisional dikenakan dalam acara resmi keraton oleh kalangan bangsawan.`,
    visual: `Berbentuk geometris dan simetris, dengan lingkaran-lingkaran yang tertata rapi dalam susunan segi empat.`,
    sources: [
      { label: "Keraton Yogyakarta — Motif Batik Larangan", url: "https://www.kratonjogja.id/kagungan-dalem/12-motif-batik-larangan-keraton-yogyakarta/" },
      { label: "IDN Times — Makna Motif Batik Kawung", url: "https://www.idntimes.com/men/style/motif-batik-kawung-yang-sarat-makna-dan-estetika-c1c2-01-tg1j7-xxwph0" },
    ],
    metadata: {
      title: "Batik Kawung",
      creator: "Tradisi Keraton Yogyakarta",
      subject: "Motif Larangan Keraton; Geometris Lingkaran",
      description: "Motif empat lingkaran simetris menyerupai buah kolang-kaling atau bunga teratai yang sedang mekar, simbol kesucian, keadilan, dan pengendalian diri.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Abad ke-13 (salah satu motif tertua)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:kawung",
      source: "Keraton Yogyakarta (kratonjogja.id); IDN Times",
      language: "id",
      relation: "Berkait dengan: batikku:parang, batikku:ceplok",
      coverage: "Yogyakarta, Indonesia; Abad 13–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Termasuk motif larangan. Empat lingkaran melambangkan empat arah mata angin atau konsep \"papat madhep limo pancer\" dalam kosmologi Jawa.",
      simbol: "Buah kolang-kaling (kawung) atau bunga teratai — kesucian, kebersihan hati, dan pengendalian diri.",
      konteks: "Pakaian raja, pejabat keraton, dan acara seremonial yang menuntut sikap bijak.",
      pantangan: "Tidak dipakai dalam acara yang bersifat duka atau pesta yang penuh gemerlap rakyat.",
      falsafah: "Keadilan, kebersihan hati, dan pengendalian diri (manunggaling kawula gusti) — keseimbangan antara manusia dan Yang Mahakuasa."
    },
    cidoc: [
      { s: "Batik Kawung", p: "diciptakan di", o: "Keraton Yogyakarta" },
      { s: "Batik Kawung", p: "memiliki simbol", o: "Buah Kawung / Teratai" },
      { s: "Batik Kawung", p: "merepresentasikan", o: "Empat arah mata angin" },
      { s: "Batik Kawung", p: "diperuntukkan bagi", o: "Raja dan pejabat keraton" },
      { s: "Batik Kawung", p: "berakar pada filosofi", o: "Papat madhep limo pancer" },
      { s: "Batik Kawung", p: "tergolong sebagai", o: "Motif larangan" }
    ]
  },
  {
    id: "megamendung", name: "Mega Mendung", region: "Cirebon", pattern: "mega",
    bg: ["#1E3A5F", "#2C6E8F"], colors: ["indigo", "gading", "biru"],
    themes: ["Awan / Alam", "Abstrak"], contexts: ["Sehari-hari", "Acara Resmi"],
    wearer: "Semua Kalangan", technique: "Tulis & Cap", era: "Kolonial",
    summary: "Motif awan berlapis-lapis yang melambangkan ketenangan dan pengendalian emosi.",
    philosophy: "Pengendalian diri dan kesabaran manusia yang tidak mudah marah, serta kerendahan hati spiritual yang mengingat kebesaran Tuhan melalui simbol tujuh lapisan langit.",
    history: `Mega Mendung berasal dari Cirebon, Jawa Barat, dan dikenal kuat dipengaruhi oleh budaya Tiongkok.\n\nMotif awan berlapis-lapisnya melambangkan ketenangan dan pengendalian emosi.`,
    usage: `Dikenakan dalam keseharian maupun acara resmi oleh semua kalangan masyarakat.`,
    visual: `Bersifat abstrak dengan garis melengkung berlapis dan gradasi warna biru, merah, atau ungu.`,
    sources: [
      { label: "Liputan6 — Makna Batik Mega Mendung (Maestro Katura)", url: "https://www.liputan6.com/regional/read/2616134/makna-tersembunyi-di-balik-batik-mega-mendung-cirebon" },
      { label: "Tirto — Filosofi Batik Mega Mendung", url: "https://tirto.id/mengenal-batik-mega-mendung-motif-khas-cirebon-arti-filosofi-gyZl" },
    ],
    metadata: {
      title: "Batik Mega Mendung",
      creator: "Tradisi Keraton Cirebon (pengaruh Tiongkok)",
      subject: "Motif Pesisir; Awan; Akulturasi",
      description: "Motif awan berlapis-lapis berwarna gradasi, simbol pengendalian emosi dan kesabaran. Hasil akulturasi budaya Jawa-Tiongkok di pesisir Cirebon.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Abad ke-16 (era Sunan Gunung Jati)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:megamendung",
      source: "Liputan6 (wawancara maestro Katura); Tirto",
      language: "id",
      relation: "Berkait dengan: batikku:betawi, batikku:aceh",
      coverage: "Cirebon, Jawa Barat; Abad 16–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Bisa dipakai semua kalangan, lebih bebas dibanding motif larangan keraton.",
      simbol: "Awan mendung — peneduh, kesabaran, dan pengendalian emosi.",
      konteks: "Pakaian sehari-hari, acara santai, hingga acara resmi. Sangat populer untuk batik modern.",
      pantangan: "Tradisi tidak ketat. Tujuh gradasi warna sebaiknya tidak dikurangi karena melambangkan tujuh lapis langit.",
      falsafah: "Sebagaimana awan menjadi peneduh dan tidak mudah marah, manusia hendaknya juga tenang menghadapi cobaan. Tujuh lapisan warna merepresentasikan tujuh lapis langit / Isra Mi'raj."
    },
    cidoc: [
      { s: "Mega Mendung", p: "diciptakan di", o: "Cirebon" },
      { s: "Mega Mendung", p: "memiliki simbol", o: "Awan berlapis tujuh" },
      { s: "Mega Mendung", p: "merepresentasikan", o: "Pengendalian emosi" },
      { s: "Mega Mendung", p: "merupakan akulturasi dari", o: "Budaya Tiongkok dan Jawa" },
      { s: "Mega Mendung", p: "dipopulerkan oleh", o: "Maestro Katura (Trusmi)" },
      { s: "Mega Mendung", p: "merujuk pada konsep", o: "Tujuh lapis langit (Isra Mi'raj)" }
    ]
  },
  {
    id: "truntum", name: "Truntum", region: "Surakarta", pattern: "truntum",
    bg: ["#1F1A15", "#7B4A2B"], colors: ["hitam", "indigo", "sogan"],
    themes: ["Flora"], contexts: ["Pernikahan"],
    wearer: "Semua Kalangan", technique: "Tulis", era: "Klasik",
    summary: "Motif berbentuk bintang-bintang kecil, melambangkan cinta yang tumbuh kembali.",
    philosophy: "Melambangkan cinta kasih yang tulus, kesetiaan yang abadi, dan harapan agar kebahagiaan selalu bersemi kembali.",
    history: `Truntum berasal dari Solo (Surakarta). Namanya dikaitkan dengan "tumaruntum" yang berarti tumbuh kembali, merujuk pada cinta yang bersemi lagi.`,
    usage: `Sering dikenakan dalam pernikahan, kerap dipakai oleh orang tua pengantin sebagai simbol dan doa.`,
    visual: `Berpola repetitif kecil seperti bintang yang ditaburkan, dengan titik tengah yang terang.`,
    sources: [
      { label: "Museum Batik — Filosofi Motif Truntum", url: "https://www.museumbatik.com/artikel/2015/05/9/Makna-Filosofi-dan-Cerita-di-Balik-Berbagai-Motif-Batik--seri-Truntum.html" },
      { label: "GoodNewsFromIndonesia — Kisah Batik Truntum", url: "https://www.goodnewsfromindonesia.id/2020/03/11/kisah-romantis-hingga-nilai-filosofis-di-balik-batik-truntum" },
    ],
    metadata: {
      title: "Batik Truntum",
      creator: "Kanjeng Ratu Kencana (permaisuri Paku Buwono III)",
      subject: "Motif Pernikahan; Bintang; Klasik",
      description: "Motif bintang-bintang kecil melambangkan cinta yang tumbuh bersemi kembali. Dipakai orangtua pengantin sebagai simbol menuntun anak menuju kehidupan baru.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Abad ke-18 (Surakarta)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:truntum",
      source: "Museum Batik (museumbatik.com); GoodNewsFromIndonesia",
      language: "id",
      relation: "Berkait dengan: batikku:sidomukti, batikku:parang",
      coverage: "Surakarta (Solo), Jawa Tengah; Abad 18–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Wajib dipakai oleh kedua orangtua pengantin dalam upacara pernikahan adat Jawa, khususnya midodareni.",
      simbol: "Bintang-bintang di langit malam — cinta yang menerangi gelap, tumbuh bersemi kembali.",
      konteks: "Pernikahan adat Jawa Surakarta; busana orangtua pengantin; ritual ngenger.",
      pantangan: "Secara tradisi tidak dipakai pengantin sendiri — hanya orangtua mereka. Tidak dipakai saat melayat.",
      falsafah: "Tumaruntum — \"tumbuh bersemi kembali\". Cinta yang dahulu meredup tumbuh kembali. Orangtua menuntun anaknya menuju kehidupan baru."
    },
    cidoc: [
      { s: "Truntum", p: "diciptakan oleh", o: "Kanjeng Ratu Kencana" },
      { s: "Truntum", p: "diciptakan di", o: "Keraton Surakarta" },
      { s: "Truntum", p: "memiliki simbol", o: "Bintang-bintang malam" },
      { s: "Truntum", p: "dipakai oleh", o: "Orangtua pengantin" },
      { s: "Truntum", p: "dipakai dalam", o: "Upacara midodareni" },
      { s: "Truntum", p: "berasal dari kata", o: "Tumaruntum (tumbuh bersemi)" }
    ]
  },
  {
    id: "sidomukti", name: "Sido Mukti", region: "Surakarta", pattern: "ceplok",
    bg: ["#C9A961", "#1F1A15"], colors: ["emas", "terakota", "sogan", "hitam"],
    themes: ["Geometris", "Flora"], contexts: ["Pernikahan"],
    wearer: "Bangsawan", technique: "Tulis", era: "Klasik",
    summary: "Dipakai dalam pernikahan adat Jawa, melambangkan harapan kebahagiaan dan kemakmuran.",
    philosophy: "Doa dan harapan agar pemakainya, khususnya sepasang pengantin, mencapai kehidupan yang makmur, bahagia, dan berkecukupan dengan tetap menjaga keluhuran budi pekerti.",
    history: `Sido Mukti berasal dari Solo dan menjadi salah satu motif yang lazim dikenakan dalam pernikahan adat Jawa.`,
    usage: `Dikenakan terutama dalam rangkaian pernikahan adat Jawa.`,
    visual: `Klasik geometris, umumnya berbentuk belah ketupat dengan isian motif flora, burung, atau sayap.`,
    sources: [
      { label: "Gramedia — Filosofi Motif Batik", url: "https://www.gramedia.com/best-seller/motif-batik/" },
      { label: "GoodNewsFromIndonesia — Motif Batik Populer", url: "https://www.goodnewsfromindonesia.id/2017/10/02/10-motif-batik-populer-dari-berbagai-daerah" },
    ],
    metadata: {
      title: "Batik Sido Mukti",
      creator: "Tradisi Keraton Surakarta",
      subject: "Motif Pernikahan; Doa Kemakmuran",
      description: "Motif yang dipakai dalam pernikahan adat Jawa, melambangkan harapan kebahagiaan, kemakmuran, dan kemuliaan dalam membangun rumah tangga.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Abad ke-18",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:sidomukti",
      source: "Gramedia; GoodNewsFromIndonesia",
      language: "id",
      relation: "Berkait dengan: batikku:truntum, batikku:sekarjagad",
      coverage: "Surakarta, Jawa Tengah; Abad 18–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Dipakai pengantin dalam upacara akad nikah / panggih.",
      simbol: "Burung garuda kecil, kupu-kupu, dan elemen taman surga — harmoni, kemuliaan, dan harapan.",
      konteks: "Pernikahan adat Jawa; busana pengantin laki-laki & perempuan dalam upacara panggih.",
      pantangan: "Tidak dipakai untuk acara duka. Tidak biasa dipakai sehari-hari karena makna sakralnya.",
      falsafah: "Sido = jadi, Mukti = mulia/makmur. \"Semoga menjadi mulia dan makmur\" — doa untuk pengantin agar rumah tangganya bahagia dan berkecukupan."
    },
    cidoc: [
      { s: "Sido Mukti", p: "diciptakan di", o: "Keraton Surakarta" },
      { s: "Sido Mukti", p: "memiliki simbol", o: "Burung & taman surga" },
      { s: "Sido Mukti", p: "dipakai oleh", o: "Pengantin pria & wanita" },
      { s: "Sido Mukti", p: "dipakai dalam", o: "Upacara panggih" },
      { s: "Sido Mukti", p: "merepresentasikan doa", o: "Kebahagiaan & kemakmuran" },
      { s: "Sido Mukti", p: "berasal dari kata", o: "Sido (jadi) + Mukti (mulia)" }
    ]
  },
  {
    id: "ceplok", name: "Ceplok", region: "Yogyakarta", pattern: "ceplok",
    bg: ["#7B4A2B", "#1E3A5F"], colors: ["sogan", "hitam", "gading", "indigo"],
    themes: ["Geometris"], contexts: ["Sehari-hari"],
    wearer: "Semua Kalangan", technique: "Tulis & Cap", era: "Klasik",
    summary: "Motif geometris dengan susunan simetris, sering berbentuk bunga, bintang, atau lingkaran.",
    philosophy: "Simbol berkumpulnya kebaikan, keselarasan, dan keteraturan hidup.",
    history: `Ceplok merupakan keluarga motif geometris klasik dari Yogyakarta yang tersusun secara modular dan berulang.`,
    usage: `Dikenakan dalam berbagai kesempatan sehari-hari oleh semua kalangan.`,
    visual: `Simetris dan modular, tampak seperti pola-pola mozaik yang tersusun rapi.`,
    sources: [
      { label: "Wikipedia — Batik Ceplok", url: "https://id.wikipedia.org/wiki/Batik" },
      { label: "Gramedia — Filosofi Motif Batik", url: "https://www.gramedia.com/best-seller/motif-batik/" },
    ],
    metadata: {
      title: "Batik Ceplok",
      creator: "Tradisi Keraton Yogyakarta",
      subject: "Motif Geometris; Bunga; Bintang",
      description: "Motif geometris simetris berupa pengulangan bentuk bunga, bintang, atau lingkaran. Simbol keteraturan hidup dan harmoni semesta.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Klasik (era Mataram, abad ke-17)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:ceplok",
      source: "Wikipedia; Gramedia",
      language: "id",
      relation: "Berkait dengan: batikku:kawung, batikku:sekarjagad",
      coverage: "Yogyakarta & sekitarnya; Abad 17–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Cukup bebas dipakai berbagai kalangan, terutama keluarga keraton dan bangsawan.",
      simbol: "Bentuk geometris berulang (bunga, bintang, roset) — keteraturan dan harmoni semesta.",
      konteks: "Acara semi-formal, busana sehari-hari kalangan menengah-atas Jawa, hingga pakaian dinas tradisional.",
      pantangan: "Tidak ada pantangan khusus, tergolong motif yang lebih demokratis.",
      falsafah: "Keteraturan hidup, keseimbangan, dan keindahan dalam pola yang berulang — refleksi kosmologi Jawa."
    },
    cidoc: [
      { s: "Batik Ceplok", p: "diciptakan di", o: "Yogyakarta" },
      { s: "Batik Ceplok", p: "memiliki bentuk", o: "Geometris simetris berulang" },
      { s: "Batik Ceplok", p: "merepresentasikan", o: "Keteraturan & harmoni" },
      { s: "Batik Ceplok", p: "dipakai oleh", o: "Berbagai kalangan" },
      { s: "Batik Ceplok", p: "berkerabat dengan", o: "Batik Kawung" }
    ]
  },
  {
    id: "sekarjagad", name: "Sekar Jagad", region: "Solo & Yogyakarta", pattern: "sekar",
    bg: ["#EDE3CC", "#2C6E8F"], colors: ["gading", "terakota", "emas", "biru"],
    themes: ["Abstrak", "Flora"], contexts: ["Sehari-hari", "Acara Resmi"],
    wearer: "Semua Kalangan", technique: "Tulis", era: "Kolonial",
    summary: "Motif seperti peta dunia (sekar = bunga, jagad = dunia), menggambarkan keindahan dan keragaman.",
    philosophy: "Perayaan atas pluralisme, harmoni dalam perbedaan, dan keindahan universal.",
    history: `Sekar Jagad berkembang di wilayah Solo dan Yogyakarta. Namanya berarti "bunga dunia" — gambaran keindahan yang beraneka ragam.`,
    usage: `Dikenakan dalam keseharian maupun acara resmi oleh semua kalangan.`,
    visual: `Berupa pecahan abstrak mirip mozaik atau kolase penuh warna, sering dibingkai garis hitam.`,
    sources: [
      { label: "Wikipedia — Batik Sekar Jagad", url: "https://id.wikipedia.org/wiki/Batik_Sekar_Jagad" },
      { label: "Gramedia — Filosofi Motif Batik", url: "https://www.gramedia.com/best-seller/motif-batik/" },
    ],
    metadata: {
      title: "Batik Sekar Jagad",
      creator: "Tradisi Solo & Yogyakarta",
      subject: "Motif Klasik; Pluralisme; Multi-motif",
      description: "Motif berbentuk peta dunia yang berisi banyak motif kecil — bunga, bintang, geometris — melambangkan keragaman dan keindahan dunia.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Klasik (abad ke-18)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:sekarjagad",
      source: "Wikipedia; Gramedia",
      language: "id",
      relation: "Berkait dengan: batikku:ceplok, batikku:sidomukti",
      coverage: "Solo & Yogyakarta; Abad 18–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Bebas dipakai berbagai kalangan, sering jadi pilihan kolektor karena kompleksitasnya.",
      simbol: "Sekar = bunga, Jagad = dunia. \"Bunga dunia\" — kumpulan motif kecil dalam satu kain.",
      konteks: "Acara budaya, pameran batik, koleksi museum. Sering dipakai pejabat saat menerima tamu asing.",
      pantangan: "Tidak ada pantangan ketat. Pembuatannya sangat rumit, biasanya kelas premium.",
      falsafah: "Bhinneka Tunggal Ika versi batik — keragaman dalam satu kesatuan. Dunia yang beragam justru menjadi indah karena perbedaan."
    },
    cidoc: [
      { s: "Sekar Jagad", p: "diciptakan di", o: "Solo & Yogyakarta" },
      { s: "Sekar Jagad", p: "memiliki bentuk", o: "Peta dunia berisi banyak motif" },
      { s: "Sekar Jagad", p: "merepresentasikan", o: "Keragaman & pluralisme" },
      { s: "Sekar Jagad", p: "berasal dari kata", o: "Sekar (bunga) + Jagad (dunia)" },
      { s: "Sekar Jagad", p: "menggabungkan", o: "Berbagai motif tradisional" }
    ]
  },
  {
    id: "polengbali", name: "Poleng Bali", region: "Bali", pattern: "poleng",
    bg: ["#1F1A15", "#7B4A2B"], colors: ["hitam", "gading", "sogan"],
    themes: ["Geometris"], contexts: ["Upacara Adat"],
    wearer: "Semua Kalangan", technique: "Tulis", era: "Klasik",
    summary: "Motif kotak-kotak menyerupai papan catur dengan dominasi warna hitam dan putih, khas Bali.",
    philosophy: "Melambangkan konsep Rwa Bhineda dalam ajaran Hindu Bali — keseimbangan antara dua sifat yang berlawanan: baik dan buruk, siang dan malam, suka dan duka.",
    history: `Poleng adalah motif khas Bali yang terinspirasi kain kotak-kotak hitam-putih. Kain ini lekat dengan ritual dan kehidupan spiritual masyarakat Bali.`,
    usage: `Digunakan dalam berbagai upacara adat dan keagamaan di Bali, kerap dililitkan pada patung atau pohon yang dianggap sakral.`,
    visual: `Pola kotak-kotak hitam dan putih bergantian menyerupai papan catur, mewakili dualitas alam semesta.`,
    sources: [
      { label: "Wikipedia — Kain Poleng", url: "https://id.wikipedia.org/wiki/Poleng" },
      { label: "Indonesia.go.id — Filosofi Kain Poleng Bali", url: "https://www.indonesia.go.id/" },
    ],
    metadata: {
      title: "Kain Poleng Bali",
      creator: "Tradisi Hindu Bali",
      subject: "Tekstil Sakral; Dualitas; Hitam-Putih",
      description: "Kain kotak-kotak hitam dan putih simbol Rwa Bhineda — keseimbangan dualitas (baik-buruk, suka-duka, terang-gelap). Dipasang pada patung dan pohon suci.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Tradisi kuno (sebelum era Majapahit)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:polengbali",
      source: "Wikipedia; Indonesia.go.id",
      language: "id",
      relation: "Berkait dengan: budaya Bali; konsep Rwa Bhineda",
      coverage: "Bali, Indonesia; Tradisi pra-Majapahit",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Diikatkan pada patung Dewa, pohon besar (beringin sakral), dan tugu pelinggih. Juga dipakai pecalang & penari dalam pertunjukan sakral.",
      simbol: "Hitam = tamas (kegelapan/kejahatan), Putih = satwam (kebaikan/kebijaksanaan). Kotak-kotak yang bersilang = realita kehidupan.",
      konteks: "Ritual keagamaan Hindu Bali; pertunjukan Barong & Rangda; perlindungan tempat sakral; busana pecalang (keamanan adat).",
      pantangan: "Tidak dipakai dalam acara duka berlebihan. Diperlakukan dengan hormat — tidak diletakkan sembarangan.",
      falsafah: "Rwa Bhineda — \"Dua Hal yang Berbeda\". Kehidupan adalah keseimbangan dualitas. Tidak ada terang tanpa gelap, tidak ada baik tanpa buruk."
    },
    cidoc: [
      { s: "Kain Poleng", p: "berasal dari", o: "Bali" },
      { s: "Kain Poleng", p: "memiliki simbol", o: "Rwa Bhineda (dualitas)" },
      { s: "Kain Poleng", p: "dipasang pada", o: "Patung Dewa & pohon sakral" },
      { s: "Kain Poleng", p: "dipakai oleh", o: "Pecalang & penari sakral" },
      { s: "Kain Poleng", p: "merepresentasikan konsep", o: "Tamas (hitam) & Satwam (putih)" },
      { s: "Kain Poleng", p: "berakar pada agama", o: "Hindu Bali" }
    ]
  },
  {
    id: "betawi", name: "Batik Betawi", region: "Jakarta", pattern: "sekar",
    bg: ["#C9A961", "#2C6E8F"], colors: ["emas", "indigo", "gading", "biru"],
    themes: ["Figuratif", "Flora"], contexts: ["Sehari-hari", "Acara Resmi"],
    wearer: "Semua Kalangan", technique: "Cap & Tulis", era: "Modern",
    summary: "Batik penuh warna khas Jakarta dengan ikon budaya Betawi seperti ondel-ondel, tanjidor, dan siluet gedung kota.",
    philosophy: "Ondel-ondel — ikon yang sering muncul dalam motifnya — secara tradisional dipercaya sebagai penolak bala dan pelindung. Motif Betawi merayakan identitas budaya Jakarta di tengah arus modernitas: pertemuan tradisi dan kota.",
    history: `Batik Betawi berkembang di kawasan Batavia sejak abad ke-19, memadukan kearifan lokal Betawi dengan pengaruh budaya Tionghoa, Belanda, Arab, dan pesisir Jawa.\n\nMotifnya menampilkan ikon khas Jakarta seperti ondel-ondel, tanjidor, dan motif Pencakar Langit (siluet gedung tinggi), Nusa Kelapa, serta Ciliwung.`,
    usage: `Dikenakan dalam keseharian maupun acara resmi. Sejak 1970-an bahkan menjadi bagian dari busana resmi None Jakarta.`,
    visual: `Didominasi warna cerah dan berani (merah, jingga, kuning, biru, hijau) yang diadopsi dari batik pesisir seperti Cirebon dan Pekalongan, dengan motif figuratif yang ramai dan dinamis.`,
    sources: [
      { label: "GoodNewsFromIndonesia — Motif Batik Betawi", url: "https://www.goodnewsfromindonesia.id/2022/11/10/8-motif-batik-betawi-jakarta-yang-cantik-dan-kaya-makna-filosofi" },
      { label: "Kompas — Motif Batik Betawi", url: "https://travel.kompas.com/read/2022/05/19/162950027/8-motif-batik-betawi-dari-jakarta-yang-bernilai-sejarah-dan-budaya" },
    ],
    metadata: {
      title: "Batik Betawi",
      creator: "Komunitas Betawi (Jakarta)",
      subject: "Motif Urban; Ondel-ondel; Ikon Budaya",
      description: "Batik penuh warna khas Jakarta dengan ikon budaya Betawi: ondel-ondel, tanjidor, dan siluet gedung kota. Merepresentasikan harmoni budaya kota.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Modern (revival abad ke-20)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:betawi",
      source: "Kompas; GoodNewsFromIndonesia",
      language: "id",
      relation: "Berkait dengan: budaya Betawi; Jakarta",
      coverage: "Jakarta (DKI), Indonesia; Abad 20–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Demokratis — bisa dipakai semua kalangan. Sering jadi seragam dinas Pemprov DKI Jakarta.",
      simbol: "Ondel-ondel (boneka raksasa) = penolak bala. Tanjidor = harmoni musik. Gedung = kota modern.",
      konteks: "Acara budaya Betawi (Pekan Raya Jakarta), seragam dinas, oleh-oleh khas Jakarta.",
      pantangan: "Tidak ada pantangan ketat. Tradisi yang relatif baru dan demokratis.",
      falsafah: "Harmoni budaya kota — orang Betawi terbuka pada berbagai pengaruh (Arab, Tiongkok, Eropa) tapi tetap punya identitas khas."
    },
    cidoc: [
      { s: "Batik Betawi", p: "berasal dari", o: "Jakarta" },
      { s: "Batik Betawi", p: "menampilkan ikon", o: "Ondel-ondel" },
      { s: "Batik Betawi", p: "menampilkan ikon", o: "Tanjidor" },
      { s: "Batik Betawi", p: "merepresentasikan", o: "Identitas urban Betawi" },
      { s: "Ondel-ondel", p: "berfungsi sebagai", o: "Penolak bala" }
    ]
  },
  {
    id: "aceh", name: "Batik Aceh", region: "Aceh", pattern: "ceplok",
    bg: ["#1E3A5F", "#1F1A15"], colors: ["indigo", "biru", "gading", "hitam"],
    themes: ["Flora", "Abstrak"], contexts: ["Acara Resmi"],
    wearer: "Semua Kalangan", technique: "Tulis & Cap", era: "Modern",
    summary: "Motif sulur dan flora khas Aceh dengan kontras putih krem di atas latar biru tua yang tegas, bernuansa Islami.",
    philosophy: "Pola sulur dan flora yang meliuk tanpa menggambarkan makhluk hidup secara realistis mencerminkan kuatnya nilai keislaman di Aceh. Keteraturan dan keseimbangan motifnya melambangkan keteguhan serta keterbukaan masyarakat Aceh.",
    history: `Batik Aceh berkembang dipengaruhi kedatangan pedagang dari Jawa, lalu memadukannya dengan kekhasan budaya dan nilai keislaman Aceh.\n\nCiri khas batik Aceh adalah dominasi motif sulur, garis melingkar, dan flora — menghindari penggambaran makhluk hidup secara realistis, sejalan dengan nilai Islami setempat. Beberapa motif terkenal lainnya yaitu Pinto Aceh, Bungong Jeumpa, dan Rencong.`,
    usage: `Dikenakan untuk berbagai keperluan — acara resmi, keagamaan, hingga sehari-hari. Batik Aceh dikenal kental nuansa religius.`,
    visual: `Foto ini menampilkan ciri khas sulur dan flora yang meliuk dengan kontras terang di atas latar biru tua. Pola sulur melingkar mencerminkan pengaruh seni Islami yang menghindari figur makhluk hidup.`,
    sources: [
      { label: "RRI — Ragam Motif Batik Aceh", url: "https://www.rri.co.id/lain-lain/1018766/moment-hari-batik-nasional-kenali-ragam-motif-batik-aceh" },
      { label: "GoodNewsFromIndonesia — Batik Aceh", url: "https://www.goodnewsfromindonesia.id/2022/11/24/batik-aceh-sejarah-ciri-khas-dan-motif-motifnya" },
    ],
    metadata: {
      title: "Batik Aceh",
      creator: "Komunitas Aceh",
      subject: "Motif Islami; Sulur; Flora",
      description: "Motif sulur dan flora khas Aceh dengan kontras putih krem di atas latar biru tua. Bernuansa Islami, mencerminkan budaya religius Aceh.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Modern (revival pasca-tsunami 2004)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:aceh",
      source: "RRI; GoodNewsFromIndonesia",
      language: "id",
      relation: "Berkait dengan: budaya Aceh; Islam Nusantara",
      coverage: "Aceh, Indonesia; Abad 21",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Mengikuti aturan busana Islami Aceh — sopan, tertutup, tidak berlebihan. Banyak motif menghindari figur manusia/hewan.",
      simbol: "Sulur tumbuhan = pertumbuhan iman. Pinto Aceh (gerbang) = identitas. Warna biru = kedalaman & kebijaksanaan.",
      konteks: "Acara resmi Aceh, busana dinas, pernikahan adat Aceh, syukuran Islami.",
      pantangan: "Menghindari penggambaran makhluk hidup secara realistis sesuai tradisi Islam.",
      falsafah: "Iman yang tumbuh seperti sulur tanaman — perlahan, kuat, mengakar. Identitas Aceh sebagai serambi Mekkah."
    },
    cidoc: [
      { s: "Batik Aceh", p: "berasal dari", o: "Aceh" },
      { s: "Batik Aceh", p: "memiliki motif", o: "Sulur tumbuhan" },
      { s: "Batik Aceh", p: "merepresentasikan", o: "Identitas Islami Aceh" },
      { s: "Batik Aceh", p: "menghindari", o: "Figur makhluk hidup" },
      { s: "Batik Aceh", p: "mengalami revival pasca", o: "Tsunami 2004" }
    ]
  },
  {
    id: "simbut", name: "Batik Simbut", region: "Banten", pattern: "ceplok",
    bg: ["#7B4A2B", "#EDE3CC"], colors: ["sogan", "hitam", "gading"],
    themes: ["Flora"], contexts: ["Sehari-hari"],
    wearer: "Semua Kalangan", technique: "Tulis", era: "Klasik",
    summary: "Susunan motif daun talas yang rapat berwarna terakota dengan garis tepi putih di atas latar gelap.",
    philosophy: "Terinspirasi kehidupan suku Baduy yang menyatu dengan alam — melambangkan kesederhanaan, kemurnian jiwa, serta adaptabilitas manusia.",
    history: `Batik Simbut berasal dari Banten dan erat kaitannya dengan masyarakat Baduy. Motifnya termasuk salah satu motif batik tertua bergaya pra-Islam.`,
    usage: `Dikenakan dalam keseharian masyarakat, mencerminkan kehidupan yang dekat dengan alam.`,
    visual: `Motif daun talas digambarkan tegas dan berulang dengan gaya naturalis sederhana, dihiasi bintik-bintik kecil (isen-isen).`,
    sources: [
      { label: "Liputan6 — Batik Simbut Warisan Baduy", url: "https://www.liputan6.com/regional/read/5824427/batik-simbut-warisan-budaya-khas-baduy-unik-dan-memikat" },
      { label: "Budaya Indonesia — Batik Simbut", url: "https://budaya-indonesia.org/Batik-Simbut" },
    ],
    metadata: {
      title: "Batik Simbut",
      creator: "Suku Baduy (Banten)",
      subject: "Motif Daun Talas; Suku Baduy; Tertua",
      description: "Motif susunan daun talas (kuping gajah) yang rapat berwarna terakota dengan garis tepi putih di atas latar gelap. Diyakini sebagai salah satu motif batik tertua.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Pra-aksara (tradisi suku Baduy)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:simbut",
      source: "Liputan6; Budaya Indonesia",
      language: "id",
      relation: "Berkait dengan: suku Baduy; batik nusantara tertua",
      coverage: "Banten (suku Baduy), Indonesia; Pra-aksara",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Dibuat oleh masyarakat Baduy dengan teknik sederhana — tanpa canting modern, menggunakan bambu sebagai alat dasar.",
      simbol: "Daun talas/simbukan = kedekatan dengan alam, kesederhanaan, dan kearifan lokal.",
      konteks: "Dipakai sehari-hari oleh suku Baduy. Sekarang dilestarikan sebagai warisan budaya non-Mataram.",
      pantangan: "Tradisi Baduy melarang motif yang terlalu rumit atau modern — kesederhanaan adalah bagian dari pakem.",
      falsafah: "Kesederhanaan dan kedekatan dengan alam — hidup selaras dengan bumi, tidak berlebihan. Motif ini bukti bahwa batik bukan eksklusif Jawa Tengah."
    },
    cidoc: [
      { s: "Batik Simbut", p: "berasal dari", o: "Banten (suku Baduy)" },
      { s: "Batik Simbut", p: "memiliki motif", o: "Daun talas" },
      { s: "Batik Simbut", p: "dianggap sebagai", o: "Motif batik tertua" },
      { s: "Batik Simbut", p: "dibuat oleh", o: "Masyarakat Baduy" },
      { s: "Batik Simbut", p: "menggunakan teknik", o: "Tradisional (tanpa canting modern)" },
      { s: "Batik Simbut", p: "merepresentasikan", o: "Kesederhanaan & kedekatan dengan alam" }
    ]
  },
  {
    id: "shaho", name: "Batik Dayak", region: "Kalimantan", pattern: "sekar",
    bg: ["#A0341E", "#EDE3CC"], colors: ["merah", "terakota", "gading"],
    themes: ["Flora", "Abstrak"], contexts: ["Acara Resmi"],
    wearer: "Semua Kalangan", technique: "Tulis", era: "Modern",
    summary: "Batik khas Kalimantan dengan motif ukiran Dayak — bentuk melengkung, spiral, dan sulur yang terinspirasi liukan akar dan ranting pohon.",
    philosophy: "Mengangkat kedekatan masyarakat Dayak dengan alam: motif ukiran yang meliuk seperti akar, ranting, dan tumbuhan menjadi simbol kehidupan yang tumbuh dan saling terhubung dengan lingkungan.",
    history: `Batik Dayak berkembang di Kalimantan dengan mengadaptasi kekayaan motif ukiran khas suku Dayak ke dalam media kain batik. Salah satu contoh terkenal adalah Batik Shaho dari Balikpapan (berdiri 1996), yang mengangkat ukiran Dayak Kenyah dan Bahau.\n\nMotif ukiran Dayak umumnya terinspirasi dari unsur alam Kalimantan — akar, sulur, tumbuhan, hingga fauna khas seperti burung enggang.`,
    usage: `Dikenakan dalam berbagai acara resmi sebagai identitas budaya Kalimantan, dan populer sebagai cinderamata khas daerah.`,
    visual: `Ciri khasnya berupa motif ukiran Dayak dengan bentuk melengkung, spiral, dan sulur yang meliuk. Sering memakai pewarna alami seperti serbuk kayu ulin yang menghasilkan warna membumi khas Kalimantan.`,
    sources: [
      { label: "DJKI Kemenkumham — Batik Shaho (contoh batik Dayak Kaltim)", url: "https://www.dgip.go.id/artikel/detail-artikel-berita/batik-shaho-kerajinan-kain-bermotif-khas-kalimantan-timur?kategori=liputan-humas" },
      { label: "Orami — Motif Batik Kalimantan & Filosofinya", url: "https://www.orami.co.id/magazine/batik-kalimantan" },
    ],
    metadata: {
      title: "Batik Dayak (Kalimantan)",
      creator: "Komunitas Dayak Kalimantan",
      subject: "Motif Dayak; Ukiran; Sulur",
      description: "Batik khas Kalimantan dengan motif ukiran Dayak — bentuk melengkung, spiral, dan sulur yang terinspirasi liukan akar dan ranting pohon hutan tropis.",
      publisher: "Batikku — Platform Pelestarian Batik",
      contributor: "Tim Riset Batikku (2026)",
      date: "Modern (revival abad ke-20)",
      type: "Image; InteractiveResource; Text",
      format: "image/jpeg; text/html",
      identifier: "batikku:shaho",
      source: "DJKI Kemenkumham (dgip.go.id); Orami",
      language: "id",
      relation: "Berkait dengan: budaya Dayak; seni ukir Kalimantan",
      coverage: "Kalimantan (Timur & Tengah), Indonesia; Abad 20–sekarang",
      rights: "Domain publik (warisan budaya); Konten Batikku CC BY-SA 4.0"
    },
    pradata: {
      pakem: "Motif ukiran Dayak (terutama Kenyah & Bahau) yang sebelumnya hanya pada perisai, rumah, dan tato — kini dipindahkan ke kain batik.",
      simbol: "Sulur & spiral = kehidupan yang tumbuh dan saling terhubung. Warna merah & emas = keberanian dan kemuliaan.",
      konteks: "Acara budaya Dayak, kenduri adat, busana resmi Kalimantan, oleh-oleh budaya.",
      pantangan: "Beberapa motif Dayak punya nilai sakral — tradisi setempat membedakan motif untuk acara biasa vs ritual.",
      falsafah: "Manusia adalah bagian dari hutan — pohon, akar, dan ranting saling terkait, sebagaimana manusia dalam komunitasnya."
    },
    cidoc: [
      { s: "Batik Dayak", p: "berasal dari", o: "Kalimantan" },
      { s: "Batik Dayak", p: "terinspirasi dari", o: "Ukiran tradisional Dayak" },
      { s: "Batik Dayak", p: "memiliki motif", o: "Sulur, spiral, akar" },
      { s: "Batik Dayak", p: "dibuat oleh", o: "Komunitas Dayak (Kenyah & Bahau)" },
      { s: "Batik Dayak", p: "merepresentasikan", o: "Hubungan manusia & hutan" },
      { s: "Batik Dayak", p: "dilindungi oleh", o: "DJKI Kemenkumham" }
    ]
  },
];

/* Helper pola SVG (reusable di banyak halaman) */
export function patternSVG(m, ratio = 'tall') {
  const stroke = "#F5EEE1";
  const patterns = {
    parang: `<g fill="none" stroke="${stroke}" stroke-opacity="0.32" stroke-width="3" stroke-linecap="round"><path d="M-10,25 Q5,8 20,25 T50,25 T80,25 T110,25"/><path d="M-10,50 Q5,33 20,50 T50,50 T80,50 T110,50"/><path d="M-10,75 Q5,58 20,75 T50,75 T80,75 T110,75"/><path d="M-10,100 Q5,83 20,100 T50,100 T80,100 T110,100"/></g>`,
    kawung: `<g fill="none" stroke="${stroke}" stroke-opacity="0.45" stroke-width="2.5"><ellipse cx="25" cy="28" rx="10" ry="15"/><ellipse cx="50" cy="28" rx="10" ry="15"/><ellipse cx="75" cy="28" rx="10" ry="15"/><ellipse cx="25" cy="70" rx="10" ry="15"/><ellipse cx="50" cy="70" rx="10" ry="15"/><ellipse cx="75" cy="70" rx="10" ry="15"/><ellipse cx="37" cy="49" rx="10" ry="15"/><ellipse cx="62" cy="49" rx="10" ry="15"/><ellipse cx="37" cy="91" rx="10" ry="15"/><ellipse cx="62" cy="91" rx="10" ry="15"/></g>`,
    mega: `<g fill="none" stroke="${stroke}" stroke-opacity="0.4" stroke-width="3" stroke-linecap="round"><path d="M10,40 q0,-18 18,-18 q18,0 18,14 q14,-9 23,2 q9,7 0,16"/><path d="M5,72 q0,-20 20,-20 q20,0 20,15 q15,-10 24,2 q10,8 0,18"/><path d="M18,100 q0,-15 15,-15 q15,0 15,11"/></g>`,
    truntum: `<g fill="${stroke}" fill-opacity="0.4">${[...Array(5)].map((_, i) => [...Array(4)].map((_, j) => `<g transform="translate(${15 + i * 18},${18 + j * 28})"><circle r="2"/><circle cx="6" r="1.3"/><circle cx="-6" r="1.3"/><circle cy="6" r="1.3"/><circle cy="-6" r="1.3"/></g>`).join('')).join('')}</g>`,
    ceplok: `<g fill="none" stroke="${stroke}" stroke-opacity="0.4" stroke-width="2">${[...Array(4)].map((_, i) => [...Array(5)].map((_, j) => `<g transform="translate(${18 + i * 22},${15 + j * 24})"><circle r="7"/><path d="M-7,0 L0,-7 L7,0 L0,7 Z"/></g>`).join('')).join('')}</g>`,
    sekar: `<g fill="none" stroke="${stroke}" stroke-opacity="0.38" stroke-width="2">${[...Array(4)].map((_, i) => [...Array(5)].map((_, j) => `<g transform="translate(${18 + i * 22},${14 + j * 24}) rotate(${(i + j) * 30})"><path d="M0,-8 C4,-4 4,4 0,8 C-4,4 -4,-4 0,-8Z"/><path d="M-8,0 C-4,-4 4,-4 8,0 C4,4 -4,4 -8,0Z"/></g>`).join('')).join('')}</g>`,
    poleng: `<g fill="${stroke}" fill-opacity="0.32">${[...Array(5)].map((_, i) => [...Array(7)].map((_, j) => ((i + j) % 2 === 0) ? `<rect x="${i * 20}" y="${j * 18}" width="20" height="18"/>` : '').join('')).join('')}</g>`,
  };
  const vb = ratio === 'wide' ? '0 0 100 66' : '0 0 100 125';
  return `<svg viewBox="${vb}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g-${m.id}-${ratio}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${m.bg[0]}"/><stop offset="1" stop-color="${m.bg[1]}"/></linearGradient></defs><rect width="100" height="125" fill="url(#g-${m.id}-${ratio})"/>${patterns[m.pattern] || patterns.ceplok}</svg>`;
}

/* =============================================================
   HELPER VISUAL — foto di depan, pola SVG di belakang.
   Kalau file foto /images/motifs/{id}.jpg ADA -> foto menutupi SVG.
   Kalau foto BELUM ada (404) -> img disembunyikan, SVG terlihat.
   Bersih, tanpa string-escaping yang rawan error.
   ============================================================= */
export function visualMotif(m, ratio = 'tall') {
  const svg = patternSVG(m, ratio);
  const imgSrc = `/images/motifs/${m.id}.jpg`;
  return `<div style="position:relative;width:100%;height:100%;">
    <div style="position:absolute;inset:0;">${svg}</div>
    <img src="${imgSrc}" alt="Motif batik ${m.name}" loading="lazy"
      style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;"
      onerror="this.style.display='none'" />
  </div>`;
}
