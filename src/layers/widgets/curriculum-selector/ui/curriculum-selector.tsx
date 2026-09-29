"use client";

import Link from "next/link";
import { getCourseWorkload } from "@/layers/entities/course/model/course-assessment";
import CourseName from "@/layers/entities/course/ui/course-name";
import { useState } from "react";
import { academicYears, getSampleCourses } from "@/layers/entities/course/model/curriculum";
export default function CurriculumSelector({ id, years, en }: { id: string; years: number; en: boolean }) {
 const [academicYear,setAcademicYear]=useState(academicYears[0]);
 const [studyYear,setStudyYear]=useState("1");
 const [term,setTerm]=useState("fall");
 const t=(tr:string,english:string)=>en?english:tr;
 const courses=getSampleCourses(id,Number(studyYear),term);
 const totalWorkload=courses.filter(c=>c.status!=="closed").reduce((sum,c)=>sum+getCourseWorkload(c.theoryHours,c.practiceHours,c.ects).reduce((hours,row)=>hours+row.count*row.hours,0),0);
 return <section className="curriculum-selector" aria-labelledby="curriculum-title">
   <h2 id="curriculum-title">{t("Ders planı","Curriculum")}</h2>
   <div className="curriculum-fields">
     <label htmlFor="academic-year">{t("Eğitim-öğretim yılı","Academic year")}<select id="academic-year" value={academicYear} onChange={e=>setAcademicYear(e.target.value)}>{academicYears.map(y=><option key={y}>{y}</option>)}</select></label>
     <label htmlFor="study-year">{t("Sınıf","Year of study")}<select id="study-year" value={studyYear} onChange={e=>setStudyYear(e.target.value)}>{Array.from({length:years},(_,i)=><option key={i} value={i+1}>{t(`${i+1}. sınıf`,`Year ${i+1}`)}</option>)}</select></label>
     <label htmlFor="study-term">{t("Dönem","Semester")}<select id="study-term" value={term} onChange={e=>setTerm(e.target.value)}><option value="fall">{t("Güz","Fall")}</option><option value="spring">{t("Bahar","Spring")}</option></select></label>
   </div>
   <div className="inline-curriculum">
     
     <table className="curriculum-table">
       <caption className="sr-only">{t("Seçilen dönemin örnek ders planı", "Sample curriculum for the selected semester")}</caption>
       <thead><tr>{[t("Ders kodu","Code"),t("Ders adı","Course"),t("Tür","Type"),t("Kredi","Credit"),t("AKTS","ECTS")].map(label=><th scope="col" key={label}>{label}</th>)}</tr></thead>
       <tbody>{courses.map(course=><tr key={course.code}>
         <td data-label={t("Kod","Code")}><Link className="course-link" target="_self" href={`/dersler/${course.code}?academicYear=${academicYear}`}>{course.code}</Link></td>
         <td data-label={t("Ders","Course")}>{<CourseName course={course} en={en}/>}</td>
         <td data-label={t("Tür","Type")}>{course.elective?t("Seçmeli","Elective"):t("Zorunlu","Required")}</td>
         <td data-label={t("Kredi","Credit")}>{course.credit}</td>
         <td data-label={t("AKTS","ECTS")}>{course.ects}</td>
       </tr>)}</tbody>
     </table>
     <div className="curriculum-total"><strong>{t("Dönem toplamı","Semester total")}</strong><span>{courses.filter(c=>c.status!=="closed").reduce((sum,c)=>sum+c.credit,0)} {t("kredi","credits")} · {courses.filter(c=>c.status!=="closed").reduce((sum,c)=>sum+c.ects,0)} {t("AKTS","ECTS")} · {totalWorkload} {t("saat iş yükü","hours of workload")}</span></div>
   </div>
 </section>;
}



