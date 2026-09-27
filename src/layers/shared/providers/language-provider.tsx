"use client";
import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
import {useRouter} from "next/navigation";
const LanguageContext=createContext<readonly [boolean,(en:boolean)=>void]>([false,()=>{}]);
export default function LanguageProvider({initialEnglish,children}:{initialEnglish:boolean;children:ReactNode}){
 const [en,setEn]=useState(initialEnglish);
 const router=useRouter();
 useEffect(()=>{
  const saved=document.cookie.split(";").map(part=>part.trim()).find(part=>part.startsWith("ktu_language="))?.slice("ktu_language=".length);
  if(saved!=="tr"&&saved!=="en"){
   document.cookie=`ktu_language=tr; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol==="https:"?"; Secure":""}`;
  }
  document.documentElement.lang=en?"en":"tr";
  const url=new URL(window.location.href);
  if(url.searchParams.has("lang")){url.searchParams.delete("lang");window.history.replaceState(null,"",url);}
 },[en]);
 const changeLanguage=(value:boolean)=>{
  document.cookie=`ktu_language=${value?"en":"tr"}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol==="https:"?"; Secure":""}`;
  setEn(value);
  router.refresh();
 };
 return <LanguageContext.Provider value={[en,changeLanguage]}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){return useContext(LanguageContext);}
