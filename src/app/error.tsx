"use client";
import PageState from "@/layers/shared/ui/page-state";
export default function ErrorPage({retry}:{error:Error & {digest?:string};retry:()=>void}){return <PageState kind="error" retry={retry}/>;}
