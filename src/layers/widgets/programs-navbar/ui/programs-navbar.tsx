import Link from "next/link";

export default function ProgramsNavbar() {
    return (
        <div role="navigation" aria-label="Program detayında gezinme" className="w-full min-h-[550px] self-start rounded-md bg-slate-200 xl:sticky xl:top-4 xl:col-span-1">
            <section className="flex h-22 items-center justify-center border-b-2 border-slate-300">
                <img src="/brand/ktu.svg" alt="Karadeniz Teknik Üniversitesi" className="h-48 w-48 max-w-full object-contain" />
            </section>
            <section className="mt-2 grid grid-cols-1 justify-items-center gap-y-2 px-3 pb-4 sm:px-4">
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#overview" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Program Hakkında</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#program-aim-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Programın Amacı</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#outcomes-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Program Öğrenme Kazanımları</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#career-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Kariyer Olanakları</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#curriculum-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Ders Planı</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#admission-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Kabul Koşulları</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#graduation-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">Mezuniyet Koşulları</Link>
                </div>
                <div className="flex min-h-12 w-full max-w-64 min-w-0 items-center justify-start rounded-md hover:bg-slate-300">
                    <Link href="#contact-title" tabIndex={0} className="flex min-h-12 w-full items-center rounded-md px-4 py-2 text-sm leading-snug xl:text-base">İletişim Bilgileri</Link>
                </div>
            </section>
        </div>
    );
}
