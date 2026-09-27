"use client";
import { useState } from "react";
import { getWeeklyContent } from "@/layers/entities/course/model/course-weekly";
export default function WeeklyContent({title,en}:{title:string;en:boolean}){
 const [index,setIndex]=useState(0);
 const weeks=getWeeklyContent(title,en);
 const t=(tr:string,english:string)=>en?english:tr;
 return <section className="course-table-section weekly-content" aria-labelledby="weekly-topics-title">
   
   <h2 id="weekly-topics-title">{t("Haftalık konular","Weekly topics")}</h2>
   <table className="weekly-table">
     <caption className="sr-only">{t("Haftalık ders içeriği","Weekly course content")}</caption>
     <thead><tr><th scope="col" className="week-number-heading">{t("Hafta","Week")}</th><th scope="col">{t("Haftalık konu","Weekly topic")}</th><th scope="col">{t("Ders içeriği","Course content")}</th><th scope="col">{t("Öğrenme etkinliği","Learning activity")}</th></tr></thead>
     <tbody>{weeks.map((week,weekIndex)=><tr key={weekIndex} className={weekIndex===index?"week-row":"week-row week-row-hidden"}><td className="week-number-cell" data-label={t("Hafta","Week")}><div className="weekly-cell-content">{weekIndex+1}</div></td><td data-label={t("Haftalık konu","Weekly topic")}><div className="weekly-cell-content" tabIndex={0}>{week.topic}</div></td><td data-label={t("Ders içeriği","Course content")}><div className="weekly-cell-content" tabIndex={0}>{week.content}</div></td><td data-label={t("Öğrenme etkinliği","Learning activity")}><div className="weekly-cell-content" tabIndex={0}>{week.activity}</div></td></tr>)}</tbody>
   </table>
   <div className="week-navigation" role="group" aria-label={t("Hafta seçimi","Week navigation")}>
     <button type="button" disabled={index===0} onClick={()=>setIndex(i=>i-1)} aria-label={t("Önceki hafta","Previous week")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
     <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">{t((index+1)+". hafta","Week "+(index+1))}</div>
     <button type="button" disabled={index===weeks.length-1} onClick={()=>setIndex(i=>i+1)} aria-label={t("Sonraki hafta","Next week")}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
   </div>

 </section>;
}




