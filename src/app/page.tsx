import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background/55 items-center justify-between">
        <SiteHeader />
        <Button />
    </main>
  );
}
