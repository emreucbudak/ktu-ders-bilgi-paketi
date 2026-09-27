# KTÜ Ders Bilgi Paketi

Karadeniz Teknik Üniversitesi program ve ders bilgilerini keşfetmeye yönelik bu çalışma, **işyeri eğitimi kapsamında verilen proje** için hazırlanmış bir tasarım prototipidir. Akademik programları arama ve filtreleme, program tanıtımlarını inceleme, örnek müfredatları görüntüleme ve ders bilgi paketlerine ulaşma akışlarını sunar.

> Bu depo bir tasarım prototipidir. İçindeki bazı program ve ders içerikleri örnek amaçlıdır; resmî KTÜ bilgi paketi veya güncel akademik kayıt olarak değerlendirilmemelidir.

Arayüz Türkçe ve İngilizce kullanılabilir. Programlar fakülte, öğrenim düzeyi ve öğretim diline göre filtrelenebilir; program sayfalarından amaç, çıktılar, kariyer bilgileri ve dönemlik ders planlarına geçilebilir. Ders detaylarında ön koşullar, haftalık içerik, kaynaklar, ölçme değerlendirme, iş yükü ve program çıktılarıyla ilişki gösterilir.

## Teknolojiler

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Feature-Sliced Design (FSD)

## Başlangıç

Gereksinimler: Node.js ve npm.

```bash
npm install
npm run dev
```

Uygulama geliştirme modunda `http://localhost:3000` adresinde açılır.

```bash
npm run lint
npm run build
npm start
```

## Temel sayfalar

| Yol | İçerik |
| --- | --- |
| `/` | Program kataloğu, arama, filtreleme ve sıralama |
| `/programlar/[id]` | Program bilgileri ve müfredat seçimi |
| `/programlar/[id]/ders-plani` | Seçilen program, sınıf ve dönem için örnek ders planı |
| `/dersler/[code]` | Ders bilgi paketi ve ilişkili kazanımlar |

Ders planı sayfası `academicYear`, `year` ve `term` sorgu parametrelerini kullanır. Örnek: `/programlar/bilgisayar-muhendisligi/ders-plani?academicYear=2025-2026&year=1&term=fall`.

## Mimari

Vettingo-Frontend’de kullanılan katmanlı FSD yaklaşımına göre uygulama kodu `src/layers` altında düzenlenmiştir. Next.js `src/app` dizini route eşleştirme, metadata ve sunucu tarafı parametre doğrulama görevlerini yürütür; ekran arayüzleri page slice’larında bulunur.

```text
src/
├── app/                         # Next.js route dosyaları ve root layout
└── layers/
    ├── pages/                   # catalog, program-detail, curriculum, course-detail
    ├── widgets/                 # curriculum-selector, outcome-matrix, weekly-content
    ├── entities/
    │   ├── course/              # Ders ve müfredat modeli, ders adı arayüzü
    │   └── program/             # Program modeli ve tanıtım verileri
    └── shared/
        ├── providers/           # Dil sağlayıcısı
        └── ui/                  # Ortak başlıklar ve yükleme/hata durumları
```

Bağımlılıklar üst katmandan alt katmana doğru kurulur: page’ler widget ve entity’leri birleştirir; widget’lar entity ve shared parçalarını kullanır. Her page slice’ı `index.ts` üzerinden dışa açılır.

## Proje notları

- Katalog ve ders detayları prototip verileriyle çalışır; bir backend veya öğrenci bilgi sistemi bağlantısı içermez.
- Bazı dersler ve İngilizce karşılıkları temsilî olabilir.
- Dil tercihi `ktu_language` çerezi üzerinden korunur.
- Görsel varlıklar `public/` altında tutulur.

## İşyeri eğitimi projesi

Bu çalışma, KTÜ Ders Bilgi Paketi deneyimini incelemek ve program, müfredat ve ders bilgilerini anlaşılır bir arayüzde sunmak amacıyla işyeri eğitimi kapsamında verilen projenin prototipidir. Arayüz ve örnek içerikler proje sunumu ve kullanıcı akışlarını değerlendirme amacı taşır.
