"use client";
import Image from "next/image";
import Link from "next/link";

export default function SiteHeader({ en, setEn }: { en: boolean; setEn: (value: boolean) => void }) {
  const t = (tr: string, english: string) => en ? english : tr;
  return <header className="header">
    <Link className="brand" href="/" aria-label={t("KTÜ ders kataloğu ana sayfa", "KTU course catalog home")}><Image src="/brand/ktu.svg" width={280} height={102} alt="Karadeniz Teknik Üniversitesi / Karadeniz Technical University" priority /></Link>
    <div className="header-label"><span>{t("DERS KATALOĞU", "COURSE CATALOG")}</span><small>{t("AKTS Bilgi Paketi", "ECTS Information Package")}</small></div>
    <div className="language-switch" aria-label={t("Site dili", "Site language")}><button aria-pressed={!en} onClick={() => setEn(false)}>TR</button><button aria-pressed={en} onClick={() => setEn(true)}>EN</button></div>
  </header>;
}
