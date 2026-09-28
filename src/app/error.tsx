"use client";
import Link from "next/link";
import { useLanguage } from "@/layers/shared/providers/language-provider";
import SiteHeader from "@/layers/shared/ui/site-header";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const [en, setEn] = useLanguage();
  return <div className="site"><SiteHeader en={en} setEn={setEn}/><main className="route-message" role="alert"><h1>{en ? "Unable to load page" : "Sayfa yüklenemedi"}</h1><p>{en ? "A temporary problem occurred. Try again or return to the program list." : "Geçici bir sorun oluştu. Yeniden deneyebilir veya program listesine dönebilirsiniz."}</p><div><button onClick={reset}>{en ? "Try again" : "Yeniden dene"}</button><Link href="/">{en ? "Back to programs" : "Programlara dön"}</Link></div></main></div>;
}
