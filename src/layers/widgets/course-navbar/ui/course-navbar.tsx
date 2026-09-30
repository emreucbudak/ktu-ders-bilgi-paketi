"use client";

import Link from "next/link";


type NavbarProps = {
    activeSection: string;
    onSectionChange: (id: string) => void;
    en: boolean;
};

export default function CourseNavbar({ en, activeSection, onSectionChange }: NavbarProps) {
    return (
        <div role="navigation" aria-label={en ? "Navigate course details" : "Ders detayında gezinme"} className="w-full min-h-[550px] self-start rounded-md bg-slate-200 xl:sticky xl:top-4 xl:col-span-1">
            <section className="flex h-22 items-center justify-center border-b-2 border-slate-300">
                <img src="/brand/ktu.svg" alt="Karadeniz Teknik Üniversitesi" className="h-48 w-48 max-w-full object-contain" />
            </section>
            <section className="mt-2 grid grid-cols-1 justify-items-center gap-y-2 px-3 pb-4 sm:px-4">
                <div className={`course-information flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "course-information" ? "bg-slate-300" : ""}`}>
                    <Link href="#course-information" onClick={() => onSectionChange("course-information")} aria-current={activeSection === "course-information" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Course Information" : "Ders Bilgileri"}</Link>
                </div>
                <div className={`course-aim-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "course-aim-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#course-aim-title" onClick={() => onSectionChange("course-aim-title")} aria-current={activeSection === "course-aim-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Course Aim" : "Dersin Amacı"}</Link>
                </div>
                <div className={`prerequisites-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "prerequisites-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#prerequisites-title" onClick={() => onSectionChange("prerequisites-title")} aria-current={activeSection === "prerequisites-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Prerequisites" : "Ön Koşullar"}</Link>
                </div>
                <div className={`textbook-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "textbook-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#textbook-title" onClick={() => onSectionChange("textbook-title")} aria-current={activeSection === "textbook-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Textbook and Resources" : "Ders Kitabı ve Kaynaklar"}</Link>
                </div>
                <div className={`course-outcomes-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "course-outcomes-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#course-outcomes-title" onClick={() => onSectionChange("course-outcomes-title")} aria-current={activeSection === "course-outcomes-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Learning Outcomes" : "Öğrenme Kazanımları"}</Link>
                </div>
                <div className={`matrix-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "matrix-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#matrix-title" onClick={() => onSectionChange("matrix-title")} aria-current={activeSection === "matrix-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Course-Program Mapping" : "Ders-Program İlişkisi"}</Link>
                </div>
                <div className={`workload-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "workload-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#workload-title" onClick={() => onSectionChange("workload-title")} aria-current={activeSection === "workload-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "ECTS Workload" : "AKTS İş Yükü"}</Link>
                </div>
                <div className={`assessment-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "assessment-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#assessment-title" onClick={() => onSectionChange("assessment-title")} aria-current={activeSection === "assessment-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Assessment" : "Değerlendirme"}</Link>
                </div>
                <div className={`weekly-topics-title flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md transition-colors hover:bg-slate-300 ${activeSection === "weekly-topics-title" ? "bg-slate-300" : ""}`}>
                    <Link href="#weekly-topics-title" onClick={() => onSectionChange("weekly-topics-title")} aria-current={activeSection === "weekly-topics-title" ? "location" : undefined} tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Weekly Topics" : "Haftalık Konular"}</Link>
                </div>
            </section>
        </div>
    );
}
