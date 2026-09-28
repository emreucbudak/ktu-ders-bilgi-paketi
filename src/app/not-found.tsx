"use client";
import Link from "next/link";
import { useLanguage } from "@/layers/shared/providers/language-provider";
import SiteHeader from "@/layers/shared/ui/site-header";

export default function NotFound() {
  const [en, setEn] = useLanguage();
  return <div className="site"><SiteHeader en={en} setEn={setEn}/><main className="route-message"><h1>{en ? "Page not found" : "Sayfa bulunamadı"}</h1><p>{en ? "This program or course could not be found. Continue from the program list." : "Bu bağlantıya ait program veya ders bulunamadı. Program listesinden devam edebilirsiniz."}</p><Link href="/">{en ? "Back to programs" : "Programlara dön"}</Link></main></div>;
}
