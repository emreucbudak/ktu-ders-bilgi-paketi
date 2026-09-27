// Illustrative contribution levels for the prototype; not an accreditation assessment.
const sampleContributions = [
 [3,2,1,0,0,0],
 [2,3,1,2,0,0],
 [2,1,0,1,3,1],
 [2,2,1,3,1,2]
];
export function getOutcomeContributions(courseCount:number,programCount:number){
 return Array.from({length:courseCount},(_,row)=>Array.from({length:programCount},(_,col)=>sampleContributions[row]?.[col]??0));
}
