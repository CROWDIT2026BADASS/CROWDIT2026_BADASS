# Entity Relationship Diagram (ERD) Konseptual

Meskipun EduTech adalah website statis, ERD konseptual ini disertakan dalam proposal untuk menunjukkan **pemahaman arsitektur data** jika sistem ini nantinya dikembangkan menjadi platform dinamis (menggunakan *backend*).

## 1. Visualisasi ERD

```mermaid
erDiagram
    USER {
        int user_id PK
        string name
        string email
        string role "student, teacher"
    }
    CATEGORY {
        int category_id PK
        string category_name
        string description
    }
    COURSE {
        int course_id PK
        int category_id FK
        string course_title
        string description
        string level "beginner, intermediate, advanced"
        int duration_minutes
    }
    SCHEDULE {
        int schedule_id PK
        int course_id FK
        string event_name
        date event_date
        time event_time
        string mode "online, offline"
    }
    TESTIMONIAL {
        int testimonial_id PK
        int user_id FK
        string content
        int rating
        date created_at
    }
    FAQ {
        int faq_id PK
        string question
        string answer
    }
    CONTACT_MESSAGE {
        int message_id PK
        int user_id FK
        string subject
        string message
        date created_at
    }

    USER ||--o{ TESTIMONIAL : "memberikan"
    USER ||--o{ CONTACT_MESSAGE : "mengirim"
    CATEGORY ||--o{ COURSE : "memiliki"
    COURSE ||--o{ SCHEDULE : "terjadwal pada"
```

## 2. Kamus Data (Data Dictionary)
| Entitas | Deskripsi | Atribut Kunci (Primary Key) |
| :--- | :--- | :--- |
| **User** | Data entitas pengguna (siswa/guru) yang berinteraksi. | `user_id` |
| **Category** | Pengelompokan bidang ilmu atau mata pelajaran. | `category_id` |
| **Course** | Data spesifik mengenai kelas atau modul materi. | `course_id` |
| **Schedule** | Jadwal spesifik untuk pelaksanaan *course* tertentu. | `schedule_id` |
| **Testimonial**| Ulasan dan penilaian (rating) yang diberikan oleh *User*. | `testimonial_id` |
| **FAQ** | Kumpulan pertanyaan dan jawaban statis. | `faq_id` |
| **Contact_Message**| Pesan dari form kontak. | `message_id` |
