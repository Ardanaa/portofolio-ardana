#!/bin/bash

# Script Autodeploy Portofolio Ardana
# Pastikan script ini dijalankan di dalam folder project di VPS (atau sesuaikan path cd di bawah)

echo "🚀 Memulai proses deploy..."

# 1. Pull perubahan terbaru dari GitHub
echo "📥 Menarik kode terbaru dari git..."
git pull origin main

# 2. Install dependencies (jaga-jaga ada update package)
echo "📦 Menginstall dependencies..."
npm install

# 3. Build project untuk production
echo "🔨 Membangun project (Build)..."
npm run build

# 4. Selesai
echo "✅ Deploy Berhasil! Website sudah terupdate."
echo "🌍 Silakan cek di browser."
