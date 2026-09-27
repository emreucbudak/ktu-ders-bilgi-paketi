const programDescriptions: Record<string, { tr: string; en: string }> = {
  BIL: {
    tr: "Program; algoritmalar, yazılım geliştirme ve bilgisayar sistemleri üzerine temel bir bakış sunar. Öğrencilerin analitik düşünme, problem çözme ve donanım ile yazılımı birlikte değerlendirme becerilerini geliştirmeyi amaçlar.",
    en: "The program introduces algorithms, software development and computer systems. It aims to develop analytical thinking, problem-solving skills and an understanding of how hardware and software work together."
  },
  YAZ: {
    tr: "Program, yazılımın gereksinim analizinden tasarım, geliştirme ve test aşamalarına kadar uzanan sürecine odaklanır. Güvenilir ve sürdürülebilir yazılımlar üretmek için teknik bilgi, ekip çalışması ve proje yönetimi becerilerini bir araya getirmeyi amaçlar.",
    en: "The program focuses on the software lifecycle, from requirements analysis to design, development and testing. It aims to combine technical knowledge, teamwork and project management skills to create reliable and maintainable software."
  },
  ELE: {
    tr: "Program; elektrik devreleri, elektronik sistemler, enerji ve haberleşme alanlarını bir arada ele alır. Öğrencilerin fiziksel sistemleri analiz etme, ölçüm sonuçlarını yorumlama ve mühendislik problemlerine çözüm geliştirme becerilerini desteklemeyi amaçlar.",
    en: "The program brings together electrical circuits, electronic systems, energy and communications. It aims to support students in analysing physical systems, interpreting measurements and developing solutions to engineering problems."
  },
  MIM: {
    tr: "Program, yapı ve mekân tasarımını insan ihtiyaçları, çevresel koşullar ve kültürel bağlamla birlikte ele alır. Tasarım düşüncesi, görsel anlatım ve teknik bilgiyi birleştirerek işlevsel ve sürdürülebilir yaşam alanları geliştirmeye odaklanır.",
    en: "The program approaches building and spatial design through human needs, environmental conditions and cultural context. It combines design thinking, visual communication and technical knowledge to explore functional and sustainable living spaces."
  },
  ICM: {
    tr: "Program, iç mekânların işlevsel, estetik ve kullanıcı ihtiyaçlarına uygun biçimde tasarlanmasına odaklanır. Mekân organizasyonu, malzeme, aydınlatma ve ergonomi konularını birlikte değerlendirerek tasarım kararlarını geliştirmeyi amaçlar.",
    en: "The program focuses on designing interior spaces that address function, aesthetics and user needs. It brings together spatial organisation, materials, lighting and ergonomics to inform design decisions."
  },
  MAT: {
    tr: "Program; matematiksel düşünme, soyutlama ve mantıksal akıl yürütme becerilerine odaklanır. Analiz, cebir ve geometri gibi temel alanlar üzerinden problemlerin sistematik biçimde incelenmesini ve matematiksel modellerle ifade edilmesini amaçlar.",
    en: "The program focuses on mathematical thinking, abstraction and logical reasoning. Through core areas such as analysis, algebra and geometry, it explores how problems can be studied systematically and expressed through mathematical models."
  },
  FIZ: {
    tr: "Program, doğadaki olayları temel fizik ilkeleri ve matematiksel modeller yardımıyla anlamaya odaklanır. Kuramsal düşünme ile deneysel yaklaşımı bir araya getirerek gözlem, veri yorumlama ve bilimsel problem çözme becerilerini geliştirmeyi amaçlar.",
    en: "The program explores natural phenomena through fundamental physical principles and mathematical models. It combines theoretical reasoning with an experimental approach to develop observation, data interpretation and scientific problem-solving skills."
  },
  "BIL-YL": {
    tr: "Program, bilgisayar mühendisliği alanında ileri düzey bilgi edinme ve belirli bir araştırma konusunda uzmanlaşma üzerine kuruludur. Bilimsel kaynakları değerlendirme, araştırma yöntemi geliştirme ve bulguları tez çalışmasıyla sunma becerilerini desteklemeyi amaçlar.",
    en: "The program focuses on advanced knowledge in computer engineering and specialisation in a research topic. It aims to support the evaluation of scientific literature, the development of research methods and the presentation of findings in a thesis."
  },
  MAK: {
    tr: "Program; mekanik sistemler, malzeme, üretim ve enerji dönüşümü konularını mühendislik bakışıyla ele alır. Öğrencilerin tasarım ve analiz becerilerini geliştirerek verimli, güvenilir ve uygulanabilir mekanik çözümler üretmesini amaçlar.",
    en: "The program examines mechanical systems, materials, manufacturing and energy conversion from an engineering perspective. It aims to develop design and analysis skills for efficient, reliable and practical mechanical solutions."
  },
  IST: {
    tr: "Program, verilerin toplanması, düzenlenmesi, analiz edilmesi ve sonuçların yorumlanmasına odaklanır. Olasılık, istatistiksel modelleme ve veri analizi yaklaşımlarıyla belirsizlik altında bilinçli karar verme becerilerini geliştirmeyi amaçlar.",
    en: "The program focuses on collecting, organising and analysing data, and interpreting the results. It uses probability, statistical modelling and data analysis to develop informed decision-making skills under uncertainty."
  },
  BPR: { tr: "İki yıllık uygulamalı program; temel programlama, web, veri tabanı ve sistem desteği konularını kapsar.", en: "This two-year applied program covers programming fundamentals, web development, databases and systems support." },
  HEM: { tr: "Program; sağlık bilimleri, hemşirelik bakımı, klinik uygulama ve toplum sağlığı çalışmalarını bir arada ele alır.", en: "The program combines health sciences, nursing care, clinical practice and community health." },
  ISL: { tr: "Program; işletme yönetimi, finans, pazarlama, organizasyon ve karar verme konularında temel ve uygulamalı eğitim sunar.", en: "The program offers foundational and applied study in business management, finance, marketing, organisations and decision-making." },
  ORM: { tr: "Program; orman ekolojisi, ölçme, planlama ve doğal kaynakların sürdürülebilir yönetimine odaklanır.", en: "The program focuses on forest ecology, surveying, planning and sustainable natural-resource management." },
  DNB: { tr: "Program; deniz ekolojisi, balıkçılık, su ürünleri yetiştiriciliği ve üretim teknolojilerini kapsar.", en: "The program covers marine ecology, fisheries, aquaculture and production technologies." },
  "BIL-DR": { tr: "Doktora programı ileri bilgisayar mühendisliği araştırmalarını, doktora seminerini ve tez çalışmasını kapsar.", en: "The doctoral program covers advanced computer engineering research, doctoral seminars and thesis work." },
  INS: { tr: "Program; yapı tasarımı, yapı malzemeleri, geoteknik ve ulaştırma sistemlerini kapsar.", en: "The program covers structural design, construction materials, geotechnics and transportation systems." },
  KIM: { tr: "Program, kimyasal maddelerin özellik ve dönüşümlerini laboratuvar ve kuramsal çalışmalarla inceler.", en: "The program studies the properties and transformations of chemical substances through laboratory and theoretical work." },
  EKO: { tr: "Program, tüketici ve işletme kararlarını, piyasaları ve kamu politikalarını ekonomik modellerle ele alır.", en: "The program examines consumer and firm decisions, markets and public policy using economic models." },
  DEN: { tr: "Program, denizel canlıların biyolojisini, ekolojik ilişkilerini ve deniz biyoçeşitliliğini inceler.", en: "The program studies marine organism biology, ecological relationships and ocean biodiversity." }
};
export default programDescriptions;
