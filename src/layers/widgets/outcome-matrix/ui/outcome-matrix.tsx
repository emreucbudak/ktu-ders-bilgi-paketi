import DetailSection from "@/layers/shared/ui/detail-section";
import programOutcomes from "@/layers/entities/program/model/program-outcomes";
import {getCourseOutcomes} from "@/layers/entities/course/model/course-outcomes";
import {getOutcomeContributions} from "@/layers/entities/course/model/outcome-matrix";
export default function OutcomeMatrix({programId,title,en}:{programId:string;title:string;en:boolean}){
 const t=(tr:string,english:string)=>en?english:tr;
 const outcomes=getCourseOutcomes(title),program=programOutcomes[programId];
 const values=getOutcomeContributions(outcomes.length,program.length);
 const po=t("PK","PO"),co=t("DK","CO");
 return <DetailSection sectionId="matrix-title" className="course-table-section outcome-matrix" aria-labelledby="matrix-title">
  <h2 id="matrix-title">{t("Ders ve program kazanımları ilişkisi","Course and program outcomes mapping")}</h2>
  <p className="outcomes-intro" id="matrix-scale">{t("Katkı düzeyi: 0 — Yok · 1 — Düşük · 2 — Orta · 3 — Yüksek","Contribution: 0 — None · 1 — Low · 2 — Moderate · 3 — High")}</p>
  <table className="outcome-table" aria-describedby="matrix-scale">
   <caption className="sr-only">{t("Ders kazanımlarının program kazanımlarına katkısı","Course outcomes contributions to program outcomes")}</caption>
   <thead><tr><th scope="col">{t("Ders kazanımı","Course outcome")}</th>{program.map((_,i)=><th scope="col" key={i}>{po}{i+1}</th>)}</tr></thead>
   <tbody>{outcomes.map(([tr,english],i)=><tr key={i}><th scope="row"><strong>{co}{i+1}</strong> — {t(tr,english)}</th>{program.map((_,j)=><td key={j} data-label={`${po}${j+1}`}>{values[i][j]}</td>)}</tr>)}</tbody>
  </table>
  <h3>{t("Program kazanımları","Program outcomes")}</h3>
  <dl className="matrix-legend">{program.map(([tr,english],i)=><div key={i}><dt>{po}{i+1}</dt><dd>{t(tr,english)}</dd></div>)}</dl>
 </DetailSection>;
}
