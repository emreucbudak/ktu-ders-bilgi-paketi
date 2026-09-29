import Link from "next/link";

export default function CourseNavbar({ en }: { en: boolean }) {
    return (
        <div role="navigation" aria-label={en ? "Navigate course details" : "Ders detayında gezinme"} className="w-full min-h-[550px] self-start rounded-md bg-slate-200 xl:sticky xl:top-4 xl:col-span-1">
            <section className="flex h-22 items-center justify-center border-b-2 border-slate-300">
                <img src="/brand/ktu.svg" alt="Karadeniz Teknik Üniversitesi" className="h-48 w-48 max-w-full object-contain" />
            </section>
            <section className="mt-2 grid grid-cols-1 justify-items-center gap-y-2 px-3 pb-4 sm:px-4">
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#course-information" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Course Information" : "Ders Bilgileri"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#course-aim-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Course Aim" : "Dersin Amacı"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#prerequisites-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Prerequisites" : "Ön Koşullar"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#textbook-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Textbook and Resources" : "Ders Kitabı ve Kaynaklar"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#course-outcomes-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Learning Outcomes" : "Öğrenme Kazanımları"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#matrix-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Course-Program Mapping" : "Ders-Program İlişkisi"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#workload-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "ECTS Workload" : "AKTS İş Yükü"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#assessment-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Assessment" : "Değerlendirme"}</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#weekly-topics-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">{en ? "Weekly Topics" : "Haftalık Konular"}</Link>
                </div>
            </section>
        </div>
    );
}
