import {cookies} from "next/headers";
import LanguageProvider from "@/layers/shared/providers/language-provider";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Programlar | KTÜ Ders Kataloğu",
  description: "Karadeniz Teknik Üniversitesi akademik programları ve AKTS bilgi paketi tasarım prototipi.",
};
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const en=(await cookies()).get("ktu_language")?.value==="en";
  return <html lang={en?"en":"tr"}><body><LanguageProvider initialEnglish={en}>{children}</LanguageProvider></body></html>;
}
