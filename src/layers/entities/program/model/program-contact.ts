import programs from "./programs";

// Fictional contact details. example.com is reserved for examples.
const programContacts = Object.fromEntries(programs.map((program,index)=>[program.id,{
 email:`${program.id.toLowerCase()}@example.com`,
 unitTr:`${program.tr} Program Sekreterliği`,
 unitEn:`${program.en} Program Office`,
 addressTr:`Örnek Kampüs, Akademik Birimler Binası, Oda ${101+index}`,
 addressEn:`Sample Campus, Academic Units Building, Room ${101+index}`,
 hoursTr:"Hafta içi 09.00–12.00 / 13.00–17.00",
 hoursEn:"Weekdays 09:00–12:00 / 13:00–17:00"
}]));
export default programContacts;
