# Daftar Halaman dan Route

Status: `Foundation` sudah memiliki shell/empty state; `Planned` diimplementasikan pada tahap domain terkait.

## Storefront dan Auth

| Route                    | Akses           | Status     | Fungsi                             |
| ------------------------ | --------------- | ---------- | ---------------------------------- |
| `/`                      | Publik          | Foundation | Homepage dan discovery shell       |
| `/kategori`              | Publik          | Foundation | Daftar kategori                    |
| `/cari`                  | Publik          | Foundation | Pencarian dan URL filter           |
| `/produk/[slug]`         | Publik          | Planned    | Detail produk dan variasi          |
| `/toko/[slug]`           | Publik          | Planned    | Profil dan katalog toko            |
| `/promo`                 | Publik          | Planned    | Promo platform/toko                |
| `/keranjang`             | Publik          | Foundation | Keranjang guest/customer           |
| `/checkout`              | Customer        | Planned    | Alamat, kurir, voucher, konfirmasi |
| `/wishlist`              | Customer        | Foundation | Produk tersimpan                   |
| `/pesanan`               | Customer        | Foundation | Riwayat pesanan                    |
| `/pesanan/[orderNumber]` | Customer        | Planned    | Detail dan tracking                |
| `/akun`                  | Customer        | Foundation | Hub profil customer                |
| `/akun/profil`           | Customer        | Planned    | Profil dan keamanan                |
| `/akun/alamat`           | Customer        | Planned    | CRUD alamat                        |
| `/chat`                  | Customer/Seller | Planned    | Daftar percakapan                  |
| `/chat/[conversationId]` | Customer/Seller | Planned    | Pesan real-time                    |
| `/login`                 | Guest           | Foundation | Login email/Google                 |
| `/register`              | Guest           | Planned    | Registrasi customer                |
| `/lupa-password`         | Guest           | Planned    | Recovery password                  |
| `/reset-password`        | Guest           | Planned    | Set password baru                  |
| `/auth/callback`         | Guest           | Planned    | OAuth/email callback               |
| `/bantuan`               | Publik          | Foundation | Hub FAQ dan kebijakan              |

## Seller

| Route                  | Status     | Fungsi                  |
| ---------------------- | ---------- | ----------------------- |
| `/seller/daftar`       | Foundation | Onboarding seller       |
| `/seller`              | Planned    | Ringkasan bisnis        |
| `/seller/toko`         | Planned    | Profil dan anggota toko |
| `/seller/produk`       | Planned    | Daftar produk           |
| `/seller/produk/baru`  | Planned    | Buat produk             |
| `/seller/produk/[id]`  | Planned    | Edit produk/variasi     |
| `/seller/stok`         | Planned    | Inventory dan mutasi    |
| `/seller/pesanan`      | Planned    | Antrean pesanan         |
| `/seller/pesanan/[id]` | Planned    | Proses pesanan          |
| `/seller/promo`        | Planned    | Voucher/flash sale toko |
| `/seller/ulasan`       | Planned    | Balas ulasan            |
| `/seller/keuangan`     | Planned    | Saldo, ledger, payout   |
| `/seller/analitik`     | Planned    | Statistik toko          |

## Admin

| Route               | Fungsi                         |
| ------------------- | ------------------------------ |
| `/admin`            | Dashboard global               |
| `/admin/pengguna`   | Pengguna dan status akun       |
| `/admin/seller`     | Verifikasi dan moderasi seller |
| `/admin/kategori`   | Kategori dan atribut           |
| `/admin/produk`     | Moderasi katalog               |
| `/admin/pesanan`    | Pengawasan order               |
| `/admin/transaksi`  | Pembayaran dan ledger          |
| `/admin/refund`     | Permintaan refund              |
| `/admin/promosi`    | Voucher, flash sale, banner    |
| `/admin/konten`     | CMS halaman/FAQ                |
| `/admin/laporan`    | Laporan bisnis                 |
| `/admin/audit`      | Audit log                      |
| `/admin/pengaturan` | Konfigurasi aplikasi           |

## API, Webhook, dan Cron

| Route                       | Metode | Proteksi                  |
| --------------------------- | ------ | ------------------------- |
| `/api/webhooks/midtrans`    | POST   | Signature + idempotency   |
| `/api/webhooks/resend`      | POST   | Provider signature        |
| `/api/cron/expire-payments` | POST   | `CRON_SECRET`             |
| `/api/cron/release-stock`   | POST   | `CRON_SECRET`             |
| `/api/health`               | GET    | Sanitized public response |
