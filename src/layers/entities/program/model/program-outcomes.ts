type Outcome = [string, string];
const programOutcomes: Record<string, Outcome[]> = {
 BIL: [
 ["Hesaplama problemlerini analiz eder ve uygun algoritmik çözümler geliştirir.","Analyses computational problems and develops suitable algorithms."],
 ["Veri yapılarını kullanarak anlaşılır ve sürdürülebilir yazılımlar geliştirir.","Develops clear, maintainable software using appropriate data structures."],
 ["Bilgisayar donanımı, işletim sistemleri ve ağların birlikte çalışma biçimini açıklar.","Explains how hardware, operating systems and networks work together."],
 ["Yazılım çözümlerini test eder; performans ve güvenlik açısından değerlendirir.","Tests software solutions and evaluates their performance and security."],
 ["Teknik çalışmalarını belgeler ve ekip içinde etkili biçimde iletişim kurar.","Documents technical work and communicates effectively within a team."],
 ["Bilişim uygulamalarında etik, gizlilik ve mesleki sorumlulukları gözetir.","Considers ethics, privacy and professional responsibilities in computing."]
 ],
 YAZ: [
 ["Kullanıcı ihtiyaçlarını analiz ederek yazılım gereksinimlerini tanımlar.","Analyses user needs and defines software requirements."],
 ["Gereksinimlere uygun yazılım mimarileri ve bileşenleri tasarlar.","Designs software architectures and components to meet requirements."],
 ["Sürüm kontrolü ve geliştirme araçlarıyla ekip çalışmasına katkı sağlar.","Contributes to teamwork using version control and development tools."],
 ["Test yöntemleriyle yazılım kalitesini ve doğruluğunu değerlendirir.","Evaluates software quality and correctness through testing."],
 ["Yazılımın bakım, dağıtım ve iyileştirme süreçlerini planlar.","Plans software maintenance, deployment and improvement."],
 ["Yazılım geliştirmede erişilebilirlik, güvenlik ve etik sorumlulukları gözetir.","Considers accessibility, security and ethics in software development."]
 ],
 ELE: [
 ["Elektrik ve elektronik devrelerini temel bilim ilkeleriyle analiz eder.","Analyses electrical and electronic circuits using scientific principles."],
 ["Belirlenen gereksinimlere uygun elektronik sistemler tasarlar.","Designs electronic systems to meet specified requirements."],
 ["Ölçüm araçlarını kullanır ve deney sonuçlarını yorumlar.","Uses measurement instruments and interprets experimental results."],
 ["Enerji, kontrol ve haberleşme problemlerine teknik çözümler geliştirir.","Develops technical solutions for energy, control and communication problems."],
 ["Sistemleri güvenlik, verimlilik ve çevresel etkiler açısından değerlendirir.","Evaluates systems for safety, efficiency and environmental impact."],
 ["Mühendislik çalışmalarını belgeler ve teknik sonuçları açık biçimde sunar.","Documents engineering work and presents technical results clearly."]
 ],
 MIM: [
 ["Kullanıcı ihtiyaçlarını ve yerin özelliklerini analiz ederek tasarım kararları geliştirir.","Develops design decisions by analysing user needs and site characteristics."],
 ["Mekân, yapı ve çevre ilişkilerini bütüncül biçimde değerlendirir.","Evaluates relationships between spaces, buildings and their environment."],
 ["Mimari fikirlerini çizim, model ve dijital araçlarla ifade eder.","Communicates architectural ideas through drawings, models and digital tools."],
 ["Malzeme ve yapım bilgisini mimari tasarım süreçlerine aktarır.","Applies material and construction knowledge to architectural design."],
 ["Tasarımlarında erişilebilirlik, sürdürülebilirlik ve kültürel mirası gözetir.","Considers accessibility, sustainability and cultural heritage in design."],
 ["Tasarım önerilerini gerekçelendirir ve eleştirel geri bildirimle geliştirir.","Justifies design proposals and improves them through critical feedback."]
 ],
 ICM: [
 ["İç mekân kullanıcılarının ihtiyaçlarını ve kullanım senaryolarını analiz eder.","Analyses interior users’ needs and usage scenarios."],
 ["İşlev, estetik ve ergonomiyi birleştiren mekânsal çözümler geliştirir.","Develops spatial solutions that integrate function, aesthetics and ergonomics."],
 ["Malzeme, renk ve aydınlatma kararlarını tasarım hedefleriyle ilişkilendirir.","Relates material, colour and lighting decisions to design objectives."],
 ["Tasarımlarını teknik çizimler, modeller ve görsellerle ifade eder.","Communicates designs through technical drawings, models and visuals."],
 ["Uygulama detaylarını üretilebilirlik ve kaynak kullanımı açısından değerlendirir.","Evaluates implementation details for feasibility and resource use."],
 ["İç mekân tasarımında erişilebilirliği ve mesleki sorumluluğu gözetir.","Considers accessibility and professional responsibility in interior design."]
 ],
 MAT: [
 ["Matematiksel kavramları ve aralarındaki ilişkileri açık biçimde ifade eder.","Clearly explains mathematical concepts and their relationships."],
 ["Mantıksal akıl yürütmeyle matematiksel ispatlar oluşturur.","Constructs mathematical proofs through logical reasoning."],
 ["Problemler için uygun cebirsel, analitik veya geometrik yöntemleri seçer.","Selects suitable algebraic, analytical or geometric methods for problems."],
 ["Gerçek yaşam problemlerini matematiksel modellerle temsil eder.","Represents real-world problems through mathematical models."],
 ["Hesaplama sonuçlarını varsayımlar ve hata kaynakları açısından değerlendirir.","Evaluates computational results in relation to assumptions and error sources."],
 ["Matematiksel düşüncelerini yazılı ve sözlü olarak tutarlı biçimde sunar.","Presents mathematical ideas coherently in writing and speech."]
 ],
 FIZ: [
 ["Fiziksel olayları temel yasalar ve matematiksel modellerle açıklar.","Explains physical phenomena using fundamental laws and mathematical models."],
 ["Bilimsel bir soruya yönelik deney veya inceleme planlar.","Plans experiments or investigations to address scientific questions."],
 ["Ölçüm verilerini belirsizlikleriyle birlikte analiz eder.","Analyses measurement data together with its uncertainties."],
 ["Kuramsal tahminler ile deneysel bulguları karşılaştırır.","Compares theoretical predictions with experimental findings."],
 ["Fizik problemlerini çözmek için sayısal yöntemlerden yararlanır.","Uses numerical methods to solve physics problems."],
 ["Araştırma sonuçlarını bilimsel etik ilkelerine uygun biçimde raporlar.","Reports research findings in accordance with scientific ethics."]
 ],
 "BIL-YL": [
 ["Uzmanlık alanındaki bilimsel yayınları eleştirel olarak değerlendirir.","Critically evaluates scientific literature in a specialist field."],
 ["Araştırılabilir bir problem ve uygun araştırma soruları tanımlar.","Defines a researchable problem and appropriate research questions."],
 ["Probleme uygun ileri yöntemleri seçer ve uygular.","Selects and applies advanced methods appropriate to the problem."],
 ["Deney veya analiz sonuçlarını karşılaştırır ve sınırlılıklarını tartışır.","Compares experimental or analytical results and discusses their limitations."],
 ["Araştırma sürecini bağımsız biçimde planlar ve belgeler.","Independently plans and documents the research process."],
 ["Bulgularını tez ve akademik sunumlarla araştırma etiğine uygun biçimde paylaşır.","Communicates findings through a thesis and academic presentations with research integrity."]
 ],
 MAK: [
 ["Mekanik sistemleri temel mühendislik ilkeleriyle analiz eder.","Analyses mechanical systems using fundamental engineering principles."],
 ["İşlevsel gereksinimlere uygun makine ve bileşenler tasarlar.","Designs machines and components to meet functional requirements."],
 ["Malzeme ve üretim yöntemlerini tasarım ihtiyaçlarına göre seçer.","Selects materials and manufacturing methods according to design needs."],
 ["Isıl ve mekanik sistemlerin performansını değerlendirir.","Evaluates the performance of thermal and mechanical systems."],
 ["Deney, ölçüm ve simülasyon sonuçlarını mühendislik kararlarında kullanır.","Uses experimental, measurement and simulation results in engineering decisions."],
 ["Çözümlerini güvenlik, maliyet ve çevresel etkiler açısından değerlendirir.","Evaluates solutions for safety, cost and environmental impact."]
 ],
 IST: [
 ["Araştırma sorularına uygun veri toplama ve örnekleme yöntemlerini seçer.","Selects data collection and sampling methods suitable for research questions."],
 ["Verileri düzenler, görselleştirir ve özet istatistiklerle açıklar.","Organises, visualises and describes data through summary statistics."],
 ["Uygun istatistiksel modelleri kurar ve varsayımlarını değerlendirir.","Builds suitable statistical models and evaluates their assumptions."],
 ["Analiz sonuçlarını belirsizlik ve sınırlılıklarıyla birlikte yorumlar.","Interprets analytical results together with their uncertainty and limitations."],
 ["İstatistiksel yazılımlarla tekrarlanabilir analizler gerçekleştirir.","Performs reproducible analyses using statistical software."],
 ["Bulguları anlaşılır biçimde sunar ve veri kullanımında etik ilkeleri gözetir.","Presents findings clearly and observes ethical principles in data use."]
 ],
 BPR: [["Temel programlama dilleriyle çalışan uygulamalar geliştirir.","Builds applications using foundational programming languages."],["Web sayfalarını erişilebilirlik ve kullanılabilirlik ilkelerine göre düzenler.","Structures web pages using accessibility and usability principles."],["İlişkisel veri tabanlarında kayıtları düzenler ve sorgular.","Organises and queries records in relational databases."],["Yazılım hatalarını sistematik biçimde bulup giderir.","Systematically identifies and resolves software defects."],["Bilgi sistemlerinin kurulum ve işletim süreçlerini destekler.","Supports the setup and operation of information systems."],["Mesleki iletişim ve veri güvenliği ilkelerine uyar.","Follows professional communication and data-security principles."]],
 HEM: [["Temel sağlık ve yaşam bulgularını güvenli biçimde değerlendirir.","Safely assesses basic health and vital signs."],["Bakım gereksinimlerini belirleyip bireye uygun plan oluşturur.","Identifies care needs and develops an individualised plan."],["Kanıta dayalı bakım uygulamalarını açıklar.","Explains evidence-based care practices."],["Sağlık ekibiyle açık ve etik iletişim kurar.","Communicates clearly and ethically with the healthcare team."],["Toplum sağlığını etkileyen etmenleri değerlendirir.","Assesses factors that affect community health."],["Hasta güvenliği ve mahremiyet ilkelerini gözetir.","Observes patient-safety and privacy principles."]],
 ISL: [["İşletmenin temel işlevlerini ve çevresini analiz eder.","Analyses core business functions and their environment."],["Temel muhasebe kayıtlarını yorumlar.","Interprets basic accounting records."],["Pazar ve müşteri verilerine dayalı öneriler geliştirir.","Develops recommendations based on market and customer data."],["İş kararlarını maliyet ve performans ölçütleriyle değerlendirir.","Evaluates business decisions using cost and performance measures."],["Ekip ve proje çalışmalarına katkı sağlar.","Contributes to team and project work."],["İş etiği ve sorumlu yönetim ilkelerini uygular.","Applies business ethics and responsible management principles."]],
 ORM: [["Orman ekosistemlerinin temel bileşenlerini tanımlar.","Identifies the core components of forest ecosystems."],["Arazi ve orman envanteri verilerini toplar ve yorumlar.","Collects and interprets land and forest-inventory data."],["Sürdürülebilir orman yönetimi için plan önerir.","Proposes plans for sustainable forest management."],["Erozyon ve habitat etkilerini değerlendirir.","Assesses erosion and habitat impacts."],["Harita ve ölçme araçlarını arazi çalışmalarında kullanır.","Uses mapping and surveying tools in fieldwork."],["Doğal kaynak kararlarında çevresel ve toplumsal etkileri gözetir.","Considers environmental and social impacts in natural-resource decisions."]],
 DNB: [["Deniz ve iç su ekosistemlerinin temel özelliklerini açıklar.","Explains key characteristics of marine and inland-water ecosystems."],["Su ürünleri üretim sistemlerinin işleyişini değerlendirir.","Evaluates the operation of aquaculture production systems."],["Balıkçılık verilerini temel yöntemlerle yorumlar.","Interprets fisheries data using basic methods."],["Üretim süreçlerinde çevresel etkileri belirler.","Identifies environmental impacts in production processes."],["Su ürünleri teknolojilerine uygun teknik çözümler önerir.","Recommends technical solutions for aquaculture technologies."],["Kaynakların sorumlu kullanımına ilişkin ilkeleri uygular.","Applies principles for responsible resource use."]],
 "BIL-DR": [["Bilgisayar mühendisliğinde özgün ve araştırılabilir problem tanımlar.","Defines original, researchable problems in computer engineering."],["Araştırma sorusuna uygun yöntem ve deney tasarlar.","Designs methods and experiments suited to a research question."],["Bilimsel kaynakları eleştirel biçimde değerlendirir.","Critically evaluates scholarly sources."],["Sonuçları belirsizlik ve sınırlılıklarıyla yorumlar.","Interprets results with their uncertainty and limitations."],["Araştırma bulgularını bilimsel yayın ve sunumlarla paylaşır.","Communicates research findings through scholarly publication and presentation."],["Araştırma etiği ve tekrarlanabilirlik ilkelerini gözetir.","Observes research-integrity and reproducibility principles."]],
 INS: [["Yapı sistemlerini mühendislik ilkeleriyle analiz eder.","Analyses structural systems using engineering principles."],["Yapı malzemelerini kullanım koşullarına göre seçer.","Selects construction materials for their intended conditions."],["Geoteknik verileri temel tasarım kararlarında kullanır.","Uses geotechnical data in basic design decisions."],["Altyapı çözümlerini güvenlik ve dayanıklılık açısından değerlendirir.","Evaluates infrastructure solutions for safety and resilience."],["Teknik çizim ve hesapları açık biçimde belgeler.","Documents technical drawings and calculations clearly."],["Çevresel ve toplumsal etkileri tasarım sürecinde gözetir.","Considers environmental and social effects in design."]],
 KIM: [["Kimyasal yapı ve tepkimeleri temel modellerle açıklar.","Explains chemical structures and reactions with foundational models."],["Laboratuvar ölçümlerini uygun yöntemlerle gerçekleştirir.","Performs laboratory measurements using appropriate methods."],["Analitik sonuçları belirsizlikleriyle yorumlar.","Interprets analytical results with their uncertainty."],["Kimyasal maddelerle güvenli çalışma ilkelerini uygular.","Applies safe handling practices for chemical substances."],["Deney sonuçlarını bilimsel rapor biçiminde sunar.","Presents experimental findings in a scientific report."],["Kimyasal süreçlerin çevresel etkilerini değerlendirir.","Assesses environmental impacts of chemical processes."]],
 EKO: [["Ekonomik kararları fırsat maliyeti ve teşviklerle açıklar.","Explains economic decisions through opportunity cost and incentives."],["Piyasa verilerini grafik ve temel ölçülerle inceler.","Examines market data with charts and basic measures."],["Ekonomik modellerin varsayımlarını değerlendirir.","Evaluates assumptions in economic models."],["Politika seçeneklerinin olası etkilerini karşılaştırır.","Compares potential effects of policy options."],["Nicel bulguları açık ve tutarlı biçimde raporlar.","Reports quantitative findings clearly and consistently."],["Ekonomik analizde etik ve toplumsal etkileri gözetir.","Considers ethical and social impacts in economic analysis."]],
 DEN: [["Denizel canlı gruplarını temel özelliklerine göre tanımlar.","Identifies marine organism groups by their key characteristics."],["Deniz ekosistemlerindeki ilişkileri açıklar.","Explains relationships in marine ecosystems."],["Biyoçeşitlilik verilerini temel yöntemlerle değerlendirir.","Evaluates biodiversity data using basic methods."],["Arazi ve laboratuvar örneklerini etik biçimde işler.","Handles field and laboratory samples ethically."],["İnsan faaliyetlerinin deniz yaşamına etkilerini analiz eder.","Analyses effects of human activity on marine life."],["Koruma önerilerini kanıtlarla gerekçelendirir.","Justifies conservation proposals with evidence."]]
};
export default programOutcomes;
