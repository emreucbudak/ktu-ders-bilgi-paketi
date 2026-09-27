"use client";
import {useEffect} from "react";
import {useLanguage} from "@/layers/shared/providers/language-provider";
import SiteHeader from "@/layers/shared/ui/site-header";
export default function CurriculumHeader(){
 const [en,setEn]=useLanguage();
 useEffect(()=>{document.title=en?"Curriculum | KTU Course Catalog":"Ders planı | KTÜ Ders Kataloğu";},[en]);
 return <SiteHeader en={en} setEn={setEn}/>;
}
