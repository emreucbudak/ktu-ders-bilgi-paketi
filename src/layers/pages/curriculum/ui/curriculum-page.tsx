import {cookies} from "next/headers";
import CurriculumHeader from "@/layers/shared/ui/curriculum-header";
import Link from "next/link";
import { getCourseWorkload } from "@/layers/entities/course/model/course-assessment";
import CourseName from "@/layers/entities/course/ui/course-name";
import { notFound } from "next/navigation";
import programs from "@/layers/entities/program/model/programs";
import { academicYears, getSampleCourses } from "@/layers/entities/course/model/curriculum";

export default async function CurriculumPage({ params, searchParams }: {
 params: Promise<{id:string}>; searchParams: Promise<{academicYear?:string;year?:string;term?:string}>;
}) {
 const {id}=await params;const query=await searchParams;
 const program=programs.find(p=>p.id.toLowerCase()===id);if(!program)notFound();
 const year=Number(query.year||1), term=query.term||"fall", academicYear=query.academicYear||academicYears[0];
 if(!Number.isInteger(year)||year<1||year>program.years||!["fall","spring"].includes(term)||!academicYears.includes(academicYear))notFound();
 const en=(await cookies()).get("ktu_language")?.value==="en"; const t=(tr:string,eng:string)=>en?eng:tr;
 const courses=getSampleCourses(program.id,year,term);
 const totalWorkload=courses.filter(c=>c.status!=="closed").reduce((sum,c)=>sum+getCourseWorkload(c.theoryHours,c.practiceHours,c.ects).reduce((hours,row)=>hours+row.count*row.hours,0),0);
 return <div className="site"><CurriculumHeader/><main className="main curriculum-page">
   <div className="detail-back"><Link className="back-link" href={`/programlar/${id}#curriculum-title`}>← {t("Programa dön","Back to program")}</Link></div>
   <section className="intro"><div><div className="eyebrow">{academicYear} · {t(`${year}. sınıf`,`Year ${year}`)} · {term==="fall"?t("Güz","Fall"):t("Bahar","Spring")}</div><h1>{t("Ders planı","Curriculum")}</h1><p>{en?program.en:program.tr}</p></div></section>
   <section className="detail-sheet">
     <div className="detail-sheet-heading"><h2>{t("Dersler","Courses")}</h2><span>{t("Örnek müfredat","Sample curriculum")}</span></div>
     <p className="curriculum-note">{t("Bu prototipte eğitim-öğretim yılları için aynı örnek ders verileri kullanılır.","This prototype uses the same sample courses for each academic year.")}</p>
     <table className="curriculum-table"><caption className="sr-only">{academicYear} {year} {term}</caption><thead><tr>{[t("Ders kodu","Code"),t("Ders adı","Course"),t("Tür","Type"),t("Kredi","Credit"),t("AKTS","ECTS")].map(s=><th key={s} scope="col">{s}</th>)}</tr></thead>
       <tbody>{courses.map(c=><tr key={c.code}><td data-label={t("Kod","Code")}><Link className="course-link" href={`/dersler/${c.code}?academicYear=${academicYear}`}>{c.code}</Link></td><td data-label={t("Ders","Course")}>{<CourseName course={c} en={en}/>}</td><td data-label={t("Tür","Type")}>{c.elective?t("Seçmeli","Elective"):t("Zorunlu","Required")}</td><td data-label={t("Kredi","Credit")}>{c.credit}</td><td data-label={t("AKTS","ECTS")}>{c.ects}</td></tr>)}</tbody>
     </table>
     <div className="curriculum-total"><strong>{t("Dönem toplamı","Semester total")}</strong><span>{courses.filter(c=>c.status!=="closed").reduce((sum,c)=>sum+c.credit,0)} {t("kredi","credits")} · {courses.filter(c=>c.status!=="closed").reduce((sum,c)=>sum+c.ects,0)} {t("AKTS","ECTS")} · {totalWorkload} {t("saat iş yükü","hours of workload")}</span></div>
   </section>
 </main></div>;
}

