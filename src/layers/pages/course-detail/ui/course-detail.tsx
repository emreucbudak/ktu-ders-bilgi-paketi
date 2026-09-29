"use client";
import Link from "next/link";
import { useEffect } from "react";
import {useLanguage} from "@/layers/shared/providers/language-provider";
import SiteHeader from "@/layers/shared/ui/site-header";
import OutcomeMatrix from "@/layers/widgets/outcome-matrix/ui/outcome-matrix";
import WeeklyContent from "@/layers/widgets/weekly-content/ui/weekly-content";
import CourseNavbar from "@/layers/widgets/course-navbar/ui/course-navbar";
import programs from "@/layers/entities/program/model/programs";
import { getSampleCourses, getCourseTitle } from "@/layers/entities/course/model/curriculum";
import { getCourseAim } from "@/layers/entities/course/model/course-aims";
import { getCourseWorkload, courseAssessment } from "@/layers/entities/course/model/course-assessment";
import { getCourseResources } from "@/layers/entities/course/model/course-resources";
import { getCourseOutcomes } from "@/layers/entities/course/model/course-outcomes";
import { getCoursePrerequisites } from "@/layers/entities/course/model/course-prerequisites";

export default function CourseDetail({course,program,year,term,academicYear}:{
 course:ReturnType<typeof getSampleCourses>[number];program:typeof programs[number];year:number;term:string;academicYear:string;
}){
 const [en,setEn]=useLanguage();
 const aim=getCourseAim(course.contentTitle);
 const workload=getCourseWorkload(course.theoryHours,course.practiceHours,course.ects);
 const totalHours=workload.reduce((sum,row)=>sum+row.count*row.hours,0);
 const resources=getCourseResources(course.contentTitle,program.id);
 const prerequisites=getCoursePrerequisites(program.id,course.tr,year,term);
 const pageTitle=`${getCourseTitle(course,en)} – ${course.code}`;
 useEffect(()=>{
   document.documentElement.lang=en?"en":"tr";
   document.title=pageTitle;
 },[en,pageTitle]);
 const t=(tr:string,english:string)=>en?english:tr;
 return <div className="site">
   <SiteHeader en={en} setEn={setEn}/>
   <main className="main curriculum-page">
     <nav className="breadcrumbs" aria-label={t("Sayfa yolu","Breadcrumb")}><Link href="/"> {t("Programlar","Programs")}</Link><span>/</span><Link href={`/programlar/${program.id.toLowerCase()}`}>{t(program.tr,program.en)}</Link><span>/</span><span aria-current="page">{course.code}</span></nav>
     <section className="intro detail-intro"><div><div className="eyebrow">{t("DERS BİLGİLERİ","COURSE INFORMATION")}</div><h1 lang={en&&!course.en?"tr":undefined}>{getCourseTitle(course,en)}</h1><p>{academicYear} · {t(`${year}. sınıf`,`Year ${year}`)} · {term==="fall"?t("Güz","Fall"):t("Bahar","Spring")}</p></div><span className="detail-code">{course.code}</span></section>
     {en&&!course.en&&<p className="course-alert" role="note">English translation unavailable. The original Turkish course title is shown.</p>}
     {course.status==="closed"&&<p className="course-alert" role="note">{t("Bu ders seçilen dönemde açılmıyor. İçerik bilgileri inceleme amacıyla gösterilmektedir; ders dönem toplamına dahil değildir.","This course is not offered this semester. Its content remains available for reference and it is excluded from semester totals.")}</p>}
     {course.ects===0&&<p className="course-alert" role="note">{t("Bu ders kredisizdir (0 AKTS). Çalışma saatleri bilgi amaçlı gösterilir ve AKTS'ye dönüştürülmez.","This is a non-credit course (0 ECTS). Workload hours are informational and are not converted to ECTS.")}</p>}
     <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-4 xl:gap-6">
       <CourseNavbar en={en}/>
       <section id="course-information" className="detail-sheet min-w-0 xl:col-span-3" aria-label={t("Ders bilgileri", "Course information")}>
       
       <dl className="detail-grid course-info-grid">
         {[[t("Öğretim üyesi","Instructor"),t("Dr. Deniz Örnek","Dr. Deniz Örnek")],[t("Ders dili","Course language"),program.language === 2 ? t("İngilizce","English") : t("Türkçe","Turkish")],[t("Ders kodu","Course code"),course.code],[t("Kredi","Credit"),String(course.credit)],[t("AKTS","ECTS"),String(course.ects)],[t("Ders türü","Course type"),course.elective?t("Seçmeli","Elective"):t("Zorunlu","Required")],[t("Teori (saat/hafta)","Theory (hours/week)"),String(course.theoryHours)],[t("Uygulama (saat/hafta)","Practice (hours/week)"),String(course.practiceHours)],[t("Toplam (saat/hafta)","Total (hours/week)"),String(course.theoryHours+course.practiceHours)],[t("Program","Program"),t(program.tr,program.en)],[t("Eğitim-öğretim yılı","Academic year"),academicYear],[t("Dönem / Yarıyıl","Term / Semester"),(term==="fall"?t("Güz","Fall"):t("Bahar","Spring")) + " / " + ((year-1)*2+(term==="fall"?1:2)) + t(". yarıyıl"," semester")]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
       </dl>
       <section className="program-aim" aria-labelledby="course-aim-title"><h2 id="course-aim-title">{t("Dersin amacı","Course aim")}</h2><p>{t(aim.tr,aim.en)}</p></section>
       <section className="course-prerequisites" aria-labelledby="prerequisites-title">
         <h2 id="prerequisites-title">{t("Ön koşullar", "Prerequisites")}</h2>
         {prerequisites.length ? <>
           <p>{t("Bu dersten önce aşağıdaki derslerin başarıyla tamamlanması gerekir.", "The following courses must be successfully completed before taking this course.")}</p>
           <ul>{prerequisites.map(required => <li key={required.code}><Link className="course-link" href={`/dersler/${required.code}?academicYear=${academicYear}`}>{required.code} — {t(required.tr,required.en)}</Link></li>)}</ul>
         </> : <p>{t("Yok. Bu ders için ön koşul dersi bulunmamaktadır.", "None. This course has no prerequisite courses.")}</p>}
       </section>
       <section className="course-resources" aria-labelledby="textbook-title">
         <h2 id="textbook-title">{t("Ders kitabı","Textbook")}</h2>
         <div className="resource-entry">
           <span className="resource-title">{resources.textbook.title}</span>
           <p>{resources.textbook.author}</p>
         </div>
         <h3>{t("Ek kaynaklar","Additional resources")}</h3>
         <ul>{resources.additional.map(resource => <li key={resource.url}>
           <span className="resource-title">{resource.title}</span>
           <p>{resource.author}</p>
         </li>)}</ul>
       </section>
       <section className="program-outcomes" aria-labelledby="course-outcomes-title">
         <h2 id="course-outcomes-title">{t("Öğrenme kazanımları","Learning outcomes")}</h2>
         <p className="outcomes-intro">{t("Bu dersi başarıyla tamamlayan öğrenciler:","Students who successfully complete this course can:")}</p>
         <ol>{getCourseOutcomes(course.contentTitle).map(([tr,english]) => <li key={tr}>{t(tr,english)}</li>)}</ol>
       </section>

       <OutcomeMatrix programId={program.id} title={course.contentTitle} en={en}/>
       <section className="course-table-section" aria-labelledby="workload-title">
         <h2 id="workload-title">{t("AKTS iş yükü","ECTS workload")}</h2>
         <table className="curriculum-table course-data-table">
           <caption className="sr-only">{t("Dersin etkinlik bazında iş yükü","Course workload by activity")}</caption>
           <thead><tr><th scope="col">{t("Etkinlik","Activity")}</th><th scope="col">{t("Adet / Hafta","Count / Weeks")}</th><th scope="col">{t("Birim süre (saat)","Hours per activity")}</th><th scope="col">{t("Toplam (saat)","Total hours")}</th></tr></thead>
           <tbody>{workload.map(row=><tr key={row.en}>
             <th scope="row">{t(row.tr,row.en)}</th>
             <td data-label={t("Adet / Hafta","Count / Weeks")}>{row.count}</td>
             <td data-label={t("Birim süre (saat)","Hours per activity")}>{row.hours}</td>
             <td data-label={t("Toplam (saat)","Total hours")}>{row.count*row.hours}</td>
           </tr>)}</tbody>
           <tfoot><tr><th scope="row" colSpan={3}>{t("Toplam iş yükü","Total workload")}</th><td>{totalHours}</td></tr></tfoot>
         </table>
         {course.ects>0&&<p className="ects-calculation">{t("AKTS hesabı","ECTS calculation")}: {totalHours} {t("saat","hours")} ÷ 30 = <strong>{course.ects} AKTS / ECTS</strong></p>}
       </section>
       <section className="course-table-section" aria-labelledby="assessment-title">
         <h2 id="assessment-title">{t("Değerlendirme tablosu","Assessment")}</h2>
         <table className="curriculum-table course-data-table">
           <caption className="sr-only">{t("Değerlendirme etkinlikleri ve başarı notuna katkıları","Assessment activities and contributions to the final grade")}</caption>
           <thead><tr><th scope="col">{t("Değerlendirme yöntemi","Assessment method")}</th><th scope="col">{t("Adet","Count")}</th><th scope="col">{t("Toplam katkı (%)","Total contribution (%)")}</th></tr></thead>
           <tbody>{courseAssessment.map(row=><tr key={row.en}><th scope="row">{t(row.tr,row.en)}</th><td data-label={t("Adet","Count")}>{row.count}</td><td data-label={t("Toplam katkı (%)","Total contribution (%)")}>%{row.weight}</td></tr>)}</tbody>
           <tfoot><tr><th scope="row" colSpan={2}>{t("Toplam","Total")}</th><td>%{courseAssessment.reduce((sum,row)=>sum+row.weight,0)}</td></tr></tfoot>
         </table>
       </section>
       <WeeklyContent key={course.code} title={course.contentTitle} en={en} />
       </section>
     </div>
   </main>
 </div>;
}
