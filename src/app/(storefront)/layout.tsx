import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#konten-utama"
        className="bg-primary text-primary-foreground fixed top-2 left-2 z-[100] -translate-y-20 rounded-lg px-4 py-2 text-sm font-semibold focus:translate-y-0"
      >
        Lewati ke konten utama
      </a>
      <SiteHeader />
      <main id="konten-utama" className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <SiteFooter />
      <MobileNavigation />
    </div>
  );
}
