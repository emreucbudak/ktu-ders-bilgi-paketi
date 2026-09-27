<div align="center">
  <img src="./public/brand/ktu.svg" alt="Karadeniz Teknik Üniversitesi" width="110" />
  <h1>KTÜ Ders Bilgi Paketi</h1>
  <p><strong>Programları keşfet. Müfredatları incele. Derslerin ayrıntılarına ulaş.</strong></p>
  <p>Karadeniz Teknik Üniversitesi akademik programları için tasarlanmış iki dilli katalog prototipi.</p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js 16" />
    <img src="https://img.shields.io/badge/React-19-149eca?logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Architecture-Feature--Sliced-6c5ce7" alt="Feature-Sliced Design" />
  </p>
</div>

---

> **İşyeri eğitimi projesi** · Bu çalışma, işyeri eğitimi kapsamında verilen KTÜ Ders Bilgi Paketi tasarım projesinin prototipidir. Program ve ders içeriklerinin bir bölümü örnek amaçlıdır; site resmî veya güncel akademik bilgi kaynağı değildir.

## Proje hakkında

KTÜ’nün akademik programlarını ve ders bilgi paketlerini anlaşılır bir akışta sunmak için hazırlandı. Katalogdan bir program seçebilir, programın tanıtım bilgilerini inceleyebilir, dönemlik ders planına geçebilir ve dersin amaç, kazanım, iş yükü ve değerlendirme ayrıntılarını görüntüleyebilirsin.

Arayüz **Türkçe ve İngilizce** kullanılabilir. Program arama, filtreleme ve sıralama araçları katalogda gezinmeyi kolaylaştırır.

## Öne çıkanlar

| Program kataloğu | Program profili | Ders bilgi paketi |
| --- | --- | --- |
| Program adına veya koduna göre ara | Amaç, çıktılar ve kariyer bilgileri | Ders amacı ve öğrenme kazanımları |
| Fakülte, derece ve dile göre filtrele | Sınıf ve dönem seçerek müfredata geç | Ön koşullar ve haftalık ders içeriği |
| Sonuçları ada göre sırala | Dersleri ve dönem toplamlarını görüntüle | Kaynaklar, değerlendirme ve AKTS iş yükü |

## Ekran akışı

```text
Program kataloğu  →  Program profili  →  Dönemlik ders planı  →  Ders bilgi paketi
        /                  /programlar/[id]     /ders-plani             /dersler/[code]
```

| Rota | Ekran |
| --- | --- |
| `/` | Arama, filtreleme ve sıralama içeren program kataloğu |
| `/programlar/[id]` | Program tanıtımı ve müfredat seçimi |
| `/programlar/[id]/ders-plani` | Seçilen sınıf ve dönemin ders listesi |
| `/dersler/[code]` | Dersin kapsamlı bilgi paketi |

Ders planı ekranı `academicYear`, `year` ve `term` sorgu parametrelerini kullanır. Örnek: `/programlar/bilgisayar-muhendisligi/ders-plani?academicYear=2025-2026&year=1&term=fall`.

## Yerel ortamda çalıştırma

**Gereksinimler:** Node.js ve npm.

```bash
git clone https://github.com/emreucbudak/ktu-ders-bilgi-paketi.git
cd ktu-ders-bilgi-paketi
npm install
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini aç.

| Komut | Ne yapar? |
| --- | --- |
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run lint` | ESLint denetimini çalıştırır |
| `npm run build` | Üretim derlemesini oluşturur |
| `npm start` | Üretim sunucusunu başlatır |

## Mimari

Uygulama, Vettingo-Frontend’deki katmanlı **Feature-Sliced Design (FSD)** düzeni izlenerek yapılandırıldı. Next.js App Router dosyaları URL’leri ve sunucu tarafı parametreleri yönetir; sayfa arayüzleri `src/layers/pages` altında yaşar.

```text
src/
├── app/                              # Route tanımları ve root layout
└── layers/
    ├── pages/                        # catalog, program-detail, curriculum, course-detail
    ├── widgets/                      # Müfredat seçici, çıktı matrisi, haftalık içerik
    ├── entities/
    │   ├── program/                  # Program modeli ve tanıtım verileri
    │   └── course/                   # Ders/müfredat modeli ve ders adı
    └── shared/
        ├── providers/                # Dil sağlayıcısı
        └── ui/                       # Ortak başlıklar ve sayfa durumları
```

```text
pages  →  widgets  →  entities
   └──────────────→  shared
```

Her page slice’ı `index.ts` ile public API sunar. Böylece Next.js route dosyaları ekranı slice’ın iç dosyasına bağlanmadan çağırabilir.

## Teknoloji yığını

- [Next.js 16](https://nextjs.org/) · App Router ve sunucu tarafı sayfalar
- [React 19](https://react.dev/) · Arayüz bileşenleri
- [TypeScript](https://www.typescriptlang.org/) · Tip güvenli uygulama kodu
- [Tailwind CSS 4](https://tailwindcss.com/) · Stil altyapısı
- Feature-Sliced Design · Katmanlı kaynak düzeni

## Proje kapsamı

- Veriler prototip içinde tanımlıdır; backend veya öğrenci bilgi sistemi bağlantısı yoktur.
- Örnek müfredat, ders içerikleri ve bazı İngilizce çeviriler temsili olabilir.
- Dil tercihi `ktu_language` çerezi ile saklanır.
- Kullanılan yazı tipinin lisans bilgisi [`public/fonts/OFL.txt`](./public/fonts/OFL.txt) dosyasındadır.

---

<div align="center">
  <sub>İşyeri eğitimi kapsamında hazırlanmış bir KTÜ Ders Bilgi Paketi tasarım prototipi.</sub>
</div>
