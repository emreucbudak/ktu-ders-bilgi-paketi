// Consistent sample workload model: 30 hours per ECTS, 14 teaching weeks.
export function getCourseWorkload(theoryHours: number, practiceHours: number, ects: number) {
 if(ects===0)return [{tr:"Teorik ders",en:"Theory classes",count:14,hours:theoryHours},{tr:"Uygulama",en:"Practical classes",count:14,hours:practiceHours}];
 const rows = [
  {tr:"Teorik ders",en:"Theory classes",count:14,hours:theoryHours},
  {tr:"Uygulama",en:"Practical classes",count:14,hours:practiceHours},
  {tr:"Ödevler",en:"Assignments",count:4,hours:8},
  {tr:"Ara sınav",en:"Midterm exam",count:1,hours:2},
  {tr:"Final sınavı",en:"Final exam",count:1,hours:2}
 ];
 const projectHours=ects*30-rows.reduce((sum,row)=>sum+row.count*row.hours,0);
 return [...rows.slice(0,3),{tr:"Proje çalışması",en:"Project work",count:1,hours:projectHours},...rows.slice(3)];
}
export const courseAssessment = [
 {tr:"Ara sınav",en:"Midterm exam",count:1,weight:30},
 {tr:"Ödevler",en:"Assignments",count:4,weight:20},
 {tr:"Proje",en:"Project",count:1,weight:10},
 {tr:"Final sınavı",en:"Final exam",count:1,weight:40}
];

