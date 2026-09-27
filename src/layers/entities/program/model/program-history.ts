import programs from "./programs";

// Fictional founding dates and histories for the design prototype, not KTÜ records.
const histories: Record<string, [number, string, string]> = {
 BIL:[2002,"algoritmalar, yazılım geliştirme ve bilgisayar sistemleri","algorithms, software development and computer systems"],
 YAZ:[2014,"yazılım tasarımı, geliştirme süreçleri ve kalite güvencesi","software design, development processes and quality assurance"],
 ELE:[1998,"elektronik, enerji ve haberleşme sistemleri","electronics, energy and communication systems"],
 MIM:[2001,"mimari tasarım, yapı teknolojileri ve sürdürülebilir çevre","architectural design, building technologies and sustainable environments"],
 ICM:[2008,"iç mekân tasarımı, malzeme ve kullanıcı deneyimi","interior design, materials and user experience"],
 MAT:[1996,"matematiksel düşünme, kuramsal yöntemler ve uygulamalı analiz","mathematical reasoning, theoretical methods and applied analysis"],
 FIZ:[1997,"temel fizik, deneysel yöntemler ve bilimsel modelleme","fundamental physics, experimental methods and scientific modelling"],
 MAK:[2000,"mekanik tasarım, üretim ve enerji sistemleri","mechanical design, manufacturing and energy systems"],
 IST:[2006,"istatistiksel modelleme, veri analizi ve karar verme","statistical modelling, data analysis and decision-making"],
 "BIL-YL":[2016,"ileri hesaplama yöntemleri ve bilgisayar bilimlerinde araştırma","advanced computing methods and research in computer science"],
 BPR:[2010,"programlama temelleri, web uygulamaları ve veritabanı sistemleri","programming fundamentals, web applications and database systems"],
 HEM:[2005,"hemşirelik uygulamaları, sağlık eğitimi ve toplum sağlığı","nursing practice, health education and community health"],
 ISL:[2004,"işletme yönetimi, muhasebe ve organizasyon süreçleri","business management, accounting and organisational processes"],
 ORM:[1999,"orman ekosistemleri, doğal kaynak yönetimi ve sürdürülebilir ormancılık","forest ecosystems, natural resource management and sustainable forestry"],
 DNB:[2003,"deniz ekosistemleri, balıkçılık ve su ürünleri teknolojileri","marine ecosystems, fisheries and aquaculture technologies"],
 "BIL-DR":[2020,"bilgisayar bilimlerinde ileri araştırma ve özgün tez çalışmaları","advanced computer science research and original thesis work"],
 INS:[2001,"yapı tasarımı, geoteknik ve ulaştırma sistemleri","structural design, geotechnics and transport systems"],
 KIM:[1995,"maddenin yapısı, kimyasal tepkimeler ve laboratuvar yöntemleri","matter, chemical reactions and laboratory methods"],
 EKO:[2007,"ekonomik kararlar, piyasalar ve kamu politikası","economic decisions, markets and public policy"],
 DEN:[2012,"deniz canlıları, ekosistemler ve biyolojik çeşitlilik","marine organisms, ecosystems and biological diversity"]
};
const programHistory = Object.fromEntries(programs.map(program=>{
 const [year,tr,en]=histories[program.id];
 return [program.id,{
  tr:`${program.tr} programı, ${tr} alanlarında eğitim vermek amacıyla ${year} yılında kurulmuştur. Kuruluşundan bu yana ders planı, alanın gelişen ihtiyaçlarına göre güncellenerek uygulama ve ${program.degree===1||program.degree===3?"tez araştırmaları":"proje çalışmaları"} ile desteklenmiştir.`,
  en:`The ${program.en} program was established in ${year} to provide education in ${en}. Since its foundation, its curriculum has been updated to reflect developments in the field and supported by practical work and ${program.degree===1||program.degree===3?"thesis research":"projects"}.`
 }];
}));
export default programHistory;
