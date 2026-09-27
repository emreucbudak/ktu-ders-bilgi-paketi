import {cookies} from "next/headers";
import { notFound } from "next/navigation";
import programs from "@/layers/entities/program/model/programs";
import { ProgramDetail } from "@/layers/pages/program-detail";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = programs.find(p => p.id.toLowerCase() === id);
  const en=(await cookies()).get("ktu_language")?.value==="en";
  return { title: program ? `${en?program.en:program.tr} | KTÜ Ders Kataloğu` : "Program bulunamadı" };
}
export default async function ProgramPage({ params }: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { id } = await params;
  const program = programs.find(p => p.id.toLowerCase() === id);
  if (!program) notFound();
  return <ProgramDetail program={program} />;
}


