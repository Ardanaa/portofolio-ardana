# Panduan Deploy Portofolio Ardana dengan Nginx di VPS (Ubuntu/Debian)

Karena ini adalah aplikasi React (Vite), cara terbaik untuk deploy di Production adalah dengan **Static Serving** menggunakan Nginx. Jangan gunakan `npm run dev` untuk production karena lambat dan tidak aman.

## Langkah 1: Build Project
Di VPS Anda, masuk ke folder project dan jalankan build.
Ini akan membuat folder `dist` yang berisi file HTML, CSS, dan JS yang sudah dioptimasi.

```bash
cd /path/to/portofolio-ardana
npm install
npm run build
```

Pastikan folder `dist` sudah muncul.

## Langkah 2: Install Nginx
Jika belum ada Nginx:
```bash
sudo apt update
sudo apt install nginx
```

## Langkah 3: Konfigurasi Nginx
Buat file konfigurasi baru untuk website Anda.

```bash
sudo nano /etc/nginx/sites-available/ardana-portfolio
```

Isi dengan konfigurasi berikut (sesuaikan path folder project Anda):

```nginx
server {
    listen 80;
    server_name IP_VPS_ANDA atau DOMAIN_ANDA.com; 

    # Arahkan root ke folder dist hasil build tadi
    root /path/to/portofolio-ardana/dist;
    index index.html;

    location / {
        # PENTING: Untuk React Router (SPA)
        # Jika file tidak ditemukan, redirect ke index.html
        try_files $uri $uri/ /index.html;
    }

    # Cache Control (Optional tapi Bagus)
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }
}
```

> **Catatan**: Ganti `/path/to/portofolio-ardana/dist` dengan lokasi asli di VPS Anda (misal: `/home/ubuntu/portofolio-ardana/dist`).

## Langkah 4: Aktifkan Site
Symlink konfigurasi tadi ke `sites-enabled`.

```bash
sudo ln -s /etc/nginx/sites-available/ardana-portfolio /etc/nginx/sites-enabled/
```

Cek apakah konfigurasi sudah benar:
```bash
sudo nginx -t
```
(Harus muncul "syntax is ok").

## Langkah 5: Restart Nginx
```bash
sudo systemctl restart nginx
```

## Selesai! 🎉
Buka browser dan akses IP VPS atau Domain Anda.
Website harusnya sudah jalan di Port 80 (tanpa perlu ketik :3000 atau :5173).

---
## Tips Tambahan (SSL / HTTPS)
Jika sudah punya domain, sangat disarankan pasang HTTPS pakai Certbot (Gratis):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d domainanda.com
```
