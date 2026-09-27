import { getSampleCourses } from "./curriculum";

// Prototype prerequisites: only resolve courses offered in an earlier semester.
const prerequisiteTopics: Record<string, string[]> = {
 "Veri Yapıları": ["Programlamaya Giriş"],
 "İşletim Sistemleri": ["Veri Yapıları"],
 "Bilgisayar Ağları": ["İşletim Sistemleri"],
 "Nesne Yönelimli Programlama": ["Yazılım Mühendisliğine Giriş"],
 "Yazılım Mimarisi": ["Nesne Yönelimli Programlama"],
 "Yazılım Testi": ["Yazılım Mühendisliğine Giriş"],
 "Elektronik": ["Devre Analizi"],
 "Sinyaller ve Sistemler": ["Devre Analizi"],
 "Kontrol Sistemleri": ["Sinyaller ve Sistemler"],
 "Mimari Tasarım": ["Temel Tasarım"],
 "Yapı Bilgisi": ["Temel Tasarım"],
 "İç Mekân Tasarımı": ["Temel Tasarım"],
 "Mobilya Tasarımı": ["Temel Tasarım"],
 "Aydınlatma Tasarımı": ["İç Mekân Tasarımı"],
 "Diferansiyel Denklemler": ["Analiz"],
 "Soyut Cebir": ["Lineer Cebir"],
 "Elektrik ve Manyetizma": ["Mekanik"],
 "Optik": ["Elektrik ve Manyetizma"],
 "Kuantum Fiziği": ["Mekanik"],
 "Dinamik": ["Statik"],
 "Makine Elemanları": ["Statik"],
 "İstatistiksel Çıkarım": ["Olasılık"],
 "Regresyon Analizi": ["İstatistiksel Çıkarım"],
 "Zaman Serileri": ["Regresyon Analizi"],
 "Makine Öğrenmesi": ["İleri Algoritmalar"],
 "Bilimsel Hesaplama": ["İleri Algoritmalar"]
};
export function getCoursePrerequisites(programId: string, title: string, year: number, term: string) {
 const currentSemester = (year - 1) * 2 + (term === "spring" ? 2 : 1);
 const earlier: ReturnType<typeof getSampleCourses> = [];
 for (let semester = 1; semester < currentSemester; semester++) {
   earlier.push(...getSampleCourses(programId, Math.ceil(semester / 2), semester % 2 ? "fall" : "spring"));
 }
 return (prerequisiteTopics[title] || []).flatMap(name => {
   const course = earlier.find(c => c.tr === name);
   return course ? [course] : [];
 });
}

