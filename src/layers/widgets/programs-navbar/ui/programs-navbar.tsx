"use client";

import Link from "next/link";
import { activateDetailSection, useActiveSection } from "@/layers/shared/lib/use-active-section";

const sectionIds = ["overview","program-aim-title","outcomes-title","admission-title","graduation-title","career-title","curriculum-title","contact-title"] as const;

export default function ProgramsNavbar() {
    const activeSection = useActiveSection(sectionIds);
    return (
        <div role="navigation" aria-label="Program detayında gezinme" className="w-full min-h-[550px] self-start rounded-md bg-slate-200 xl:sticky xl:top-4 xl:col-span-1">
            <section className="flex h-22 items-center justify-center border-b-2 border-slate-300">
                <img src="/brand/ktu.svg" alt="Karadeniz Teknik Üniversitesi" className="h-48 w-48  object-contain" />
            </section>
            <section className="mt-2 grid  row-span-7 justify-items-center gap-y-2  sm:px-4">
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "overview" ? "bg-slate-300" : ""}`}>
                    <Link href="#overview" onClick={() => activateDetailSection("overview")} aria-current={activeSection === "overview" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Program Hakkında</Link>
                </div>
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "program-aim-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#program-aim-title" onClick={() => activateDetailSection("program-aim-title")} aria-current={activeSection === "program-aim-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Programın Amacı</Link>
                </div>
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "outcomes-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#outcomes-title" onClick={() => activateDetailSection("outcomes-title")} aria-current={activeSection === "outcomes-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Program Öğrenme Kazanımları</Link>
                </div>
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "admission-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#admission-title" onClick={() => activateDetailSection("admission-title")} aria-current={activeSection === "admission-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Kabul Koşulları</Link>
                </div>
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "graduation-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#graduation-title" onClick={() => activateDetailSection("graduation-title")} aria-current={activeSection === "graduation-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Mezuniyet Koşulları</Link>
                </div>
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "career-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#career-title" onClick={() => activateDetailSection("career-title")} aria-current={activeSection === "career-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Kariyer Olanakları</Link>
                </div>
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "curriculum-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#curriculum-title" onClick={() => activateDetailSection("curriculum-title")} aria-current={activeSection === "curriculum-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Ders Planı</Link>
                </div>
                <div className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "contact-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#contact-title" onClick={() => activateDetailSection("contact-title")} aria-current={activeSection === "contact-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">İletişim Bilgileri</Link>
                </div>
            </section>
        </div>
    );
}
