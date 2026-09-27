"use client";
import {useLanguage} from "@/layers/shared/providers/language-provider";
import SiteHeader from "@/layers/shared/ui/site-header";
import Link from "next/link";
import { useEffect } from "react";
import programs from "@/layers/entities/program/model/programs";
import programContacts from "@/layers/entities/program/model/program-contact";
import programHistory from "@/layers/entities/program/model/program-history";
import programDescriptions from "@/layers/entities/program/model/program-descriptions";
import programAims from "@/layers/entities/program/model/program-aims";
import programOutcomes from "@/layers/entities/program/model/program-outcomes";
import programCareers from "@/layers/entities/program/model/program-careers";
import CurriculumSelector from "@/layers/widgets/curriculum-selector/ui/curriculum-selector";

export default function ProgramDetail({ program: p }: { program: typeof programs[number] }) {
  const [en, setEn] = useLanguage();
  useEffect(() => { document.documentElement.lang = en ? "en" : "tr"; document.title=`${en?p.en:p.tr} | KTÜ Ders Kataloğu`; }, [en,p.en,p.tr]);
  const t = (tr: string, english: string) => en ? english : tr;
  const faculty = (en ? ["Faculty of Engineering", "Faculty of Architecture", "Faculty of Science", "Graduate School of Natural Sciences", "Faculty of Health Sciences", "Faculty of Economics and Administrative Sciences", "Faculty of Forestry", "Vocational School", "Faculty of Marine Sciences"] : ["Mühendislik Fakültesi", "Mimarlık Fakültesi", "Fen Fakültesi", "Fen Bilimleri Enstitüsü", "Sağlık Bilimleri Fakültesi", "İktisadi ve İdari Bilimler Fakültesi", "Orman Fakültesi", "Meslek Yüksekokulu", "Deniz Bilimleri Fakültesi"])[p.faculty];
  const degree = (en ? ["Bachelor’s", "Master’s", "Associate degree", "Doctorate"] : ["Lisans", "Yüksek Lisans", "Ön Lisans", "Doktora"])[p.degree];
  const isUndergraduate = p.degree === 0 || p.degree === 2;
  const isDoctoral = p.degree === 3;
  const qualification = p.degree === 0 ? t("Lisans diploması", "Bachelor’s degree") : p.degree === 1 ? t("Tezli yüksek lisans diploması", "Master’s degree with thesis") : p.degree === 2 ? t("Ön lisans diploması", "Associate degree") : t("Doktora diploması", "Doctoral degree");
  const qualificationLevel = [6, 7, 5, 8][p.degree];
  const language = (en ? ["Turkish", "30% English", "100% English"] : ["Türkçe", "%30 İngilizce", "%100 İngilizce"])[p.language];
  return <div className="site">
    <SiteHeader en={en} setEn={setEn} />
    <main className="main detail-main">
      <div className="detail-back"><Link className="back-link" href="/"><span className="back-arrow" aria-hidden="true">←</span>{t("Geri dön", "Go back")}</Link></div>
      <nav className="breadcrumbs" aria-label={t("Sayfa yolu", "Breadcrumb")}><Link href="/">{t("Programlar", "Programs")}</Link><span aria-hidden="true">/</span><span aria-current="page">{en ? p.en : p.tr}</span></nav>
      <section className="intro detail-intro"><div><div className="eyebrow">{faculty}</div><h1>{en ? p.en : p.tr}</h1><p>{degree} · {language}</p></div><span className="detail-code">{p.id}</span></section>
      <section className="detail-sheet" aria-labelledby="overview">
        <div className="detail-sheet-heading"><h2 id="overview">{t("Program hakkında", "About the program")}</h2><span>{t("Örnek katalog", "Sample catalog")}</span></div>
        <p className="detail-lead">{t(programHistory[p.id].tr, programHistory[p.id].en)}{" "}{t(programDescriptions[p.id].tr, programDescriptions[p.id].en)}{" "}{t(`${p.tr} programı ${p.years} yıl ve ${p.years * 2} yarıyıldan oluşur. Programın toplam kredi yükü ${p.ects} AKTS’dir.`, `The ${p.en} program consists of ${p.years * 2} semesters over ${p.years} years, with a total of ${p.ects} ECTS credits.`)}</p>
        <dl className="detail-grid">
          {[[t("Akademik birim", "Academic unit"),faculty],[t("Öğrenim düzeyi", "Degree level"),degree],[t("Öğretim dili", "Language of instruction"),language],[t("Program süresi", "Duration"),t(`${p.years} yıl / ${p.years * 2} yarıyıl`, `${p.years} years / ${p.years * 2} semesters`)],[t("Toplam AKTS", "Total ECTS"),String(p.ects)],[t("Program kodu", "Program code"),p.id],[t("Eğitim şekli", "Mode of delivery"),t("Yüz yüze", "On campus")],[t("Öğrenim türü", "Study mode"),t("Tam zamanlı", "Full-time")],[t("Verilen derece", "Awarded qualification"),qualification],[t("Toplam yarıyıl", "Total semesters"),String(p.years * 2)],[t("Yıllık AKTS yükü", "Annual ECTS load"),String(p.ects / p.years)],[t("Yeterlilik düzeyi", "Qualification level"),t(`TYYÇ ${qualificationLevel}. düzey`, `TQF-HE Level ${qualificationLevel}`)]].map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <section className="program-aim" aria-labelledby="program-aim-title"><h2 id="program-aim-title">{t("Programın amacı", "Program aim")}</h2><p>{t(programAims[p.id].tr, programAims[p.id].en)}</p></section>
        <section className="program-outcomes" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">{t("Program öğrenme kazanımları", "Program learning outcomes")}</h2>
          <p className="outcomes-intro">{t("Bu programı tamamlayan mezunlar:", "Graduates of this program can:")}</p>
          <ol>{programOutcomes[p.id].map(([tr,english]) => <li key={tr}>{t(tr,english)}</li>)}</ol>
        </section>
        <section className="program-conditions" aria-label={t("Kabul ve mezuniyet koşulları", "Admission and graduation requirements")}>
          <section aria-labelledby="admission-title">
            <h2 id="admission-title">{t("Kabul koşulları", "Admission requirements")}</h2>
            <p>{isUndergraduate
              ? t("Programa başvuru ve kayıt sürecinde adayın önceki öğrenimini tamamlamış olması ve başvurduğu kabul yolunun koşullarını sağlaması beklenir. Merkezi yerleştirme, yatay geçiş ve uluslararası öğrenci başvuruları kendi başvuru süreçleri kapsamında değerlendirilir. Başvuru takvimi, istenen belgeler ve güncel koşullar ilgili eğitim-öğretim yılına ait üniversite duyurularından takip edilir.", "Applicants are expected to have completed their prior education and meet the conditions of their chosen admission route. Central placement, transfer and international applications are considered through their respective processes. Application dates, required documents and current conditions should be checked in the university announcements for the relevant academic year.")
              : isDoctoral ? t("Doktora başvuruları için yüksek lisans derecesi ve ilgili lisansüstü başvuru ilanında belirtilen koşullar aranır. Güncel sınav, dil, belge ve başvuru şartları ilgili dönem duyurularından takip edilmelidir.", "Doctoral applicants are expected to hold a master's degree and meet the conditions in the relevant graduate admission announcement. Current examination, language, document and application requirements should be checked in the applicable notice.")
              : t("Programa başvuruda adayın lisans eğitimini tamamlamış olması ve ilgili lisansüstü başvuru ilanındaki koşulları sağlaması beklenir. Başvurular; önceki öğrenim alanı, akademik başarı ve ilanda belirtilen değerlendirme ölçütleri kapsamında incelenir. Kontenjanlar, gerekli belgeler, sınav veya dil koşulları ve başvuru tarihleri ilgili dönemin enstitü duyurularından takip edilir.", "Applicants are expected to hold an undergraduate degree and meet the conditions stated in the relevant graduate admission announcement. Applications are assessed according to prior study, academic achievement and the published selection criteria. Available places, required documents, examination or language requirements and dates should be checked in the graduate school announcements.")}</p>
          </section>
          <section aria-labelledby="graduation-title">
            <h2 id="graduation-title">{t("Mezuniyet koşulları", "Graduation requirements")}</h2>
            <p>{isUndergraduate
              ? t(`Mezuniyet için programın ders planında yer alan zorunlu ve seçmeli derslerin başarıyla tamamlanması ve toplam ${p.ects} AKTS yükünün karşılanması beklenir. Programda tanımlanmışsa staj, uygulama ve bitirme çalışması gibi yükümlülüklerin de tamamlanması gerekir. Akademik başarı ve diğer mezuniyet koşulları, öğrencinin tabi olduğu müfredat ve yürürlükteki üniversite düzenlemeleri doğrultusunda değerlendirilir.`, `Graduation involves successful completion of the required and elective courses in the curriculum and a total of ${p.ects} ECTS. Any internship, practical work or final project specified by the program must also be completed. Academic achievement and other graduation conditions are assessed under the student's applicable curriculum and current university regulations.`)
              : isDoctoral ? t(`Doktora derecesi için ders ve araştırma yükümlülüklerinin, yeterlilik ve tez süreçlerinin ilgili lisansüstü düzenlemelere göre tamamlanması beklenir. Toplam örnek yük ${p.ects} AKTS'dir.`, `The doctoral pathway requires completing coursework, research, qualification and thesis requirements under the applicable graduate regulations. The illustrative total load is ${p.ects} ECTS.`) : t(`Mezuniyet için programın ders ve araştırma yükümlülüklerinin tamamlanması ve toplam ${p.ects} AKTS yükünün karşılanması beklenir. Tezli program kapsamında araştırmanın hazırlanması, tez çalışmasının tamamlanması ve ilgili değerlendirme süreçlerinde başarılı olunması gerekir. Ayrıntılı başarı, süre ve teslim koşulları öğrencinin tabi olduğu enstitü düzenlemeleri ve müfredat kapsamında değerlendirilir.`, `Graduation involves completing the program's coursework and research obligations and a total of ${p.ects} ECTS. The thesis pathway includes conducting research, completing a thesis and successfully meeting the relevant assessment requirements. Detailed achievement, duration and submission conditions are governed by the applicable graduate school regulations and curriculum.`)}</p>
          </section>
        </section>
        <section className="career-section" aria-labelledby="career-title">
          <h2 id="career-title">{t("Kariyer olanakları", "Career opportunities")}</h2>
          <div className="career-grid">
            {programCareers[p.id].map((career, index) => <article className="career-card" key={career.en}>
              <div className="career-icon" aria-hidden="true">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {index === 0 ? <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12l9 4 9-4M12 14v4"/></> :
                   index === 1 ? <><path d="M4 20V4M4 20h16M8 16v-4M13 16V8M18 16V5"/></> :
                   index === 2 ? <><path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/></> :
                   <><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="m10.5 8-4 8m7-8 4 8M8 19h8"/></>}
                </svg>
              </div>
              <h3>{t(career.tr, career.en)}</h3>
              <p>{t(career.descriptionTr, career.descriptionEn)}</p>
            </article>)}
          </div>
        </section>
        <CurriculumSelector id={p.id} years={p.years} en={en} />
        <section className="program-contact" aria-labelledby="contact-title">
          <h2 id="contact-title">{t("İletişim bilgileri", "Contact information")}</h2>
          <dl>
            <div><dt>{t("İlgili birim", "Contact unit")}</dt><dd>{t(programContacts[p.id].unitTr,programContacts[p.id].unitEn)}</dd></div>
            <div><dt>{t("E-posta", "Email")}</dt><dd>{programContacts[p.id].email}</dd></div>
            <div><dt>{t("Adres", "Address")}</dt><dd>{t(programContacts[p.id].addressTr,programContacts[p.id].addressEn)}</dd></div>
            <div><dt>{t("İletişim saatleri", "Office hours")}</dt><dd>{t(programContacts[p.id].hoursTr,programContacts[p.id].hoursEn)}</dd></div>
          </dl>
        </section>
      </section>
    </main>
  </div>;
}















