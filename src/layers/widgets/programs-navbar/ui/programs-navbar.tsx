"use client";

import Link from "next/link";
import { programsNavbarItems } from "../model/programs-navbar-items";


type NavbarProps = {
    activeTabId: string;
    onSectionChange: (id: string) => void;
};

export default function ProgramsNavbar({ activeTabId, onSectionChange }: NavbarProps) {
    return (
        <div role="navigation" aria-label="Program detayında gezinme" className="w-full min-h-[550px] self-start rounded-md bg-slate-200 xl:sticky xl:top-4 xl:col-span-1">
            <section className="flex h-22 items-center justify-center border-b-2 border-slate-300">
                <img src="/brand/ktu.svg" alt="Karadeniz Teknik Üniversitesi" className="h-48 w-48  object-contain" />
            </section>
            <section className="mt-2 grid  row-span-7 justify-items-center gap-y-2  sm:px-4">
                {programsNavbarItems.map(item => (
                    <div key={item.id} id={item.id} className={`flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeTabId === item.id ? "bg-slate-300" : ""}`}>
                        <Link href={`#${item.sectionId}`} onClick={() => onSectionChange(item.sectionId)} aria-current={activeTabId === item.id ? "location" : undefined} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{item.label}</Link>
                    </div>
                ))}
            </section>
        </div>
    );
}
