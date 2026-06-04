# Technical Requirement Document (TRD)

## 1. Spesifikasi Teknologi (Tech Stack)
| Lapisan (Layer) | Teknologi yang Digunakan | Alasan Pemilihan |
| :--- | :--- | :--- |
| **Struktur (Markup)** | HTML5 (Semantik) | Memastikan aksesibilitas (a11y) dan struktur SEO dasar yang baik. |
| **Gaya Visual (Styling)** | CSS3 (Vanilla) / Tailwind CSS | Mempercepat proses desain (*styling*) yang responsif dan konsisten. |
| **Interaktivitas** | Vanilla JavaScript (ES6+) | Menangani interaksi UI (animasi, *scroll*, *accordion*) tanpa beban *library* eksternal seperti React/Vue agar performa maksimal. |
| **Aset Visual** | Font Awesome / Google Fonts | Menyediakan ikonografi dan tipografi modern yang profesional. |

## 2. Kriteria Kinerja dan Responsivitas
| Parameter | Standar / Target |
| :--- | :--- |
| **Resolusi Mobile** | Kompatibel penuh pada lebar layar < 576px (Smartphones). |
| **Resolusi Tablet** | Kompatibel pada lebar layar 576px - 991px. |
| **Resolusi Desktop** | Tampilan optimal pada lebar layar ≥ 992px. |
| **Waktu Muat (Load Time)** | < 3 Detik (*First Contentful Paint* optimal). |
| **Kompatibilitas Peramban** | Chrome, Firefox, Safari, Edge versi terbaru. |

## 3. Struktur Direktori Proyek
Struktur file dirancang agar rapi, modular, dan mematuhi standar pengembangan *frontend* modern:

```text
edutech-project/
│
├── index.html              # Halaman utama aplikasi
├── css/
│   └── style.css           # Berkas styling utama (termasuk variabel warna & media queries)
├── js/
│   └── main.js             # Logika interaktivitas (DOM manipulation, event listeners)
├── assets/
│   ├── images/             # Direktori untuk foto, ilustrasi, dan logo
│   └── icons/              # Direktori untuk ikon lokal (SVG/PNG)
├── data/
│   └── content.json        # (Opsional) File JSON untuk menyimpan data statis materi
└── README.md               # Dokumentasi cara menjalankan dan penjelasan proyek
```
