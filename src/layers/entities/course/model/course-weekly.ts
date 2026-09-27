// Sample weekly topics for the prototype.
const topics: Record<string, [string[],string[]]> = {
 "Programlamaya Giriş":[["Algoritmalar","Değişkenler ve veri türleri","Koşullar ve döngüler","Fonksiyonlar"],["Algorithms","Variables and data types","Conditions and loops","Functions"]],
 "Veri Yapıları":[["Listeler","Yığın ve kuyruk","Ağaçlar","Graflar"],["Lists","Stacks and queues","Trees","Graphs"]],
 "İşletim Sistemleri":[["Süreçler","İş parçacıkları","Bellek yönetimi","Dosya sistemleri"],["Processes","Threads","Memory management","File systems"]],
 "Bilgisayar Ağları":[["Ağ katmanları","Adresleme","Yönlendirme","İletişim protokolleri"],["Network layers","Addressing","Routing","Communication protocols"]],
 "Yazılım Mühendisliğine Giriş":[["Yaşam döngüsü","Gereksinimler","Tasarım","Kalite ve bakım"],["Lifecycle","Requirements","Design","Quality and maintenance"]],
 "Nesne Yönelimli Programlama":[["Sınıflar ve nesneler","Kapsülleme","Kalıtım","Çok biçimlilik"],["Classes and objects","Encapsulation","Inheritance","Polymorphism"]],
 "Yazılım Mimarisi":[["Kalite nitelikleri","Mimari desenler","Bileşenler","Mimari değerlendirme"],["Quality attributes","Architectural patterns","Components","Architecture evaluation"]],
 "Yazılım Testi":[["Test tasarımı","Birim testleri","Entegrasyon testleri","Test otomasyonu"],["Test design","Unit testing","Integration testing","Test automation"]],
 "Devre Analizi":[["Devre yasaları","Düğüm analizi","Çevre analizi","Alternatif akım"],["Circuit laws","Nodal analysis","Mesh analysis","Alternating current"]],
 "Elektronik":[["Diyotlar","Transistörler","Yükselteçler","İşlemsel yükselteçler"],["Diodes","Transistors","Amplifiers","Operational amplifiers"]],
 "Sinyaller ve Sistemler":[["Sinyal türleri","Sistem özellikleri","Konvolüsyon","Fourier analizi"],["Signal types","System properties","Convolution","Fourier analysis"]],
 "Kontrol Sistemleri":[["Sistem modelleme","Geri besleme","Kararlılık","Kontrolör tasarımı"],["System modelling","Feedback","Stability","Controller design"]],
 "Temel Tasarım":[["Biçim","Oran ve ölçek","Ritim ve denge","Kompozisyon"],["Form","Proportion and scale","Rhythm and balance","Composition"]],
 "Mimari Tasarım":[["Yer analizi","Kullanıcı ihtiyaçları","Mekânsal kurgu","Tasarım geliştirme"],["Site analysis","User needs","Spatial organisation","Design development"]],
 "Yapı Bilgisi":[["Yapı bileşenleri","Malzemeler","Yapım yöntemleri","Yapı detayları"],["Building components","Materials","Construction methods","Building details"]],
 "Mimarlık Tarihi":[["Antik mimarlık","Orta Çağ mimarlığı","Rönesans","Modern mimarlık"],["Ancient architecture","Medieval architecture","Renaissance","Modern architecture"]],
 "İç Mekân Tasarımı":[["İhtiyaç analizi","Mekân organizasyonu","Ergonomi","Malzeme kararları"],["Needs analysis","Spatial organisation","Ergonomics","Material decisions"]],
 "Mobilya Tasarımı":[["İşlev analizi","Ergonomi","Malzeme ve birleşimler","Prototipleme"],["Function analysis","Ergonomics","Materials and joints","Prototyping"]],
 "Aydınlatma Tasarımı":[["Işık özellikleri","Doğal aydınlatma","Yapay aydınlatma","Görsel konfor"],["Light properties","Daylighting","Artificial lighting","Visual comfort"]],
 "Analiz":[["Limit","Süreklilik","Türev","İntegral"],["Limits","Continuity","Derivatives","Integrals"]],
 "Lineer Cebir":[["Denklem sistemleri","Matrisler","Vektör uzayları","Doğrusal dönüşümler"],["Linear systems","Matrices","Vector spaces","Linear transformations"]],
 "Diferansiyel Denklemler":[["Birinci mertebe denklemler","Yüksek mertebe denklemler","Denklem sistemleri","Laplace dönüşümü"],["First-order equations","Higher-order equations","Systems of equations","Laplace transform"]],
 "Soyut Cebir":[["Gruplar","Alt gruplar","Halkalar","Cisimler"],["Groups","Subgroups","Rings","Fields"]],
 "Mekanik":[["Kinematik","Newton yasaları","Enerji","Momentum"],["Kinematics","Newton's laws","Energy","Momentum"]],
 "Elektrik ve Manyetizma":[["Elektrik alan","Potansiyel","Manyetik alan","İndüksiyon"],["Electric fields","Potential","Magnetic fields","Induction"]],
 "Optik":[["Geometrik optik","Görüntü oluşumu","Girişim","Kırınım"],["Geometrical optics","Image formation","Interference","Diffraction"]],
 "Kuantum Fiziği":[["Kuantum kavramları","Dalga fonksiyonu","Schrödinger denklemi","Atom modelleri"],["Quantum concepts","Wave functions","Schrödinger equation","Atomic models"]],
 "Statik":[["Kuvvet sistemleri","Momentler","Denge","Taşıyıcı sistemler"],["Force systems","Moments","Equilibrium","Structures"]],
 "Dinamik":[["Parçacık kinematiği","Kuvvet ve ivme","İş ve enerji","İtme ve momentum"],["Particle kinematics","Force and acceleration","Work and energy","Impulse and momentum"]],
 "Termodinamik":[["Sistem özellikleri","Birinci yasa","İkinci yasa","Çevrimler"],["System properties","First law","Second law","Cycles"]],
 "Makine Elemanları":[["Yük ve gerilme","Dayanım","Bağlantı elemanları","Güç iletimi"],["Loads and stress","Strength","Fasteners","Power transmission"]],
 "Olasılık":[["Olaylar","Koşullu olasılık","Rassal değişkenler","Dağılımlar"],["Events","Conditional probability","Random variables","Distributions"]],
 "İstatistiksel Çıkarım":[["Örnekleme","Nokta tahmini","Güven aralıkları","Hipotez testleri"],["Sampling","Point estimation","Confidence intervals","Hypothesis testing"]],
 "Regresyon Analizi":[["Basit regresyon","Çoklu regresyon","Model varsayımları","Model seçimi"],["Simple regression","Multiple regression","Model assumptions","Model selection"]],
 "Zaman Serileri":[["Eğilim","Mevsimsellik","Durağanlık","Tahmin modelleri"],["Trends","Seasonality","Stationarity","Forecasting models"]],
 "İleri Algoritmalar":[["Karmaşıklık","Böl ve yönet","Dinamik programlama","Graf algoritmaları"],["Complexity","Divide and conquer","Dynamic programming","Graph algorithms"]],
 "Makine Öğrenmesi":[["Veri hazırlama","Denetimli öğrenme","Denetimsiz öğrenme","Model değerlendirme"],["Data preparation","Supervised learning","Unsupervised learning","Model evaluation"]],
 "Araştırma Yöntemleri":[["Araştırma sorusu","Literatür taraması","Yöntem tasarımı","Bulguların raporlanması"],["Research questions","Literature review","Method design","Reporting findings"]],
 "Bilimsel Hesaplama":[["Sayısal hata","Denklem çözümü","Yaklaştırma","Sayısal integrasyon"],["Numerical error","Equation solving","Approximation","Numerical integration"]],
 "Akademik İletişim":[["Akademik okuma","Kaynak gösterme","Akademik yazma","Sunum"],["Academic reading","Citation","Academic writing","Presentations"]],
 "Alan Projesi":[["Problem tanımı","Proje planı","Çözüm geliştirme","Doğrulama"],["Problem definition","Project planning","Solution development","Validation"]],
 "Seçmeli Ders":[["Alana giriş","Temel yaklaşımlar","Örnek incelemesi","Uygulama"],["Field introduction","Core approaches","Case study","Application"]]
};
export function getWeeklyContent(title: string, en: boolean) {
 const subjects=topics[title]?.[en?1:0] || [title,title,title,title];
 const t=(tr:string,english:string)=>en?english:tr;
 const rows=[{topic:t("Derse giriş ve kapsam","Introduction and scope"),content:t(title+" dersinin temel kavramları, hedefleri ve çalışma yöntemleri ele alınır.","Core concepts, goals and study methods of the course are introduced."),activity:t("Tanışma ve başlangıç tartışması","Introductions and opening discussion")}];
 subjects.forEach(subject=>{
 rows.push({topic:subject,content:t(subject+" konusunun temel kavramları ve dayandığı ilkeler örnekler üzerinden açıklanır.","Core concepts and principles of "+subject.toLowerCase()+" are explained through examples."),activity:t("Konu anlatımı ve tartışma","Lecture and discussion")});
 rows.push({topic:subject+t(" — Uygulama"," — Application"),content:t(subject+" ile ilgili örnek problemler veya durumlar incelenir; farklı çözüm yaklaşımları karşılaştırılır.","Problems or cases related to "+subject.toLowerCase()+" are examined and solution approaches compared."),activity:t("Rehberli uygulama","Guided practice")});
 rows.push({topic:subject+t(" — Değerlendirme"," — Review"),content:t(subject+" kapsamında hazırlanan çalışmaların sonuçları yorumlanır ve eksik kalan noktalar tartışılır.","Work on "+subject.toLowerCase()+" is reviewed, with discussion of results and remaining questions."),activity:t("Çalışma paylaşımı ve geri bildirim","Sharing work and feedback")});
 });
 rows.push({topic:t("Genel değerlendirme ve bütünleştirme","Overall review and integration"),content:t("Dönem boyunca ele alınan konular ilişkilendirilir; öğrenme kazanımları örnek çalışmalar üzerinden değerlendirilir.","Topics covered throughout the semester are connected and learning outcomes reviewed through examples."),activity:t("Genel tekrar ve soru-cevap","Review and questions")});
 rows.splice(7,0,{
  topic:t("Ara sınav haftası","Midterm exam week"),
  content:t("İlk yedi haftada ele alınan konular ara sınav kapsamında değerlendirilir.","Topics covered in the first seven weeks are assessed in the midterm exam."),
  activity:t("Ara sınav","Midterm exam")
 });
 rows.push({
  topic:t("Final sınavı haftası","Final exam week"),
  content:t("Dönem boyunca ele alınan konular final sınavı kapsamında değerlendirilir.","Topics covered throughout the semester are assessed in the final exam."),
  activity:t("Final sınavı","Final exam")
 });
 return rows;
}
