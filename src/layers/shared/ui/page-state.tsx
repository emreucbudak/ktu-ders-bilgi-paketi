"use client";
import Link from "next/link";
import {useLanguage} from "@/layers/shared/providers/language-provider";
import {useEffect} from "react";
import SiteHeader from "@/layers/shared/ui/site-header";
export default function PageState({kind,retry}:{kind:"loading"|"error"|"missing";retry?:()=>void}){
 const [en,setEn]=useLanguage();
 useEffect(()=>{document.documentElement.lang=en?"en":"tr";},[en]);
 const copy={loading:["Sayfa yükleniyor","Loading page","Bilgiler hazırlanıyor. Lütfen bekleyin.","Preparing the information. Please wait."],error:["Sayfa yüklenemedi","Unable to load page","Geçici bir sorun oluştu. Yeniden deneyebilir veya program listesine dönebilirsiniz.","A temporary problem occurred. Try again or return to the program list."],missing:["Sayfa bulunamadı","Page not found","Bu bağlantıya ait program veya ders bulunamadı. Program listesinden devam edebilirsiniz.","This program or course could not be found. Continue from the program list."]}[kind];
 return <div className="site"><SiteHeader en={en} setEn={setEn}/><main className="state-page" lang={en?"en":"tr"} aria-busy={kind==="loading"}>
 <div role={kind==="loading"?"status":undefined}><h1>{copy[en?1:0]}</h1><p>{copy[en?3:2]}</p></div>
 {kind==="loading"?<div className="state-skeleton" aria-hidden="true"><span/><span/><span/></div>:<div className="state-actions">{kind==="error"&&<button onClick={retry}>{en?"Try again":"Yeniden dene"}</button>}<Link href="/">{en?"Back to programs":"Programlara dön"}</Link></div>}
 </main></div>;
}
