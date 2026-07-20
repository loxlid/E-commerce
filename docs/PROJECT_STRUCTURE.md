# Struktur Project

```text
.
├── docs/                         # Kontrak arsitektur dan delivery
├── public/                       # Asset publik teroptimasi
├── src/
│   ├── app/                      # App Router, layouts, route handlers
│   │   ├── (auth)/               # Login, register, recovery
│   │   ├── (storefront)/         # Area publik dan customer
│   │   ├── admin/                # Dashboard admin terproteksi
│   │   ├── seller/               # Dashboard seller terproteksi
│   │   └── api/                  # Webhook, cron, integrations
│   ├── components/
│   │   ├── layout/               # Header, footer, navigation
│   │   ├── providers/            # Theme, Query, app providers
│   │   ├── shared/               # Komponen lintas domain
│   │   └── ui/                   # Primitives shadcn/ui
│   ├── features/                 # Kode berdasarkan domain bisnis
│   │   └── <domain>/
│   │       ├── actions/          # Server Actions
│   │       ├── components/       # UI milik domain
│   │       ├── hooks/            # Hooks milik domain
│   │       ├── repositories/     # Akses data
│   │       ├── schemas/          # Zod schemas
│   │       ├── services/         # Aturan/use case
│   │       └── types/            # Tipe domain
│   ├── lib/                      # Infrastruktur dan utilitas
│   │   ├── supabase/             # Browser/server/proxy client
│   │   └── validations/          # Validasi lintas domain
│   ├── services/                 # Adapter pihak ketiga bersama
│   └── types/                    # Generated/shared types
├── supabase/
│   ├── migrations/               # SQL migration berurutan
│   ├── seed.sql                  # Seed development idempoten
│   └── config.toml               # Supabase local development
└── tests/                        # Setup dan test lintas domain
```

## Aturan Penempatan

- Kode yang hanya dipakai satu domain tetap berada di `features/<domain>`.
- `components/shared` hanya untuk presentational component yang benar-benar lintas domain.
- Query database hanya berada di repository atau server module, tidak di event handler UI.
- Integrasi Midtrans, Resend, storage, dan kurir memakai adapter di `services`.
- Import dari domain lain dilakukan melalui public API (`features/<domain>/index.ts`) untuk mencegah coupling internal.
- File dengan secret memakai `import "server-only"`.
