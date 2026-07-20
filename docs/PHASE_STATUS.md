# Status Implementasi

## Selesai — Tahap 1: Fondasi

- [x] Inisialisasi Next.js 16 App Router + React 19
- [x] TypeScript strict dan import alias
- [x] Tailwind CSS 4 dengan design tokens light/dark
- [x] Konfigurasi shadcn/ui dan primitives awal
- [x] Supabase browser/server clients
- [x] Supabase session refresh melalui Next.js `proxy.ts`
- [x] Validasi environment publik/server dengan Zod
- [x] Struktur folder berbasis domain
- [x] Global metadata, locale `id`, timezone formatter `Asia/Jakarta`
- [x] Global storefront layout, sticky header, footer, mobile bottom navigation
- [x] Theme, TanStack Query, toast providers
- [x] Shared button, badge, card, input, dropdown, skeleton, empty/error state
- [x] Zustand persisted cart boundary
- [x] Responsive foundation pages tanpa fake product records
- [x] Lint, typecheck, unit test, format, dan build scripts
- [x] Arsitektur, blueprint database, struktur folder, dan route map

## Belum — Tahap Berikutnya

- [ ] Tahap 2: Migration SQL, constraints, indexes, RLS, storage policies, generated database types, seed
- [ ] Tahap 3: Register/login/Google/email verification/recovery/RBAC/rate limiting
- [ ] Tahap 4: Katalog database, filter, detail, wishlist, cart sync
- [ ] Tahap 5: Address, shipping adapter, voucher, stock reservation, checkout
- [ ] Tahap 6: Midtrans sandbox, signature webhook, event log, expiration, refund
- [ ] Tahap 7: Customer, seller, dan admin dashboards
- [ ] Tahap 8: Order/stock/chat/notification realtime subscriptions
- [ ] Tahap 9: E2E, security, performance, accessibility, SEO review
- [ ] Tahap 10: Production migration, webhook, monitoring, backup, cron, deployment

Tidak ada akun development pada Tahap 1 karena schema Auth/RBAC dan seed user baru dibuat di Tahap 2–3. Kredensial development tidak akan disimpan di Git.
