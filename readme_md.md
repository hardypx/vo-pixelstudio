# 🎙️ PixelStudio — Voice Clone & Multi-Engine TTS Studio

**PixelStudio** adalah aplikasi web mandiri berbasis *client-side* untuk membuat *voice-over* (VO) berintonasi natural dengan gaya antarmuka **Soft Neo-Brutalist Rounded UI**. Aplikasi ini dirancang khusus untuk kreator konten video pendek (TikTok, Instagram Reels, YouTube Shorts) yang membutuhkan sinkronisasi naskah presisi, kloning suara (*voice cloning*), dan ekspor audio berkualitas tinggi (`.wav`).

## ✨ Fitur Utama

### 1. 🧬 Multi-Engine Audio & Voice Cloning
* **Voice Clone (Template Suara Luar):** Unggah sampel suara referensi (`.mp3` / `.wav`, durasi 10–30 detik) untuk meniru warna vokal dan intonasi:
  * **Fish Audio (`Instant Clone`):** Mendukung *reference audio* + transkrip sampel untuk akurasi pelafalan Bahasa Indonesia tinggi.
  * **ElevenLabs (`Instant Clone`):** Pembuatan *voice ID* sementara otomatis dengan model `eleven_multilingual_v2`.
  * **Local Acoustic Matcher (Tanpa API Eksternal):** Menganalisis frekuensi nada dasar ($\text{Hz}$ & *semitone*) dari file template suara menggunakan Web Audio API lalu mencocokkannya secara lokal.
* **✨ Gemini Neural AI TTS:** Menggunakan model `gemini-2.5-flash-preview-tts` dengan 8 pilihan karakter suara (`Puck`, `Fenrir`, `Charon`, `Zephyr`, `Kore`, dll.) serta kontrol instruksi gaya bicara (*style prompt*), lengkap dengan konverter otomatis *raw PCM 24kHz* ke file `.wav`.
* **💻 Browser Native TTS (Offline Fallback):** Menggunakan *Web Speech API* bawaan browser/OS secara gratis tanpa memerlukan koneksi internet maupun API Key.

### 2. 📝 Editor Naskah & Kalkulator Durasi Real-Time
* Dilengkapi contoh naskah siap pakai berdurasi **73 detik** (*"Apa yang Gemini Nggak Bisa?"*).
* Tombol sisipkan penanda jeda cepat (`[jeda 0.3s]`, `[jeda 0.6s]`, `—`) tepat di posisi kursor.
* Penghitung otomatis **Jumlah Kata**, **Karakter**, dan **Estimasi Durasi Baca** yang menyesuaikan kecepatan bicara (*pace*) yang dipilih.

### 3. 🎛️ Studio Audio Player & Live Waveform
* Visualisasi gelombang suara (*waveform*) *real-time* menggunakan HTML5 `<canvas>` dan `AnalyserNode`.
* Kalibrasi *Pace / Speed* (`0.85x` – `1.30x`) dan *Pitch* (`-4` hingga `+4` semitone).
* Unduh hasil audio langsung dalam format **`vo.wav`** siap pakai untuk editing video.

## 🎨 Palet Warna & Identitas Desain

| Elemen | Kode Hex | Keterangan |
| :--- | :--- | :--- |
| **Canvas Grid** | `#EEEEEE` | Latar belakang utama dengan pola grid `#DCDCDC` |
| **Card Surface** | `#FFFFFF` | Permukaan kartu utama dengan sudut *rounded* & *hard shadow* |
| **Ink / Border** | `#071B2B` | Warna teks utama, garis tepi tebal, dan bayangan solid |
| **Primary Accent** | `#167D8D` | Warna tombol aksi utama, tab aktif, dan gelombang audio |
| **Secondary Accent** | `#B9E4E8` | Warna *badge*, area *dropzone* sampel, dan sorotan status |

## 🚀 Cara Menjalankan & Deploy

Karena **PixelStudio** dibangun dalam satu file HTML mandiri tanpa ketergantungan *build tools* (Node.js/Webpack), Anda bisa langsung menjalankannya dengan cara berikut:

### 1. Menjalankan Secara Lokal (VS Code)
1. *Clone* atau unduh repositori ini:
   ```bash
   git clone https://github.com/username-anda/pixelstudio.git
   cd pixelstudio
   ```
2. Buka folder di **VS Code**, klik kanan pada file `index.html`, lalu pilih **Open with Live Server**.

### 2. Deploy Gratis ke GitHub Pages
1. *Push* file `index.html` dan `README.md` ke repositori `pixelstudio` di GitHub Anda.
2. Buka tab **Settings** $\rightarrow$ **Pages** di repositori GitHub.
3. Pada bagian **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
4. Aplikasi siap diakses secara *online* melalui URL `https://username-anda.github.io/pixelstudio/`.

## 🔐 Keamanan API Key
Seluruh API Key (Fish Audio, ElevenLabs, maupun Gemini API) yang Anda masukkan disimpan secara lokal di browser Anda melalui `localStorage` (`hardy_clone_api_key` & `hardy_gemini_api_key`) dan tidak pernah dikirim ke server pihak ketiga selain endpoint resmi penyedia AI yang Anda pilih.

## 📄 Lisensi
Proyek ini dirilis di bawah lisensi **MIT** — bebas digunakan, dimodifikasi, dan dikembangkan untuk kebutuhan produksi konten pribadi maupun komersial.

---
Dibuat oleh [**@hardy.px**](https://github.com/)