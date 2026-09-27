import { getCourseTitle } from "@/layers/entities/course/model/curriculum";
export default function CourseName({course,en}:{course:{tr:string;en:string;status:string};en:boolean}){
 return <><span lang={en&&!course.en?"tr":undefined}>{getCourseTitle(course,en)}</span>{en&&!course.en&&<small className="course-notice">English translation unavailable · Turkish title shown</small>}{course.status==="closed"&&<small className="course-notice">{en?"Not offered this semester":"Bu dönem açılmıyor"}</small>}</>;
}
