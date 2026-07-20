import { EmptyState } from "@/components/shared/empty-state";

export default function NotFound() {
  return (
    <main className="container-page py-20">
      <EmptyState
        title="Halaman tidak ditemukan"
        description="Alamat yang kamu buka tidak tersedia atau sudah dipindahkan."
        actionLabel="Kembali ke beranda"
        actionHref="/"
      />
    </main>
  );
}
