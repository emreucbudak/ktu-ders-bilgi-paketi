import {cookies} from "next/headers";
import { notFound } from "next/navigation";
import programs from "@/layers/entities/program/model/programs";
import { academicYears, getSampleCourses, getCourseTitle } from "@/layers/entities/course/model/curriculum";
import { CourseDetail } from "@/layers/pages/course-detail";

export async function generateMetadata({ params }: {
  params: Promise<{code:string}>;
  searchParams: Promise<{academicYear?:string}>;
}) {
  const {code}=await params;
  const en=(await cookies()).get("ktu_language")?.value==="en";
  for(const program of programs){
    for(let year=1;year<=program.years;year++){
      for(const term of ["fall","spring"]){
        const course=getSampleCourses(program.id,year,term).find(c=>c.code===code);
        if(course)return {title:`${getCourseTitle(course,en)} – ${course.code}`};
      }
    }
  }
  return {title:"Ders bulunamadı | KTÜ Ders Kataloğu"};
}

export default async function CoursePage({ params, searchParams }: {
  params: Promise<{code:string}>;
  searchParams: Promise<{academicYear?:string}>;
}) {
  const {code}=await params;
  const query=await searchParams;
  const academicYear=query.academicYear||academicYears[0];
  if(!academicYears.includes(academicYear))notFound();
  for(const program of programs){
    for(let year=1;year<=program.years;year++){
      for(const term of ["fall","spring"]){
        const course=getSampleCourses(program.id,year,term).find(c=>c.code===code);
        if(course)return <CourseDetail course={course} program={program} year={year} term={term} academicYear={academicYear}/>;
      }
    }
  }
  notFound();
}


