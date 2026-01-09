# Panduan Deploy Alternatif dengan PM2 + Serve

Jika kamu lebih suka menggunakan PM2 daripada Nginx direct serving, kamu bisa menggunakan metode ini. Ini berguna jika kamu ingin memanage aplikasi layaknya aplikasi Node.js.

## 1. Persiapan
Pastikan sudah install PM2 dan `serve` (web server ringan untuk static file) secara global di VPS.

```bash
npm install -g pm2 serve
```

## 2. Start Aplikasi dengan PM2
Masuk ke folder project, lalu jalankan perintah ini.
Perintah ini akan menyuruh PM2 untuk men-serve folder `dist` (hasil build) di port 3000.

```bash
# Pastikan sudah build dulu
npm run build

# Start PM2
pm2 serve dist 3000 --spa --name "ardana-portfolio"
```

*   `dist`: Folder target.
*   `3000`: Port yang digunakan.
*   `--spa`: Mode Single Page Application (agar refresh halaman tidak 404).
*   `--name`: Nama aplikasi di list PM2.

Cek status:
```bash
pm2 list
pm2 logs ardana-portfolio
```

## 3. Update Script Deploy (deploy.sh)
Jika pakai PM2, script deploy kamu perlu diupdate sedikit agar merestart PM2 setelah build.

Edit `deploy.sh`:

```bash
#!/bin/bash
echo "🚀 Deploying..."
git pull origin main
npm install
npm run build

# Reload PM2 (Tanpa mati total)
pm2 reload ardana-portfolio

echo "✅ Deploy Success!"
```

## 4. (Opsional) Setting Nginx sebagai Reverse Proxy
Jika kamu ingin akses pakai domain (Port 80/443) tapi PM2 jalan di Port 3000, kamu tetap butuh Nginx sebagai perantara.

Edit config Nginx:
```nginx
server {
    listen 80;
    server_name IP_VPS_ANDA;

    location / {
        # Teruskan request ke PM2 di port 3000
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Kesimpulan
*   **Cara Nginx Direct (Sebelumnya)**: Lebih Cepat & Ringan. (Rekomendasi)
*   **Cara PM2**: Lebih enak buat monitoring log & manajemen process ala Node.js.
