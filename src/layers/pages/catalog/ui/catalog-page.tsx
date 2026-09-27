"use client";

import {useLanguage} from "@/layers/shared/providers/language-provider";
import SiteHeader from "@/layers/shared/ui/site-header";
import Link from "next/link";
import { useEffect, useState } from "react";

import programs from "@/layers/entities/program/model/programs";
import styles from "./program-pagination.module.css";
const normalize = (s: string) => s.toLocaleLowerCase("tr").replace(/ı/g, "i").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/muhendisligi/g, "muhendislik");
function Icon({ type }: { type: "search" | "arrow" | "book" | "filter" }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {type === "search" ? <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></> : type === "arrow" ? <path d="M5 12h14m-6-6 6 6-6 6" /> : type === "filter" ? <><path d="M4 7h16M4 17h16" /><circle cx="8" cy="7" r="2" fill="white"/><circle cx="16" cy="17" r="2" fill="white"/></> : <><path d="M12 5v15M3 4c4-1 6 0 9 2 3-2 5-3 9-2v14c-4-1-6 0-9 2-3-2-5-3-9-2Z"/></>}
  </svg>;
}
export default function Home() {
  const [en, setEn] = useLanguage();
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState("");
  const [degree, setDegree] = useState("");
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const t = (tr: string, english: string) => en ? english : tr;
  const faculties = en ? ["Faculty of Engineering", "Faculty of Architecture", "Faculty of Science", "Graduate School of Natural Sciences", "Faculty of Health Sciences", "Faculty of Economics and Administrative Sciences", "Faculty of Forestry", "Vocational School", "Faculty of Marine Sciences"] : ["Mühendislik Fakültesi", "Mimarlık Fakültesi", "Fen Fakültesi", "Fen Bilimleri Enstitüsü", "Sağlık Bilimleri Fakültesi", "İktisadi ve İdari Bilimler Fakültesi", "Orman Fakültesi", "Meslek Yüksekokulu", "Deniz Bilimleri Fakültesi"];
  const degrees = en ? ["Bachelor’s", "Master’s", "Associate degree", "Doctorate"] : ["Lisans", "Yüksek Lisans", "Ön Lisans", "Doktora"];
  const languages = en ? ["Turkish", "30% English", "100% English"] : ["Türkçe", "%30 İngilizce", "%100 İngilizce"];
  useEffect(() => { document.documentElement.lang = en ? "en" : "tr"; }, [en]);
  const reset = () => { setQuery(""); setFaculty(""); setDegree(""); setLanguage(""); setPage(1); };
  const results = programs.filter(p =>
    normalize(p.tr + " " + p.en + " " + p.id).includes(normalize(query.trim())) &&
    (faculty === "" || p.faculty === Number(faculty)) &&
    (degree === "" || p.degree === Number(degree)) &&
    (language === "" || p.language === Number(language))
  ).sort((a,b) => (en ? a.en : a.tr).localeCompare(en ? b.en : b.tr, en ? "en" : "tr") * (sort === "asc" ? 1 : -1));
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(results.length / pageSize));
  const visiblePrograms = results.slice((page - 1) * pageSize, page * pageSize);
  return <div className="site">
    <a className="skip-link" href="#programs">{t("Programlara geç", "Skip to programs")}</a>
    <SiteHeader en={en} setEn={setEn} />
    <main className="main">
      <section className="intro">
        <div><div className="eyebrow"><span />{t("KARADENİZ TEKNİK ÜNİVERSİTESİ", "KARADENIZ TECHNICAL UNIVERSITY")}</div>
        <h1>{t("Geleceğine açılan", "Discover your")}<br /><span>{t("programı keşfet.", "next chapter.")}</span></h1>
        <p>{t("Programları keşfet, ders planlarını incele ve eğitim yolculuğunu şekillendir.", "Explore programs, discover curricula and shape your learning journey.")}</p></div>
        
      </section>
      <div className="catalog-layout">
        <aside className="filters" aria-label={t("Program filtreleri", "Program filters")}>
          <div className="filter-title"><button className="mobile-toggle" aria-label={t("Filtreleri aç veya kapat", "Toggle filters")} aria-expanded={filtersOpen} aria-controls="filter-fields" onClick={() => setFiltersOpen(!filtersOpen)}>{filtersOpen ? "−" : "+"}</button></div>
          <div id="filter-fields" className={filtersOpen ? "filter-fields open" : "filter-fields"}>
            <label htmlFor="search">{t("Program ara", "Search programs")}</label>
            <div className="search"><Icon type="search"/><input id="search" value={query} onChange={e => { setQuery(e.target.value); setPage(1); }} placeholder={t("Program adı veya kodu", "Program name or code")}/></div>
            <div className="filter-separator" />
            <label htmlFor="faculty">{t("Fakülte / Enstitü", "Faculty / Graduate school")}</label>
            <select id="faculty" value={faculty} onChange={e => { setFaculty(e.target.value); setPage(1); }}><option value="">{t("Tüm akademik birimler", "All academic units")}</option>{faculties.map((f,i) => <option key={f} value={i}>{f}</option>)}</select>
            <label htmlFor="degree">{t("Öğrenim düzeyi", "Degree level")}</label>
            <select id="degree" value={degree} onChange={e => { setDegree(e.target.value); setPage(1); }}><option value="">{t("Tüm düzeyler", "All degree levels")}</option>{degrees.map((d,i) => <option key={d} value={i}>{d}</option>)}</select>
            <label htmlFor="language">{t("Öğretim dili", "Language of instruction")}</label>
            <select id="language" value={language} onChange={e => { setLanguage(e.target.value); setPage(1); }}><option value="">{t("Tüm diller", "All languages")}</option>{languages.map((l,i) => <option key={l} value={i}>{l}</option>)}</select>
          </div>
          <div className="sidebar-bottom"><span>1955</span><p>{t("Köklü geçmiş.", "A proud heritage.")}<br/><strong>{t("Güçlü bir gelecek.", "A promising future.")}</strong></p></div>
        </aside>
        <section className="results" id="programs" aria-label={t("Program listesi", "Program list")}>
          <div className="results-heading"><div><h2>{t("Akademik programlar", "Academic programs")}</h2></div>
            <label className="sort">{t("Sırala", "Sort")}<select aria-label={t("Programları sırala", "Sort programs")} value={sort} onChange={e => { setSort(e.target.value); setPage(1); }}><option value="asc">A → Z</option><option value="desc">Z → A</option></select></label>
          </div>
          <div className="program-list">{visiblePrograms.map(p => <article className="program-card" key={p.id}>
            <div className="program-icon"><Icon type="book"/></div>
            <div className="program-content"><div className="faculty-name">{faculties[p.faculty]}</div><h3>{en ? p.en : p.tr}</h3>
              <div className="program-meta"><span className="degree-badge">{degrees[p.degree]}</span><span>{languages[p.language]}</span><span>{p.years} {t("yıl", "years")}</span><span>{p.ects} {t("AKTS", "ECTS")}</span></div>
              <Link className="program-link" href={`/programlar/${p.id.toLowerCase()}`}>{t("Programı incele", "Explore program")}<Icon type="arrow"/></Link>
            </div>
          </article>)}</div>
          {results.length > pageSize && <nav className={styles.pagination} aria-label={t("Program sayfaları", "Program pages")}>
            <button type="button" onClick={() => setPage(value => Math.max(1, value - 1))} disabled={page === 1} aria-label={t("Önceki sayfa", "Previous page")}>‹</button>
            <span className={styles.currentPage} aria-current="page" aria-label={t(`${page}. sayfa / ${pageCount}`, `Page ${page} of ${pageCount}`)}>{page}</span>
            <button type="button" onClick={() => setPage(value => Math.min(pageCount, value + 1))} disabled={page === pageCount} aria-label={t("Sonraki sayfa", "Next page")}>›</button>
          </nav>}
          {!results.length && <div className="empty"><Icon type="search"/><h3>{t("Aradığın programı bulamadık.", "No matching programs.")}</h3><p>{t("Farklı bir sözcük dene veya filtreleri genişlet.", "Try another keyword or broaden your filters.")}</p><button onClick={reset}>{t("Tüm programları göster", "Show all programs")}</button></div>}
        </section>
      </div>
    </main>
    <footer><span>© {new Date().getFullYear()} {t("Karadeniz Teknik Üniversitesi", "Karadeniz Technical University")}</span><span>{t("Ders Kataloğu · Tasarım Prototipi", "Course Catalog · Design Prototype")}</span></footer>
  </div>;
}







