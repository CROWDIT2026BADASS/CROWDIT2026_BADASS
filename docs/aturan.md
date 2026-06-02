# Panduan Kolaborasi Tim Frontend: HTML/CSS & JavaScript

Dokumen ini berisi kesepakatan (SOP) antara pengembang HTML/CSS (UI/UX) dan pengembang JavaScript (Logic/Interaktivitas) untuk mencegah bentrok, mengurangi *bug*, dan memastikan kelancaran *development* website EduFuture.

---

## 1. Aturan Penamaan (Naming Convention) & Selektor
Agar perubahan *styling* (CSS) tidak secara tidak sengaja merusak logika *script* (JS), selektor yang digunakan oleh kedua pihak harus dipisah secara tegas:

* **Tugas HTML/CSS:** Gunakan *class* reguler (BEM, standar, atau *utility class* seperti Tailwind) secara bebas untuk urusan desain.
  * *Contoh:* `.btn-primary`, `.card-container`, `.text-bold`
* **Tugas JS:** 
  * **Dilarang keras** menggunakan *class styling* untuk target elemen di JavaScript (misal: `document.querySelector('.btn-primary')`).
  * Gunakan awalan spesifik **`js-`** pada *class* khusus yang diperuntukkan bagi JavaScript.
    * *Contoh:* `<button class="btn-primary js-submit-btn">`
  * Untuk elemen yang pasti hanya ada satu di halaman, gunakan atribut **`id`**.
    * *Contoh:* `<div id="faq-accordion">`

## 2. Pengelolaan Status (State Management)
Pemisahan logika visual dan logika interaksi saat komponen berubah kondisi (*state*).

* **Tugas JS:** JS **dilarang memanipulasi *inline styles*** secara langsung (contoh: `element.style.display = 'none'`), kecuali untuk kalkulasi dinamis (seperti menghitung koordinat *mouse*). JS cukup bertugas **menambah/menghapus *class state***.
  * *Contoh class state:* `.is-active`, `.is-hidden`, `.is-loading`, `.is-open`, `.has-error`.
* **Tugas HTML/CSS:** Bertanggung jawab mendefinisikan tampilan dari *class state* tersebut di dalam CSS.
  * *Contoh CSS:* `.is-hidden { display: none !important; }` atau `.is-open { transform: translateY(0); }`

## 3. Komunikasi Data HTML ke JS (Data Attributes)
* Jika JS membutuhkan data/nilai spesifik dari HTML (seperti ID materi, nama target, dsb), **HTML Dev wajib menyediakannya melalui atribut `data-*`**.
  * *Contoh HTML:* `<button class="btn js-load-more" data-target="course-list" data-page="2">Load More</button>`
* JS kemudian cukup mengambil data tersebut via *dataset*.
  * *Contoh JS:* `let target = button.dataset.target;`
* **JS dilarang keras** mengekstrak data dari isi teks (*inner text*) elemen visual, karena teks rawan berubah (typo/penerjemahan) yang akan membuat logika JS ikut rusak.

## 4. Perubahan Struktur DOM & Pembuatan Elemen Dinamis
* **Pihak HTML/CSS** wajib memberi tahu (notifikasi) pihak JS apabila melakukan perombakan struktur DOM besar-besaran, terutama jika elemen yang dirombak membungkus elemen ber-*class* `js-` atau memiliki `id` penting.
* **Pihak JS** yang merender atau membuat elemen HTML baru menggunakan *script* (misal merender *card* hasil pencarian), wajib memastikan struktur *tag* dan *class* yang dihasilkan **persis 100% sama** dengan *mockup* HTML statis yang sudah disiapkan oleh pihak HTML/CSS.

## 5. Pemisahan Area Efek Visual
* **Efek Interaktif Dasar:** Animasi *hover*, *focus*, *active*, transisi warna, dan *scale* **sepenuhnya diurus oleh CSS**.
* **Efek Kompleks:** JS bertugas sebagai "pemicu" (*trigger*) atau *event listener* saja. Begitu diklik, JS menempelkan *class*, lalu CSS yang menjalankan sisa animasinya.

## 6. Resolusi Konflik (Git Merge Conflict)
Karena bekerja di repositori yang sama, minimalkan konflik pada file dengan cara:
* Pihak HTML/CSS berkuasa penuh pada file `*.html` dan isi folder `css/`.
* Pihak JS berkuasa penuh pada isi folder `js/`.
* Jika pihak JS terpaksa harus menyisipkan *class* `js-` atau `data-*` ke dalam file `.html`, sebaiknya lakukan komunikasi lisan/grup terlebih dahulu sebelum di-*commit*, agar tidak bentrok jika pihak HTML/CSS juga sedang mengedit file HTML tersebut.
