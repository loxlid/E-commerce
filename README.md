# NexaCommerce

Marketplace multi-seller modern untuk Indonesia, dibangun dengan Next.js, TypeScript, Tailwind CSS, shadcn/ui, dan Supabase.

> Status saat ini: **Tahap 1 — Fondasi selesai.** Produk, akun, dan transaksi palsu sengaja tidak ditambahkan. Data commerce nyata masuk melalui migration, RLS, dan seed terkontrol pada tahap berikutnya.

## Yang Sudah Berjalan

- App Router responsive dengan locale Bahasa Indonesia.
- Premium storefront shell, sticky header, footer, dan bottom navigation mobile.
- Light/dark/system theme, toast, serta TanStack Query provider.
- Komponen UI shadcn-compatible dan shared loading/empty/error states.
- Zustand cart yang persisten dengan guard jumlah terhadap stok lokal.
- Supabase browser/server client dan session refresh melalui Next.js `proxy.ts`.
- Environment validation dengan Zod; secret hanya dibaca server-side.
- Metadata SEO dasar dan aksesibilitas keyboard/skip link.
- Lint, typecheck, unit test, formatting, dan production build scripts.

Checklist lengkap ada di [`docs/PHASE_STATUS.md`](docs/PHASE_STATUS.md).

## Stack

- Next.js 16.2 + React 19.2
- TypeScript 5.9 (strict)
- Tailwind CSS 4.3 + shadcn/ui conventions
- Supabase JS + `@supabase/ssr`
- TanStack Query, Zustand, React Hook Form, Zod
- Vitest + Testing Library

Versi dikunci melalui `package-lock.json` agar build dapat direproduksi.

## Menjalankan Lokal

Persyaratan: Node.js 20.9 atau lebih baru dan npm 10 atau lebih baru.

```bash
git clone https://github.com/loxlid/E-commerce.git
cd E-commerce
npm install
cp .env.example .env.local
```

Isi minimal untuk membuka aplikasi dengan Supabase:

```dotenv
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://<project-ref>.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<publishable-key>
```

Kemudian jalankan:

```bash
npm run dev
```

Buka `http://localhost:3000`. Jangan pernah memasukkan `SUPABASE_SERVICE_ROLE_KEY`, `MIDTRANS_SERVER_KEY`, `RESEND_API_KEY`, atau `CRON_SECRET` ke variabel berawalan `NEXT_PUBLIC_`.

## Quality Gate

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Atau seluruhnya:

```bash
npm run check
```

Build membutuhkan kredensial public Supabase yang valid karena `proxy.ts` memvalidasi konfigurasi saat menerima request. CI dapat memakai project staging atau nilai lokal Supabase CLI.

## Dokumen Teknis

- [Arsitektur sistem](docs/ARCHITECTURE.md)
- [Blueprint database dan RLS](docs/DATABASE_SCHEMA.md)
- [Struktur project](docs/PROJECT_STRUCTURE.md)
- [Daftar route](docs/ROUTES.md)
- [Status implementasi](docs/PHASE_STATUS.md)

## Environment

| Variable                               | Client | Wajib sekarang | Kegunaan                    |
| -------------------------------------- | ------ | -------------- | --------------------------- |
| `NEXT_PUBLIC_APP_URL`                  | Ya     | Ya             | URL canonical aplikasi      |
| `NEXT_PUBLIC_SUPABASE_URL`             | Ya     | Ya             | Supabase project URL        |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Ya     | Ya             | Public Data API/Auth key    |
| `SUPABASE_SERVICE_ROLE_KEY`            | Tidak  | Tahap 2        | Job admin tepercaya         |
| `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY`      | Ya     | Tahap 6        | Snap client tokenization    |
| `MIDTRANS_SERVER_KEY`                  | Tidak  | Tahap 6        | Midtrans server API/webhook |
| `MIDTRANS_IS_PRODUCTION`               | Tidak  | Tahap 6        | Memilih sandbox/production  |
| `RESEND_API_KEY`                       | Tidak  | Tahap 3        | Transactional email         |
| `EMAIL_FROM`                           | Tidak  | Tahap 3        | Sender terverifikasi        |
| `CRON_SECRET`                          | Tidak  | Tahap 5        | Proteksi scheduled jobs     |

## Deployment Foundation

1. Buat project Supabase production terpisah dari development.
2. Tambahkan repository ke Vercel dan isi environment sesuai `.env.example`.
3. Gunakan Node.js 20+ dan perintah build `npm run build`.
4. Setelah Tahap 2, migration harus dijalankan sebelum versi aplikasi yang membutuhkannya dirilis.
5. Setelah Tahap 6, URL webhook Midtrans diarahkan ke `/api/webhooks/midtrans` dan diverifikasi signature-nya.
6. Preview deployment harus memakai Supabase staging, bukan database production.

Runbook deployment production lengkap, backup, cron, monitoring, dan rollback diselesaikan pada Tahap 10.

## Akun Development

Belum ada pada Tahap 1. Akun admin, seller, dan customer dibuat oleh seed Auth yang aman pada Tahap 2–3; password development tidak disimpan di repository publik.

## Prinsip Implementasi

- Harga, promo, ongkir, dan total selalu dihitung ulang di server.
- RLS adalah lapisan wajib, bukan pengganti validasi aplikasi.
- Checkout, stok, payment, ledger, dan refund harus transaksional serta idempoten.
- Data transaksi penting memakai append-only history atau soft delete.
- Seller tidak pernah memilih scope toko hanya dari input client.

Lihat [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) untuk keputusan lengkap.
