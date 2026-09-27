export const academicYears = ["2026-2027", "2025-2026", "2024-2025"];

// Illustrative curriculum for the prototype, not an official historical catalog.
const fields: Record<string, [string, string][]> = {
 BIL: [["Programlamaya Giriş","Introduction to Programming"],["Veri Yapıları","Data Structures"],["İşletim Sistemleri","Operating Systems"],["Bilgisayar Ağları","Computer Networks"]],
 YAZ: [["Yazılım Mühendisliğine Giriş","Introduction to Software Engineering"],["Nesne Yönelimli Programlama","Object-Oriented Programming"],["Yazılım Mimarisi","Software Architecture"],["Yazılım Testi","Software Testing"]],
 ELE: [["Devre Analizi","Circuit Analysis"],["Elektronik","Electronics"],["Sinyaller ve Sistemler","Signals and Systems"],["Kontrol Sistemleri","Control Systems"]],
 MIM: [["Temel Tasarım","Basic Design"],["Mimari Tasarım","Architectural Design"],["Yapı Bilgisi","Building Technology"],["Mimarlık Tarihi","History of Architecture"]],
 ICM: [["Temel Tasarım","Basic Design"],["İç Mekân Tasarımı","Interior Design"],["Mobilya Tasarımı","Furniture Design"],["Aydınlatma Tasarımı","Lighting Design"]],
 MAT: [["Analiz","Analysis"],["Lineer Cebir","Linear Algebra"],["Diferansiyel Denklemler","Differential Equations"],["Soyut Cebir","Abstract Algebra"]],
 FIZ: [["Mekanik","Mechanics"],["Elektrik ve Manyetizma","Electricity and Magnetism"],["Optik","Optics"],["Kuantum Fiziği","Quantum Physics"]],
 MAK: [["Statik","Statics"],["Dinamik","Dynamics"],["Termodinamik","Thermodynamics"],["Makine Elemanları","Machine Elements"]],
 IST: [["Olasılık","Probability"],["İstatistiksel Çıkarım","Statistical Inference"],["Regresyon Analizi","Regression Analysis"],["Zaman Serileri","Time Series"]],
 "BIL-YL": [["İleri Algoritmalar","Advanced Algorithms"],["Makine Öğrenmesi","Machine Learning"],["Araştırma Yöntemleri","Research Methods"],["Bilimsel Hesaplama","Scientific Computing"]],
 BPR: [["Programlamaya Giriş","Introduction to Programming"],["Web Programlama","Web Programming"],["Veritabanı Temelleri","Database Fundamentals"],["Bilgisayar Ağları","Computer Networks"]],
 HEM: [["Anatomi ve Fizyoloji","Anatomy and Physiology"],["Hemşirelik Esasları","Fundamentals of Nursing"],["Sağlıkta İletişim","Communication in Healthcare"],["Halk Sağlığı","Public Health"]],
 ISL: [["İşletmeye Giriş","Introduction to Business"],["Muhasebe İlkeleri","Accounting Principles"],["Pazarlama Yönetimi","Marketing Management"],["İnsan Kaynakları","Human Resources"]],
 ORM: [["Orman Ekolojisi","Forest Ecology"],["Silvikültür","Silviculture"],["Ormancılık Ölçme Bilgisi","Forest Surveying"],["Odun Bilgisi","Wood Science"]],
 DNB: [["Deniz Ekolojisi","Marine Ecology"],["Balıkçılık Biyolojisi","Fisheries Biology"],["Su Ürünleri Yetiştiriciliği","Aquaculture"],["Av Araçları Teknolojisi","Fishing Gear Technology"]],
 "BIL-DR": [["İleri Araştırma Yöntemleri","Advanced Research Methods"],["Doktora Semineri","Doctoral Seminar"],["Dağıtık Sistemlerde Araştırma","Research in Distributed Systems"],["Doktora Tez Çalışması","Doctoral Thesis Research"]],
 INS: [["Yapı Statiği","Structural Mechanics"],["Yapı Malzemeleri","Construction Materials"],["Geoteknik","Geotechnical Engineering"],["Ulaştırma Mühendisliği","Transportation Engineering"]],
 KIM: [["Genel Kimya","General Chemistry"],["Organik Kimya","Organic Chemistry"],["Analitik Kimya","Analytical Chemistry"],["Fizikokimya","Physical Chemistry"]],
 EKO: [["Mikroekonomi","Microeconomics"],["Makroekonomi","Macroeconomics"],["Ekonometri","Econometrics"],["Kamu Ekonomisi","Public Economics"]],
 DEN: [["Deniz Ekolojisi","Marine Ecology"],["Deniz Omurgasızları","Marine Invertebrates"],["Balık Biyolojisi","Fish Biology"],["Denizel Biyoçeşitlilik","Marine Biodiversity"]]
};
export function getSampleCourses(id: string, year: number, term: string) {
 const semester = (year - 1) * 2 + (term === "spring" ? 2 : 1);
 const topics = fields[id];
 const selected = term === "spring" ? [...topics.slice(2), ...topics.slice(0,2)] : topics;
 const courses = [...selected, [year === 1 ? "Akademik İletişim" : "Alan Projesi", year === 1 ? "Academic Communication" : "Field Project"], ["Seçmeli Ders", "Elective Course"]].map(([tr,en],i)=>({
   status: "open" as "open" | "closed", contentTitle:tr,
   code: id + semester + String(i+1).padStart(2,"0"), tr, en, credit: i === 4 ? 2 : 3, ects:5, elective:i===5,
   theoryHours: i===4 ? (year===1?2:0) : (id==="MAT" || tr==="Mimarlık Tarihi" ? 3 : 2),
   practiceHours: i===4 ? (year===1?0:4) : (id==="MAT" || tr==="Mimarlık Tarihi" ? 0 : 2)
 }));
 if(id==="BIL" && semester===1){
   courses[5]={...courses[5],tr:"Disiplinlerarası Akıllı Sistemlerde Veri Odaklı Problem Çözme, Sorumlu Yazılım Tasarımı ve Toplumsal Etkilerin Uygulamalı Değerlendirilmesi",en:""};
   courses.push({...courses[4],code:"BIL107",tr:"Üniversite Yaşamına Uyum Semineri",en:"Introduction to University Life Seminar",credit:0,ects:0,theoryHours:1,practiceHours:0});
   courses.push({...courses[5],code:"BIL108",tr:"Etkileşimli Uygulamalar Atölyesi",en:"Interactive Applications Workshop",status:"closed"});
 }
 return courses;
}
export function getCourseTitle(course:{tr:string;en:string},en:boolean){
 return en ? course.en || course.tr : course.tr;
}
