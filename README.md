# BPJS Kesehatan Dashboard

Aplikasi web dashboard untuk petugas BPJS Kesehatan yang dibangun menggunakan React dan Vite.

## 📁 Struktur Folder

```
bpjs_kesehatan/
├── public/                     # File statis
│   └── vite.svg               # Logo Vite
├── src/                       # Source code aplikasi
│   ├── assets/               # Asset aplikasi
│   │   └── react.svg         # Logo React
│   ├── login/                # Komponen login
│   │   ├── login.css         # Styling untuk halaman login
│   │   ├── login.jsx         # Komponen utama login
│   │   └── main.jsx          # Entry point untuk login
│   ├── App.css               # Styling global aplikasi
│   ├── App.jsx               # Komponen utama aplikasi
│   ├── index.css             # Styling global
│   └── main.jsx              # Entry point utama aplikasi
├── index.html                # Halaman utama aplikasi
├── login.html                # Halaman login
├── redirect.html             # Halaman redirect
├── package.json              # Dependencies dan scripts
├── package-lock.json         # Lock file untuk dependencies
├── vite.config.js            # Konfigurasi Vite
├── eslint.config.js          # Konfigurasi ESLint
└── README.md                 # Dokumentasi proyek
```

## 🚀 Fitur

- **Sistem Login**: Halaman login dengan validasi form
- **Dashboard Petugas**: Interface untuk petugas BPJS Kesehatan
- **Responsive Design**: Tampilan yang responsif untuk berbagai ukuran layar
- **Modern UI/UX**: Desain yang modern dan user-friendly

## 🛠️ Teknologi yang Digunakan

- **React 19.1.1** - Library JavaScript untuk membangun UI
- **Vite 7.1.2** - Build tool yang cepat
- **ESLint** - Linter untuk kualitas kode
- **CSS3** - Styling modern

## 📦 Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Menjalankan Aplikasi

### Development Mode
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

## 📄 Halaman Aplikasi

- **`/login.html`** - Halaman login untuk petugas
- **`/index.html`** - Dashboard utama aplikasi
- **`/redirect.html`** - Halaman redirect

## 🔧 Konfigurasi

### Vite Configuration
File `vite.config.js` berisi konfigurasi untuk build tool Vite.

### ESLint Configuration
File `eslint.config.js` berisi aturan linting untuk menjaga kualitas kode.

## 📝 Scripts

- `dev` - Menjalankan development server
- `build` - Build aplikasi untuk production
- `preview` - Preview build production
- `lint` - Menjalankan ESLint

## 🤝 Kontribusi

Untuk berkontribusi pada proyek ini, silakan:
1. Fork repository
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## 📞 Support

Jika ada pertanyaan atau masalah, silakan hubungi administrator sistem.
