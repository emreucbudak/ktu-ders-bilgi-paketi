type Resource = { title: string; author: string; url: string };
const book = (title: string, author: string, url: string): Resource => ({title, author, url});
// Suggested prototype resources, not verified KTÜ syllabus adoptions.
const books = {
 python: book("Think Python", "Allen B. Downey · Green Tea Press", "https://greenteapress.com/wp/think-python-3rd-edition/"),
 data: book("Open Data Structures", "Pat Morin", "https://opendatastructures.org/"),
 os: book("Operating Systems: Three Easy Pieces", "Remzi H. Arpaci-Dusseau, Andrea C. Arpaci-Dusseau", "https://pages.cs.wisc.edu/~remzi/OSTEP/"),
 network: book("Computer Networks: A Systems Approach", "Larry Peterson, Bruce Davie", "https://book.systemsapproach.org/"),
 software: book("Software Engineering", "Ian Sommerville", "https://software-engineering-book.com/"),
 testing: book("The Fuzzing Book", "Andreas Zeller ve diğerleri / et al.", "https://www.fuzzingbook.org/"),
 circuits: book("Lessons in Electric Circuits", "Tony R. Kuphaldt · All About Circuits", "https://www.allaboutcircuits.com/textbook/"),
 signal: book("The Scientist and Engineer’s Guide to Digital Signal Processing", "Steven W. Smith", "https://www.dspguide.com/"),
 architecture: book("Architecture: Form, Space, and Order", "Francis D. K. Ching · Wiley", "https://www.wiley-vch.de/en/areas-interest/engineering/architecture-form-space-and-order-978-1-119-85337-4"),
 interior: book("Interior Design Illustrated", "Francis D. K. Ching, Corky Binggeli · Wiley", "https://bcs.wiley.com/he-bcs/Books?action=index&bcsId=11055&itemId=111937720X"),
 construction: book("Building Construction Illustrated", "Francis D. K. Ching · Wiley", "https://www.wiley.com/en-in/grow/professional-development/books-resources/architecture-design/ching-showcase/"),
 history: book("A Global History of Architecture", "Francis D. K. Ching, Mark M. Jarzombek, Vikramaditya Prakash · Wiley", "https://www.wiley.com/en-in/grow/professional-development/books-resources/architecture-design/ching-showcase/"),
 calculus: book("Calculus Volume 1", "OpenStax", "https://openstax.org/details/books/calculus-volume-1"),
 linear: book("Linear Algebra Done Right", "Sheldon Axler", "https://linear.axler.net/"),
 differential: book("Notes on Diffy Qs: Differential Equations for Engineers", "Jiří Lebl", "https://www.jirka.org/diffyqs/"),
 algebra: book("Abstract Algebra: Theory and Applications", "Thomas W. Judson", "https://abstract.ups.edu/"),
 physics1: book("University Physics Volume 1", "OpenStax", "https://openstax.org/details/books/university-physics-volume-1"),
 physics2: book("University Physics Volume 2", "OpenStax", "https://openstax.org/details/books/university-physics-volume-2"),
 physics3: book("University Physics Volume 3", "OpenStax", "https://openstax.org/details/books/university-physics-volume-3"),
 statistics: book("Introductory Statistics 2e", "OpenStax", "https://openstax.org/details/books/introductory-statistics-2e"),
 learning: book("An Introduction to Statistical Learning", "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani", "https://www.statlearning.com/"),
 forecast: book("Forecasting: Principles and Practice", "Rob J. Hyndman, George Athanasopoulos", "https://otexts.com/fpp3/"),
 writing: book("Writing Guide with Handbook", "OpenStax", "https://openstax.org/details/books/writing-guide"),
 machine: book("Shigley’s Mechanical Engineering Design", "Richard G. Budynas, J. Keith Nisbett · McGraw Hill", "https://www.mheducation.com/highered/product/shigley-s-mechanical-engineering-design-budynas-nisbett/M9780073398211.html"),
 control: book("Feedback Systems", "Karl J. Åström, Richard M. Murray", "https://fbsbook.org/")
};
type Key = keyof typeof books;
const courseBooks: Record<string, [Key, Key]> = {
 "Programlamaya Giriş":["python","data"],"Veri Yapıları":["data","python"],"İşletim Sistemleri":["os","data"],"Bilgisayar Ağları":["network","os"],
 "Yazılım Mühendisliğine Giriş":["software","python"],"Nesne Yönelimli Programlama":["python","software"],"Yazılım Mimarisi":["software","os"],"Yazılım Testi":["testing","software"],
 "Devre Analizi":["circuits","physics2"],"Elektronik":["circuits","physics2"],"Sinyaller ve Sistemler":["signal","differential"],"Kontrol Sistemleri":["control","differential"],
 "Temel Tasarım":["architecture","interior"],"Mimari Tasarım":["architecture","construction"],"Yapı Bilgisi":["construction","architecture"],"Mimarlık Tarihi":["history","architecture"],
 "İç Mekân Tasarımı":["interior","architecture"],"Mobilya Tasarımı":["interior","construction"],"Aydınlatma Tasarımı":["interior","physics3"],
 "Analiz":["calculus","differential"],"Lineer Cebir":["linear","calculus"],"Diferansiyel Denklemler":["differential","linear"],"Soyut Cebir":["algebra","linear"],
 "Mekanik":["physics1","calculus"],"Elektrik ve Manyetizma":["physics2","circuits"],"Optik":["physics3","physics2"],"Kuantum Fiziği":["physics3","linear"],
 "Statik":["physics1","machine"],"Dinamik":["physics1","differential"],"Termodinamik":["physics2","calculus"],"Makine Elemanları":["machine","physics1"],
 "Olasılık":["statistics","calculus"],"İstatistiksel Çıkarım":["statistics","learning"],"Regresyon Analizi":["learning","statistics"],"Zaman Serileri":["forecast","learning"],
 "İleri Algoritmalar":["data","linear"],"Makine Öğrenmesi":["learning","linear"],"Araştırma Yöntemleri":["writing","statistics"],"Bilimsel Hesaplama":["differential","python"],
 "Akademik İletişim":["writing","statistics"]
};
const fieldBooks: Record<string, Key> = {BIL:"software",YAZ:"software",ELE:"circuits",MIM:"architecture",ICM:"interior",MAT:"linear",FIZ:"physics1",MAK:"machine",IST:"statistics","BIL-YL":"learning"};
export function getCourseResources(title: string, programId: string) {
 const keys = courseBooks[title] || [fieldBooks[programId] || "writing", "writing"];
 const supplement = books[keys[1] as Key];
 return {
   textbook: books[keys[0] as Key],
   additional: [
     supplement,
     book("MIT OpenCourseWare", "Massachusetts Institute of Technology", "https://ocw.mit.edu/search/?q=" + encodeURIComponent(title === "Alan Projesi" || title === "Seçmeli Ders" ? books[keys[0] as Key].title : books[keys[0] as Key].title.split(":")[0]))
   ]
 };
}
