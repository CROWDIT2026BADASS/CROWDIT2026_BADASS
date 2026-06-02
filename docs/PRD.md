# Product Requirements Document (PRD)

## 1. Latar Belakang
Dalam era digitalisasi pendidikan, kemudahan akses terhadap informasi dan materi pembelajaran menjadi faktor krusial. Namun, banyak platform edukasi yang ada saat ini membutuhkan spesifikasi perangkat yang tinggi atau memiliki antarmuka yang membingungkan. **EduFuture** dirancang sebagai solusi *frontend-only* yang ringan, responsif, dan interaktif untuk mendemonstrasikan bagaimana informasi pembelajaran dapat disajikan secara efektif tanpa membebani perangkat pengguna.

## 2. Tujuan dan Target Pengguna
| Komponen | Deskripsi |
| :--- | :--- |
| **Tujuan Utama** | Menyediakan purwarupa (*prototype*) platform edukasi digital yang informatif, menarik secara visual, responsif, dan memberikan pengalaman pengguna (UX) yang optimal. |
| **Target Pengguna** | 1. Siswa/Mahasiswa yang mencari informasi kelas dan materi.<br>2. Tenaga Pendidik (Guru/Dosen).<br>3. Masyarakat umum yang membutuhkan akses edukasi digital. |

## 3. Spesifikasi Fitur Utama
| Nama Fitur | Deskripsi Fungsi | Tujuan Interaksi |
| :--- | :--- | :--- |
| **Hero Section** | Bagian beranda utama dengan *headline* visual yang kuat dan tombol *Call-to-Action* (CTA). | Menarik perhatian pengguna pada detik pertama kunjungan. |
| **Course Catalog** | Daftar kategori materi pembelajaran (Matematika, Sains, Bahasa, dll.) dalam bentuk *card* interaktif. | Memudahkan navigasi pengguna dalam menemukan materi yang relevan. |
| **Learning Features** | Penjelasan visual mengenai keunggulan platform (misal: UI responsif, akses cepat). | Mengomunikasikan nilai jual utama (*Unique Selling Proposition*) platform. |
| **Event Schedule** | Linimasa (*timeline*) atau tabel jadwal webinar dan kelas daring. | Memberikan informasi terkini mengenai kegiatan belajar. |
| **Testimonials** | *Slider* atau *grid* berisi ulasan fiktif dari pengguna. | Membangun kredibilitas dan kepercayaan pengunjung. |
| **Interactive FAQ** | Daftar pertanyaan umum dengan format *accordion* yang dapat dibuka-tutup. | Mengurangi kebingungan pengguna melalui informasi mandiri yang cepat. |

## 4. Batasan Sistem (Non-Fungsional)
* **Frontend-Only:** Tidak menggunakan basis data (*database*) aktif atau server-side rendering.
* **Data Statis:** Semua konten (materi, jadwal, ulasan) di-*hardcode* dalam format JSON atau langsung di dalam HTML.
* **Aksesibilitas:** Dirancang agar ringan dan memuat halaman (*load time*) di bawah 3 detik pada koneksi standar.
