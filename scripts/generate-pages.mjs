import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SITE = "https://www.ankarakapindaservis.com";
const PHONE_DISPLAY = "0540 008 12 28";
const PHONE_TEL = "05400081228";
const YEAR = "2026";
const LASTMOD = "2026-09-10";

const DEVICES = [
  {
    slug: "buzdolabi-servisi",
    name: "Buzdolabı",
    photo: "buzdolabi.jpg",
    title: "Ankara Buzdolabı Servisi | Aynı Gün Yerinde Tamir",
    h1: "Ankara Buzdolabı Servisi",
    lead: "Soğutmayan, buzlanan, ses yapan veya su kaçıran buzdolabı ve derin dondurucular için aynı gün yerinde servis.",
    intro: [
      "Ankara Kapında Servis, buzdolabı ve derin dondurucu arızalarında cihazı servise taşıtmadan yerinde tespit ve onarım yapar. Soğutmama, aşırı buzlanma, kompresör sesi, koku, kapı lastiği ve termostat sorunlarında mobil ekip adresinize gelir.",
      "İşlem onayınız alınmadan parça değişimi yapılmaz. Tamamlanan işçilik ve değişen parçalar 1 yıl belgeli garanti altındadır.",
    ],
    faults: [
      "Soğutmama veya yetersiz soğutma",
      "Donma gözünde aşırı buz, su damlatma",
      "Yüksek ses, tıkırtı veya kompresörün sık açılıp kapanması",
      "Kapı lastiği, termostat ve kart arızaları",
    ],
    brands: ["Arçelik", "Beko", "Altus", "Bosch", "Siemens", "Profilo", "LG", "Samsung", "Miele", "Vestel", "Electrolux", "Gaggenau", "Hoover", "Franke", "Grundig", "AEG", "Hitachi", "Zanussi", "Liebherr", "Blomberg", "General Electric", "Ariston", "Indesit", "Hotpoint", "White-Westinghouse"],
  },
  {
    slug: "camasir-makinesi-servisi",
    name: "Çamaşır Makinesi",
    photo: "camasir.jpg",
    title: "Ankara Çamaşır Makinesi Servisi | Yerinde Tamir",
    h1: "Ankara Çamaşır Makinesi Servisi",
    lead: "Su almayan, sıkmayan, titreyen veya hata kodu veren çamaşır makineleri için Ankara’nın 9 ilçesinde yerinde teknik servis.",
    intro: [
      "Çamaşır makinesi arızası ev düzenini durdurur. Ankara Kapında Servis; su almama, sıkmama, program bitmeme, kapak kilidi, tahliye pompası ve rulman/titreşim sorunlarında aynı gün yerinde müdahale eder.",
      "Önce arıza tespit edilir, net fiyat onayınıza sunulur. Onarım ve orijinal parça değişimi 1 yıl belgeli garantilidir.",
    ],
    faults: [
      "Su almama, su tahliye etmeme",
      "Sıkmama, aşırı titreşim, yerinden oynaması",
      "Kapak açılmama ve kilit arızası",
      "E hata kodları, programın yarıda kalması",
    ],
    brands: ["Arçelik", "Beko", "Altus", "Bosch", "Siemens", "Profilo", "LG", "Samsung", "Miele", "Vestel", "Electrolux", "Gaggenau", "Hoover", "Franke", "Grundig", "AEG", "Blomberg", "Ariston", "Indesit", "Hotpoint"],
  },
  {
    slug: "bulasik-makinesi-servisi",
    name: "Bulaşık Makinesi",
    photo: "bulasik.jpg",
    title: "Ankara Bulaşık Makinesi Servisi | Yerinde Onarım",
    h1: "Ankara Bulaşık Makinesi Servisi",
    lead: "Yıkamayan, su tahliye etmeyen, koku yapan veya ısınmayan bulaşık makineleri için yerinde Ankara servisi.",
    intro: [
      "Bulaşık makinesinde yıkama kalitesi, tahliye, ısıtıcı, tuz/parlatıcı sistemi ve pompa arızaları sık görülür. Ekiplerimiz cihaz başında tespit yapar, gerekirse yerinde onarır.",
      "Fiyat telefonda verilmez; yerinde netleşir. Tüm işlemler 1 yıl belgeli garanti kapsamındadır.",
    ],
    faults: [
      "Bulaşıkların kirli çıkması, yıkamama",
      "İçeride su birikmesi, tahliye sorunu",
      "Koku, kireç ve tuz sistemi arızası",
      "Isınmama, kapak ve kilit problemleri",
    ],
    brands: ["Arçelik", "Beko", "Altus", "Bosch", "Siemens", "Profilo", "LG", "Samsung", "Miele", "Vestel", "Electrolux", "Gaggenau", "Hoover", "Franke", "Grundig", "AEG", "Blomberg", "Ariston", "Indesit", "Hotpoint"],
  },
  {
    slug: "kurutma-makinesi-servisi",
    name: "Kurutma Makinesi",
    photo: "kurutma.jpg",
    title: "Ankara Kurutma Makinesi Servisi | Bakım ve Tamir",
    h1: "Ankara Kurutma Makinesi Servisi",
    lead: "Isınmayan, uzun süren veya hata veren kurutma makineleri için yerinde tamir ve bakım.",
    intro: [
      "Kurutma makinesinde ısıtmama, programın bitmemesi, tüy filtresi ve hava kanalı tıkanıklığı, nem sensörü ve ısıtıcı arızaları öne çıkar. Ankara Kapında Servis, cihazı yerinde kontrol edip kalıcı çözüm üretir.",
      "Onayınız olmadan işlem başlamaz. İşçilik ve değişen parça 1 yıl belgeli garantilidir.",
    ],
    faults: [
      "Isınmama veya yetersiz kurutma",
      "Programın aşırı uzun sürmesi",
      "Tıkanıklık, aşırı ısınma uyarısı",
      "Kapak, kayış ve kart arızaları",
    ],
    brands: ["Arçelik", "Beko", "Altus", "Bosch", "Siemens", "Profilo", "LG", "Samsung", "Miele", "Vestel", "Electrolux", "Gaggenau", "Hoover", "Franke", "Grundig", "AEG", "Blomberg", "Ariston", "Indesit", "Hotpoint"],
  },
  {
    slug: "klima-servisi",
    name: "Klima",
    photo: "klima.jpg",
    title: "Ankara Klima Servisi | Bakım, Gaz ve Arıza",
    h1: "Ankara Klima Servisi",
    lead: "Soğutmayan veya ısıtmayan klimalar için gaz, bakım, arıza ve yerinde onarım. Ankara’nın 9 ilçesinde gezici ekip.",
    intro: [
      "Klima arızasında en sık görülenler soğutmama, gaz kaçağı, dış ünite sesi, su damlatma ve kart/elektronik sorunlarıdır. Yaz ve kış sezonunda aynı gün yerinde klima servisi veriyoruz.",
      "Bakım ve onarım sonrası yapılan iş 1 yıl belgeli garanti altındadır. Telefonda fiyat verilmez; tespit yerinde yapılır.",
    ],
    faults: [
      "Soğutmama / ısıtmama, zayıf üfleme",
      "Gaz kontrolü ve kaçak tespiti",
      "Su damlatma, kötü koku, filtre tıkanıklığı",
      "Dış ünite arızası ve elektronik kart sorunları",
    ],
    brands: ["Arçelik", "Beko", "Altus", "Bosch", "Siemens", "Profilo", "LG", "Samsung", "Midea", "Vestel", "Electrolux", "Hoover", "Franke", "Grundig", "AEG", "Ariston", "Indesit", "Hotpoint", "Hitachi", "Zanussi", "Blomberg", "General Electric", "White Westinghouse", "Mitsubishi", "Daikin", "Toshiba", "Baymak", "Alarko Carrier", "Airfel", "Viessmann", "ECA", "Vaillant", "Demirdöküm"],
  },
  {
    slug: "televizyon-servisi",
    name: "Televizyon",
    photo: "televizyon.jpg",
    title: "Ankara Televizyon Servisi | Yerinde TV Tamiri",
    h1: "Ankara Televizyon Servisi",
    lead: "Açılmayan, görüntüsü gitmiş veya sesi kesilmiş televizyonlar için yerinde teknik servis.",
    intro: [
      "Televizyonda açılmama, arka ışık, anakart, hoparlör ve giriş (HDMI) sorunları yerinde teşhis edilir. Taşınması riskli paneller için gezici servis avantajdır.",
      "Parça gerekiyorsa onayınız alınır. Tamamlanan onarım 1 yıl belgeli garantilidir.",
    ],
    faults: [
      "Hiç açılmama, kırmızı ışıkta kalma",
      "Görüntü yok, ses var veya tam tersi",
      "Çizgi, leke, arka aydınlatma sorunu",
      "Kumanda, giriş ve anakart arızaları",
    ],
    brands: ["Arçelik", "Beko", "Altus", "Profilo", "Philips", "Samsung", "LG", "Sony", "TCL", "Toshiba", "Grundig", "Xiaomi", "Vestel"],
  },
  {
    slug: "ankastre-firin-servisi",
    name: "Ankastre Fırın",
    photo: "ankastre.jpg",
    title: "Ankara Ankastre Fırın Servisi | Yerinde Tamir",
    h1: "Ankara Ankastre Fırın Servisi",
    lead: "Isınmayan, fanı çalışmayan veya termostat arızalı ankastre fırınlar için yerinde servis.",
    intro: [
      "Ankastre fırında ısınmama, fan, rezistans, kapak menteşesi, cam ve elektronik saat/termostat arızalarına yerinde bakıyoruz. Mutfak tezgahına gömülü cihazlarda sök-tak bilinçli yapılır.",
      "Net fiyat yerinde tespit sonrası verilir. Tüm işlemler 1 yıl belgeli garanti altındadır.",
    ],
    faults: [
      "Isınmama, yetersiz pişirme",
      "Fan, rezistans ve termostat arızası",
      "Kapak, menteşe ve cam sorunları",
      "Dijital panel ve saat arızaları",
    ],
    brands: ["Arçelik", "Beko", "Altus", "Bosch", "Siemens", "Profilo", "Neff", "Gaggenau", "Miele", "Kumtel", "Luxell", "Franke", "Ferre", "Electrolux", "Vestel", "Samsung", "Termikel", "Silverline", "Simfer", "Alveus", "Bertazzoni", "Teka", "Blanco", "Esty", "Ukinox", "Dominox", "LG", "Grundig", "Blomberg", "AEG", "Zanussi"],
  },
];

const DISTRICTS = [
  {
    slug: "cankaya-beyaz-esya-servisi",
    name: "Çankaya",
    title: "Çankaya Beyaz Eşya ve Klima Servisi | Aynı Gün",
    h1: "Çankaya Beyaz Eşya ve Klima Servisi",
    lead: "Çankaya’da hizmet verdiğimiz semtlerin tam listesi bu sayfadadır. Aynı gün yerinde beyaz eşya ve klima servisi.",
    intro: [
      "Çankaya’da buzdolabı, çamaşır ve bulaşık makinesi, kurutma, klima, televizyon ve ankastre fırın arızalarına gezici ekiplerimizle aynı gün bakıyoruz. Kayıt telefonla açılır; ekip listedeki semtinize gelir, tespiti yerinde yapar.",
      "Bu ilçede hizmet verdiğimiz semtler aşağıda eksiksiz listelenmiştir.",
    ],
    neighborhoods: ["Alacaatlı", "Anıttepe", "Ayrancı", "Balgat", "Bahçelievler", "Bilkent", "Beytepe", "Beysukent", "Esat", "Cebeci", "Cevizlidere", "Çayyolu", "Çiğdem Mahallesi", "Ümitköy", "Çukurambar", "Emek", "GOP", "Güvenevler", "Birlik Mahallesi", "Kavaklıdere", "Kırkkonaklar", "Maltepe", "Mebusevleri", "Mustafa Kemal Mahallesi", "Oran", "Tunalı", "Seyranbağları", "Söğütözü", "Dikmen", "Yaşamkent"],
  },
  {
    slug: "kecioren-beyaz-esya-servisi",
    name: "Keçiören",
    title: "Keçiören Beyaz Eşya ve Klima Servisi | Aynı Gün",
    h1: "Keçiören Beyaz Eşya ve Klima Servisi",
    lead: "Keçiören’de hizmet verdiğimiz semtlerin tam listesi bu sayfadadır. Yerinde beyaz eşya ve klima tamiri.",
    intro: [
      "Keçiören, Ankara Kapında Servis’in aktif gezici hatlarından biridir. Buzdolabı, çamaşır makinesi veya klima arızasında kayıt telefonla alınır; ekip listedeki semtinize yönlendirilir.",
      "Bu ilçede hizmet verdiğimiz semtler aşağıda eksiksiz listelenmiştir.",
    ],
    neighborhoods: ["19 Mayıs", "23 Nisan", "Adnan Menderes", "Aktepe", "Aşağı Eğlence", "Atapark", "Ayvalı", "Bademlik", "Bağlarbaşı", "Basınevleri", "Esertepe", "Etlik", "İncirli", "Kalaba", "Kamil Ocak", "Kanuni", "Karargahtepe", "Kavacık Subayevleri", "Kuşcağız", "Mecidiye", "Ovacık", "Pınarbaşı", "Piyangotepe", "Sancaktepe", "Şehit Kubilay", "Tepebaşı", "Ufuktepe", "Uyanış", "Yakacık", "Yayla Mahallesi", "Yeşiltepe", "Yükseltepe"],
  },
  {
    slug: "yenimahalle-beyaz-esya-servisi",
    name: "Yenimahalle",
    title: "Yenimahalle Beyaz Eşya ve Klima Servisi | Batıkent, Demetevler",
    h1: "Yenimahalle Beyaz Eşya ve Klima Servisi",
    lead: "Yenimahalle’de hizmet verdiğimiz semtlerin tam listesi bu sayfadadır. Aynı gün mobil teknik servis.",
    intro: [
      "Yenimahalle’de site ve apartman yoğunluğu yüksektir; cihazı indirmeden yerinde tamir çoğu arızada daha hızlıdır. Kayıt telefonla alınır, ekip listedeki semtinize yönlendirilir.",
      "Bu ilçede hizmet verdiğimiz semtler aşağıda eksiksiz listelenmiştir.",
    ],
    neighborhoods: ["Ata Mahallesi", "Batı Sitesi", "Batıkent", "Beştepe", "Çakırlar", "Çamlıca", "Demetevler", "Ergazi", "Gazi Mahallesi", "Güventepe", "İlk Yerleşim", "İnönü", "Kent Koop", "Mehmet Akif Ersoy", "Pamuklar", "Ragıp Tüzün", "Serhat", "Susuz", "Şentepe", "Turgut Özal", "Uğur Mumcu", "Varlık", "Yahyalar", "Yakacık", "Yeşilevler", "Yuvaköy"],
  },
  {
    slug: "mamak-beyaz-esya-servisi",
    name: "Mamak",
    title: "Mamak Beyaz Eşya ve Klima Servisi | Yerinde Tamir",
    h1: "Mamak Beyaz Eşya ve Klima Servisi",
    lead: "Mamak’ta hizmet verdiğimiz semtlerin tam listesi bu sayfadadır. Yerinde beyaz eşya ve klima servisi.",
    intro: [
      "Mamak’ta aynı gün gezici servis ile buzdolabı, çamaşır makinesi, bulaşık makinesi, klima ve ankastre arızalarına bakıyoruz. Tespit adreste yapılır, fiyat onayınız sonrası işe başlanır.",
      "Bu ilçede hizmet verdiğimiz semtler aşağıda eksiksiz listelenmiştir.",
    ],
    neighborhoods: ["Abidinpaşa", "Akdere", "Bahçelerüstü", "Boğaziçi", "Cengizhan", "Demirlibahçe", "Durali Alıç", "Ege Mahallesi", "Fahri Korutürk", "General Zeki Doğan", "Gülveren", "Hürel", "Hüseyingazi", "Kartaltepe", "Misket Mahallesi", "Mutlu Mahallesi", "Saimekadın", "Tuzluçayır", "Türközü", "Üreğil", "Yeşilbayır", "Zirvekent"],
  },
  {
    slug: "altindag-beyaz-esya-servisi",
    name: "Altındağ",
    title: "Altındağ Beyaz Eşya ve Klima Servisi | Yerinde Servis",
    h1: "Altındağ Beyaz Eşya ve Klima Servisi",
    lead: "Altındağ’da hizmet verdiğimiz semtlerin tam listesi bu sayfadadır. Aynı gün yerinde teknik servis.",
    intro: [
      "Altındağ’daki konut ve işyerlerinde beyaz eşya ile klima arızalarına mobil ekiple müdahale ediyoruz. Kayıt telefonla açılır; ekip listedeki semtinize gelir, arızayı yerinde netleştirir.",
      "Bu ilçede hizmet verdiğimiz semtler aşağıda eksiksiz listelenmiştir.",
    ],
    neighborhoods: ["Ziraat mahallesi", "Yıldızevler", "Hasköy", "Güneşevler", "Aydınlıkevler", "Karapürçek", "Beşikkaya", "Başpınar"],
  },
  {
    slug: "etimesgut-beyaz-esya-servisi",
    name: "Etimesgut",
    title: "Etimesgut Beyaz Eşya ve Klima Servisi | Eryaman, Elvankent",
    h1: "Etimesgut Beyaz Eşya ve Klima Servisi",
    lead: "Etimesgut’ta hizmet verdiğimiz semtlerin tam listesi bu sayfadadır. Yerinde beyaz eşya ve klima tamiri.",
    intro: [
      "Etimesgut’ta site yaşamı yaygındır; arızalı cihazı taşımak yerine yerinde servis tercih edilir. Aynı gün müsaitlik doğrultusunda ekip listedeki semtinize yönlendirilir.",
      "Bu ilçede hizmet verdiğimiz semtler aşağıda eksiksiz listelenmiştir.",
    ],
    neighborhoods: ["Ayyıldız", "Bağlıca", "Elvankent", "Eryaman", "Göksu"],
  },
  {
    slug: "pursaklar-beyaz-esya-servisi",
    name: "Pursaklar",
    title: "Pursaklar Beyaz Eşya ve Klima Servisi | Aynı Gün",
    h1: "Pursaklar Beyaz Eşya ve Klima Servisi",
    lead: "Pursaklar’da hizmet verdiğimiz semtlerin tam listesi bu sayfadadır. Yerinde teknik servis.",
    intro: [
      "Pursaklar’da beyaz eşya ile klima arızalarına gezici servis veriyoruz. Telefonla kayıt oluşur, ekip listedeki semtinize gelir, fiyat yerinde netleşir.",
      "Bu ilçede hizmet verdiğimiz semtler aşağıda eksiksiz listelenmiştir.",
    ],
    neighborhoods: ["Merkez", "Fatih", "Ayyıldız", "Mimar Sinan", "Yunus Emre", "Tevfik İleri", "Yıldırım Beyazıt", "Saray Cumhuriyet", "Saray Fatih", "Saray Osmangazi"],
  },
  {
    slug: "sincan-beyaz-esya-servisi",
    name: "Sincan",
    title: "Sincan Beyaz Eşya ve Klima Servisi | İlçe Geneli",
    h1: "Sincan Beyaz Eşya ve Klima Servisi",
    lead: "Sincan ilçesi genelinde aynı gün yerinde beyaz eşya, klima ve ankastre servisi.",
    intro: [
      "Sincan ilçesi genelinde gezici ekiplerimizle buzdolabı, çamaşır ve bulaşık makinesi, kurutma, klima, televizyon ve ankastre fırın arızalarına bakıyoruz.",
      "Telefonda fiyat verilmez. Yerinde tespit, onayınız ve 1 yıl belgeli garanti ile ilerleriz.",
    ],
    neighborhoods: ["Sincan İlçesi Geneli"],
  },
  {
    slug: "golbasi-beyaz-esya-servisi",
    name: "Gölbaşı",
    title: "Gölbaşı ve İncek Beyaz Eşya Servisi | Klima Tamiri",
    h1: "Gölbaşı ve İncek Beyaz Eşya Servisi",
    lead: "Gölbaşı ilçesi ve İncek semtinde yerinde beyaz eşya ve klima teknik servisi.",
    intro: [
      "Gölbaşı ilçesi ve İncek semtinde cihazların yerinde tamiri için aynı gün müsaitlikle ekip çıkarırız.",
      "Klima bakımı ve gaz işlemleri ile beyaz eşya onarımları 1 yıl belgeli garanti kapsamındadır. Kayıt telefon hattımızdan alınır.",
    ],
    neighborhoods: ["Gölbaşı İlçesi", "İncek"],
  },
];

const FAQ_HOME = [
  {
    q: "Ankara’nın hangi ilçelerine servis veriyorsunuz?",
    a: "Keçiören, Altındağ, Pursaklar, Mamak, Yenimahalle, Etimesgut, Çankaya, Sincan ilçesi geneli ile Gölbaşı ilçesi ve İncek semti.",
  },
  {
    q: "Tamir ve değişen parçalar garanti kapsamında mı?",
    a: "Evet. Tüm işlemler 1 yıl süreyle belgeli garanti altındadır. İşçilik ve değiştirilen yedek parçalar bu kapsamdadır.",
  },
  {
    q: "Aynı gün yerinde onarım yapıyor musunuz?",
    a: "Kayıt telefon hattımızdan alınır. Müsaitlik durumuna göre genellikle aynı gün adresinizde yerinde tespit ve onarım yapılır.",
  },
  {
    q: "Çalışma saatleriniz nedir?",
    a: "Haftanın 7 günü 08:00–22:00 saatleri arasında servis kaydı alıyoruz. Yoğunluk ve mevsime göre ekip planı esnetilebilir.",
  },
  {
    q: "Telefonda fiyat veriyor musunuz?",
    a: "Hayır. Arıza tespiti ve net fiyatlandırma yerinde yapılır. Onayınız alınmadan işleme başlanmaz.",
  },
];

function localBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE}/#business`,
    name: "Ankara Kapında Servis",
    url: SITE,
    telephone: "+905400081228",
    image: `${SITE}/favicon.svg`,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
    areaServed: DISTRICTS.map((d) => ({ "@type": "AdministrativeArea", name: `${d.name}, Ankara` })),
    priceRange: "$$",
    description:
      "Ankara’da beyaz eşya ve klima için aynı gün yerinde teknik servis. 1 yıl belgeli garanti. Özel servis; yetkili servis değildir.",
  };
}

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

function escapeAttr(value) {
  return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function processBlock() {
  return `<div class="process-flow-container">
            <div class="process-flow-title">Süreç nasıl işliyor?</div>
            <div class="process-flow-steps">
                <div class="process-flow-step">
                    <span class="process-glyph process-glyph-phone" aria-hidden="true"></span>
                    <div class="process-flow-num">1</div>
                    <div class="process-flow-text">
                        <h5>Kayıt oluştur</h5>
                        <p>Hemen ara ile talep aç</p>
                    </div>
                </div>
                <div class="process-flow-step">
                    <span class="process-glyph process-glyph-pin" aria-hidden="true"></span>
                    <div class="process-flow-num">2</div>
                    <div class="process-flow-text">
                        <h5>Yerinde tespit</h5>
                        <p>Ekip adrese gelsin</p>
                    </div>
                </div>
                <div class="process-flow-step">
                    <span class="process-glyph process-glyph-shield" aria-hidden="true"></span>
                    <div class="process-flow-num">3</div>
                    <div class="process-flow-text">
                        <h5>Belgeli onarım</h5>
                        <p>1 yıl garantili tamir</p>
                    </div>
                </div>
            </div>
        </div>`;
}

function noticeBlock() {
  return `<div class="notice-card">
            <div class="notice-icon">!</div>
            <div class="notice-content">
                <h4>Önemli bilgilendirme</h4>
                <p>Telefonda fiyat verilmemektedir. Arıza tespiti ve net fiyatlandırma yerinde yapılır. Onayınız olmadan işlem başlamaz. Tüm işlemler 1 yıl belgeli garantilidir.</p>
            </div>
        </div>`;
}

function badgeGrid(items) {
  return `<div class="badge-grid">${items.map((item) => `<span class="badge-item">${item}</span>`).join("")}</div>`;
}

function districtSummary(district) {
  if (district.name === "Sincan") return "Sincan İlçesi Geneli";
  if (district.name === "Gölbaşı") return "Gölbaşı İlçesi ve İncek Semti";
  return `${district.name} İlçesi Semtleri`;
}

function faqBlock(items) {
  return `<section class="section-card">
            <h2 class="section-title"><span class="title-text">Sıkça sorulan sorular</span></h2>
            ${items
              .map(
                (item) => `<details>
                <summary>${item.q}</summary>
                <div class="accordion-content">${item.a}</div>
            </details>`
              )
              .join("\n            ")}
        </section>`;
}

function layout({
  title,
  description,
  path,
  assetPrefix,
  current,
  jsonLd,
  body,
  h1,
  lead,
  crumbs,
  heroImage,
}) {
  const url = `${SITE}${path}`;
  const nav = [
    { href: `${assetPrefix}index.html`.replace("index.html", "") || `${assetPrefix}`, id: "home", label: "Ana sayfa", to: `${assetPrefix}` },
  ];
  const homeHref = assetPrefix === "" ? "/" : "../";
  const cihazHref = assetPrefix === "" ? "cihazlar/" : "../cihazlar/";
  const bolgeHref = assetPrefix === "" ? "bolgeler/" : "../bolgeler/";
  const iletisimHref = assetPrefix === "" ? "iletisim/" : "../iletisim/";

  const crumbHtml = crumbs
    ? `<nav class="breadcrumb" aria-label="Sayfa yolu">${crumbs
        .map((c, i) =>
          i < crumbs.length - 1
            ? `<a href="${c.href}">${c.name}</a> / `
            : `<span>${c.name}</span>`
        )
        .join("")}</nav>`
    : "";

  const pageHero = h1
    ? `<header class="page-hero${heroImage ? " page-hero--photo" : ""}"${heroImage ? ` style="--hero-photo: url('${assetPrefix}${heroImage}')"` : ""}>
        <div class="page-hero-inner">
            ${crumbHtml}
            <h1>${h1}</h1>
            ${lead ? `<p>${lead}</p>` : ""}
        </div>
    </header>`
    : "";

  return `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeAttr(title)}</title>
    <meta name="description" content="${escapeAttr(description)}">
    <link rel="canonical" href="${url}">
    <meta name="robots" content="index, follow">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="tr_TR">
    <meta property="og:site_name" content="Ankara Kapında Servis">
    <meta property="og:title" content="${escapeAttr(title)}">
    <meta property="og:description" content="${escapeAttr(description)}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${SITE}/images/hero-klima.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#0f2c59">
    <link rel="icon" href="${assetPrefix}favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="${assetPrefix}css/site.css?v=20260910d">
    <script type="application/ld+json">${JSON.stringify(Array.isArray(jsonLd) ? { "@context": "https://schema.org", "@graph": jsonLd.map((item) => { const { "@context": _, ...rest } = item; return rest; }) } : jsonLd)}</script>
</head>
<body>
    <a class="skip-link" href="#icerik">İçeriğe geç</a>
    <div class="site-top">
        <div class="site-top-inner">
            <a class="brand" href="${homeHref}">Ankara Kapında Servis<span>Beyaz eşya ve klima</span></a>
            <a class="top-phone" href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a>
        </div>
    </div>
    <nav class="site-nav" aria-label="Ana menü">
        <div class="site-nav-inner">
            <a href="${homeHref}"${current === "home" ? ' aria-current="page"' : ""}>Ana sayfa</a>
            <a href="${cihazHref}"${current === "cihazlar" ? ' aria-current="page"' : ""}>Cihazlar</a>
            <a href="${bolgeHref}"${current === "bolgeler" ? ' aria-current="page"' : ""}>Bölgeler</a>
            <a href="${iletisimHref}"${current === "iletisim" ? ' aria-current="page"' : ""}>İletişim</a>
        </div>
    </nav>
    ${pageHero}
    ${body}
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-manager">Merkez yetkilisi: <span>Kartal Sağıt</span></div>
            <div class="footer-regions"><strong>Servis bölgelerimiz:</strong> Keçiören, Altındağ, Pursaklar, Mamak, Yenimahalle, Etimesgut, Çankaya, Sincan ilçesi geneli, Gölbaşı ilçesi ve İncek semti</div>
            <div class="footer-note">Çalışma saatleri: 7 gün 08:00–22:00. Aynı gün mobil yerinde servis.</div>
            <div>Telefon: <a href="tel:${PHONE_TEL}" class="footer-phone">${PHONE_DISPLAY}</a></div>
            <div class="footer-links">
                <a href="${homeHref}">Ana sayfa</a>
                <a href="${cihazHref}">Cihaz servisleri</a>
                <a href="${bolgeHref}">İlçe servisleri</a>
                <a href="${iletisimHref}">İletişim</a>
            </div>
            <div class="footer-legal">
                <strong>Yasal uyarı:</strong> Firmamız, adı geçen markalardan bağımsız özel bir teknik servistir. Herhangi bir markanın yetkili servisi veya bayisi değildir. Sitede kullanılan marka isimleri yalnızca tüketiciyi bilgilendirme amaçlıdır ve hakları ilgili tescil sahiplerine aittir.
            </div>
            <div class="footer-copyright">Ankara Kapında Servis &copy; ${YEAR} — Tüm hakları saklıdır.</div>
        </div>
    </footer>
    <div class="sticky-footer">
        <a href="tel:${PHONE_TEL}" class="sticky-btn">Hemen servis çağır — ${PHONE_DISPLAY}</a>
    </div>
</body>
</html>
`;
}

function writePage(relPath, html) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, "utf8");
}

function photoCard(href, imgSrc, strong, span) {
  return `<a class="link-card has-photo" href="${href}"><img src="${imgSrc}" alt="" width="800" height="450" loading="lazy"><strong>${strong}</strong><span>${span}</span></a>`;
}

function textCard(href, strong, span) {
  return `<a class="link-card" href="${href}"><strong>${strong}</strong><span>${span}</span></a>`;
}

function homepage() {
  const deviceLinks = DEVICES.map(
    (d) => photoCard(`${d.slug}/`, `images/devices/${d.photo}`, `${d.name} servisi`, d.lead)
  ).join("\n            ");
  const districtLinks = DISTRICTS.map(
    (d) => textCard(`${d.slug}/`, `${d.name} servisi`, d.lead)
  ).join("\n            ");

  const body = `<header class="hero hero--photo">
        <h1><span>Ankara’nın En Geniş Servis Ağı</span></h1>
        <div>
            <span class="hero-subtitle-main">Profesyonel</span>
            <span class="hero-subtitle-sub">Beyaz eşya ve klima servisi</span>
        </div>
        <p class="hero-subtitle-desc">Ankara’nın 9 ilçesinde, gezici ekiplerimizle aynı gün yerinde tamir. Tüm işlemler 1 yıl belgeli garantilidir.</p>
        <p class="hero-meta">Çalışma saatleri: 7 gün 08:00–22:00</p>
        <a href="tel:${PHONE_TEL}" class="btn-pulse">
            <span class="btn-phone">${PHONE_DISPLAY}</span>
            <span class="btn-text">Hemen ara</span>
        </a>
    </header>
    <main id="icerik" class="container">
        ${noticeBlock()}
        ${processBlock()}
        <div class="seo-intro-card">
            <p><strong>Ankara Kapında Servis;</strong> buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi, klima, televizyon ve ankastre fırın için Keçiören, Altındağ, Pursaklar, Mamak, Yenimahalle, Etimesgut, Çankaya, Sincan ilçesi geneli ile Gölbaşı ilçesi ve İncek semtinde aynı gün yerinde tamir ve bakım sağlar.</p>
        </div>
        <div class="features-grid">
            <div class="feature-box">
                <div class="feature-icon feature-icon-van" aria-hidden="true"></div>
                <div class="feature-text">
                    <h3>Aynı gün servis</h3>
                    <p>Mobil araçlarla hızlı müdahale</p>
                </div>
            </div>
            <div class="feature-box">
                <div class="feature-icon feature-icon-shield" aria-hidden="true"></div>
                <div class="feature-text">
                    <h3>1 yıl belgeli garanti</h3>
                    <p>İşçilik ve değişen parça güvence altında</p>
                </div>
            </div>
            <div class="feature-box">
                <div class="feature-icon feature-icon-home" aria-hidden="true"></div>
                <div class="feature-text">
                    <h3>Yerinde onarım</h3>
                    <p>Onayınız olmadan işlem yok</p>
                </div>
            </div>
        </div>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">Cihaz servisleri</span></h2>
            <div class="link-grid">
            ${deviceLinks}
            </div>
            ${DEVICES.map(
              (d) => `<details>
                <summary>${d.name} markaları</summary>
                <div class="accordion-content">
                    ${badgeGrid(d.brands)}
                    <p style="margin-top:12px;"><a href="${d.slug}/">${d.name} servis sayfası</a></p>
                </div>
            </details>`
            ).join("\n            ")}
        </section>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">Hizmet bölgelerimiz</span></h2>
            <div class="link-grid">
            ${districtLinks}
            </div>
            ${DISTRICTS.map(
              (d) => `<details>
                <summary>${districtSummary(d)}</summary>
                <div class="accordion-content">
                    ${badgeGrid(d.neighborhoods)}
                    <p style="margin-top:12px;"><a href="${d.slug}/">${d.name} servis sayfası</a></p>
                </div>
            </details>`
            ).join("\n            ")}
        </section>
        ${faqBlock(FAQ_HOME)}
    </main>`;

  return layout({
    title: "Ankara Kapında Servis | Beyaz Eşya ve Klima Teknik Servisi",
    description:
      "Ankara’da aynı gün yerinde beyaz eşya ve klima servisi. 9 ilçe, 1 yıl belgeli garanti. 7 gün 08:00–22:00. Hemen ara: 0540 008 12 28.",
    path: "/",
    assetPrefix: "",
    current: "home",
    jsonLd: [localBusiness(), faqSchema(FAQ_HOME), breadcrumbSchema([{ name: "Ana sayfa", path: "/" }])],
    body,
  });
}

function devicePage(device) {
  const prefix = "../";
  const faqs = [
    {
      q: `Ankara’da ${device.name.toLowerCase()} tamiri aynı gün yapılır mı?`,
      a: "Müsaitlik durumuna göre genellikle aynı gün yerinde tespit ve onarım yapılır. Kayıt telefon hattımızdan açılır.",
    },
    {
      q: "Garanti süresi nedir?",
      a: "Tüm işlemler 1 yıl belgeli garanti altındadır. İşçilik ve değiştirilen parçalar bu kapsamdadır.",
    },
    {
      q: "Hangi ilçelere geliyorsunuz?",
      a: "Keçiören, Altındağ, Pursaklar, Mamak, Yenimahalle, Etimesgut, Çankaya, Sincan ilçesi geneli ile Gölbaşı ilçesi ve İncek semti.",
    },
  ];
  const districtLinks = DISTRICTS.map(
    (d) => textCard(`../${d.slug}/`, d.name, `${device.name} servisi`)
  ).join("\n            ");
  const body = `<main id="icerik" class="container">
        ${noticeBlock()}
        ${processBlock()}
        <article class="prose-card">
            ${device.intro.map((p) => `<p>${p}</p>`).join("\n            ")}
            <p>Sık görülen arızalar:</p>
            <ul>${device.faults.map((f) => `<li>${f}</li>`).join("")}</ul>
        </article>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">Baktığımız markalar</span></h2>
            <div class="badge-grid">${device.brands.map((b) => `<span class="badge-item">${b}</span>`).join("")}</div>
            <p class="accordion-content" style="padding-left:0;padding-right:0;">Bu markaların yetkili servisi değiliz. Bilgilendirme amaçlıdır.</p>
        </section>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">İlçe seçin</span></h2>
            <div class="link-grid">
            ${districtLinks}
            </div>
            ${DISTRICTS.map(
              (d) => `<details>
                <summary>${districtSummary(d)}</summary>
                <div class="accordion-content">
                    ${badgeGrid(d.neighborhoods)}
                    <p style="margin-top:12px;"><a href="../${d.slug}/">${d.name} servis sayfası</a></p>
                </div>
            </details>`
            ).join("\n            ")}
        </section>
        ${faqBlock(faqs)}
    </main>`;

  return layout({
    title: device.title,
    description: `${device.lead} 1 yıl belgeli garanti. 0540 008 12 28.`,
    path: `/${device.slug}/`,
    assetPrefix: prefix,
    current: "cihazlar",
    jsonLd: [
      localBusiness(),
      faqSchema(faqs),
      breadcrumbSchema([
        { name: "Ana sayfa", path: "/" },
        { name: "Cihazlar", path: "/cihazlar/" },
        { name: device.name, path: `/${device.slug}/` },
      ]),
    ],
    body,
    h1: device.h1,
    lead: device.lead,
    crumbs: [
      { name: "Ana sayfa", href: "../" },
      { name: "Cihazlar", href: "../cihazlar/" },
      { name: device.name, href: "./" },
    ],
    heroImage: `images/devices/${device.photo}`,
  });
}

function districtPage(district) {
  const prefix = "../";
  const faqs = [
    {
      q: `${district.name} bölgesine aynı gün geliyor musunuz?`,
      a: "Evet, müsaitlik durumuna göre aynı gün yerinde servis hedeflenir. Kayıt telefonla alınır.",
    },
    {
      q: "Hangi cihazlara bakıyorsunuz?",
      a: "Buzdolabı, çamaşır makinesi, bulaşık makinesi, kurutma makinesi, klima, televizyon ve ankastre fırın.",
    },
    {
      q: "Garanti var mı?",
      a: "Tüm işlemler 1 yıl belgeli garanti altındadır.",
    },
  ];
  const deviceLinks = DEVICES.map(
    (d) => photoCard(`../${d.slug}/`, `../images/devices/${d.photo}`, d.name, `${district.name} için yerinde tamir`)
  ).join("\n            ");
  const body = `<main id="icerik" class="container">
        ${noticeBlock()}
        ${processBlock()}
        <article class="prose-card">
            ${district.intro.map((p) => `<p>${p}</p>`).join("\n            ")}
        </article>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">Semtler</span></h2>
            <div class="badge-grid">${district.neighborhoods.map((n) => `<span class="badge-item">${n}</span>`).join("")}</div>
        </section>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">Bu ilçede baktığımız markalar</span></h2>
            ${DEVICES.map(
              (d) => `<details>
                <summary>${d.name} markaları</summary>
                <div class="accordion-content">
                    ${badgeGrid(d.brands)}
                    <p style="margin-top:12px;"><a href="../${d.slug}/">${d.name} servisi</a></p>
                </div>
            </details>`
            ).join("\n            ")}
        </section>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">Cihaz seçin</span></h2>
            <div class="link-grid">
            ${deviceLinks}
            </div>
        </section>
        ${faqBlock(faqs)}
    </main>`;

  return layout({
    title: district.title,
    description: `${district.lead} 1 yıl belgeli garanti. 0540 008 12 28.`,
    path: `/${district.slug}/`,
    assetPrefix: prefix,
    current: "bolgeler",
    jsonLd: [
      localBusiness(),
      faqSchema(faqs),
      breadcrumbSchema([
        { name: "Ana sayfa", path: "/" },
        { name: "Bölgeler", path: "/bolgeler/" },
        { name: district.name, path: `/${district.slug}/` },
      ]),
    ],
    body,
    h1: district.h1,
    lead: district.lead,
    crumbs: [
      { name: "Ana sayfa", href: "../" },
      { name: "Bölgeler", href: "../bolgeler/" },
      { name: district.name, href: "./" },
    ],
    heroImage: "images/devices/bolge.jpg",
  });
}

function hubCihazlar() {
  const links = DEVICES.map(
    (d) => photoCard(`../${d.slug}/`, `../images/devices/${d.photo}`, `${d.name} servisi`, d.lead)
  ).join("\n            ");
  const body = `<main id="icerik" class="container">
        ${noticeBlock()}
        <article class="prose-card">
            <p>Ankara Kapında Servis, aşağıdaki cihaz gruplarında yerinde tamir ve bakım yapar. Her cihazın marka listesi bu sayfada eksiksiz yer alır. Kayıt için sayfadaki numarayı aramanız yeterlidir.</p>
        </article>
        <div class="link-grid">${links}</div>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">Cihaz ve marka listesi</span></h2>
            ${DEVICES.map(
              (d) => `<details>
                <summary>${d.name} markaları</summary>
                <div class="accordion-content">
                    ${badgeGrid(d.brands)}
                    <p style="margin-top:12px;"><a href="../${d.slug}/">${d.name} servis sayfası</a></p>
                </div>
            </details>`
            ).join("\n            ")}
        </section>
    </main>`;
  return layout({
    title: "Ankara Cihaz Servisleri | Beyaz Eşya, Klima ve TV",
    description: "Buzdolabı, çamaşır, bulaşık, kurutma, klima, televizyon ve ankastre fırın için Ankara yerinde servis. 1 yıl belgeli garanti.",
    path: "/cihazlar/",
    assetPrefix: "../",
    current: "cihazlar",
    jsonLd: [
      localBusiness(),
      breadcrumbSchema([
        { name: "Ana sayfa", path: "/" },
        { name: "Cihazlar", path: "/cihazlar/" },
      ]),
    ],
    body,
    h1: "Cihaz servisleri",
    lead: "Yerinde tamir ettiğimiz cihaz grupları ve marka listeleri.",
    crumbs: [
      { name: "Ana sayfa", href: "../" },
      { name: "Cihazlar", href: "./" },
    ],
    heroImage: "images/hero-klima.jpg",
  });
}

function hubBolgeler() {
  const links = DISTRICTS.map(
    (d) => textCard(`../${d.slug}/`, d.name, d.lead)
  ).join("\n            ");
  const body = `<main id="icerik" class="container">
        ${noticeBlock()}
        <article class="prose-card">
            <p>Keçiören, Altındağ, Pursaklar, Mamak, Yenimahalle, Etimesgut, Çankaya, Sincan ilçesi geneli ile Gölbaşı ilçesi ve İncek semti eşit önceliktedir. Her ilçenin semt listesi bu sayfada ve ilçe sayfasında eksiksiz yer alır. Ekip planı telefon kaydına göre yapılır.</p>
        </article>
        <div class="link-grid">${links}</div>
        <section class="section-card">
            <h2 class="section-title"><span class="title-text">İlçe ve semt listesi</span></h2>
            ${DISTRICTS.map(
              (d) => `<details>
                <summary>${districtSummary(d)}</summary>
                <div class="accordion-content">
                    ${badgeGrid(d.neighborhoods)}
                    <p style="margin-top:12px;"><a href="../${d.slug}/">${d.name} servis sayfası</a></p>
                </div>
            </details>`
            ).join("\n            ")}
        </section>
    </main>`;
  return layout({
    title: "Ankara Servis Bölgeleri | 9 İlçeye Yerinde Hizmet",
    description: "Çankaya, Keçiören, Yenimahalle, Mamak, Altındağ, Etimesgut, Pursaklar, Sincan ve Gölbaşı’nda aynı gün yerinde servis.",
    path: "/bolgeler/",
    assetPrefix: "../",
    current: "bolgeler",
    jsonLd: [
      localBusiness(),
      breadcrumbSchema([
        { name: "Ana sayfa", path: "/" },
        { name: "Bölgeler", path: "/bolgeler/" },
      ]),
    ],
    body,
    h1: "Hizmet bölgelerimiz",
    lead: "Keçiören, Altındağ, Pursaklar, Mamak, Yenimahalle, Etimesgut, Çankaya, Sincan ilçesi geneli ile Gölbaşı ilçesi ve İncek semti.",
    crumbs: [
      { name: "Ana sayfa", href: "../" },
      { name: "Bölgeler", href: "./" },
    ],
    heroImage: "images/devices/bolge.jpg",
  });
}

function iletisimPage() {
  const faqs = [
    {
      q: "Nasıl kayıt açabilirim?",
      a: "Sayfadaki 0540 008 12 28 numarasını arayarak kayıt açabilirsiniz. Mesaj hattı kullanılmamaktadır.",
    },
    {
      q: "Saat kaçta arayabilirim?",
      a: "7 gün 08:00–22:00. Yoğunluk ve mevsime göre ekip planı değişebilir.",
    },
  ];
  const body = `<main id="icerik" class="container">
        ${noticeBlock()}
        ${processBlock()}
        <article class="prose-card">
            <p>Servis kaydı yalnızca telefon ile alınır. Cihazınızın arızasını kısaca tarif etmeniz, ekibin doğru yönlendirilmesi için yeterlidir.</p>
            <p><strong>Telefon:</strong> <a href="tel:${PHONE_TEL}">${PHONE_DISPLAY}</a><br>
            <strong>Çalışma saatleri:</strong> 7 gün, 08:00–22:00<br>
            <strong>Garanti:</strong> Tüm işlemler 1 yıl belgeli<br>
            <strong>Merkez yetkilisi:</strong> Kartal Sağıt</p>
            <p>Hizmet alanımız: Keçiören, Altındağ, Pursaklar, Mamak, Yenimahalle, Etimesgut, Çankaya, Sincan ilçesi geneli ile Gölbaşı ilçesi ve İncek semti.</p>
        </article>
        ${faqBlock(faqs)}
    </main>`;
  return layout({
    title: "İletişim | Ankara Kapında Servis",
    description: "Ankara Kapında Servis iletişim: 0540 008 12 28. 7 gün 08:00–22:00. Aynı gün yerinde servis kaydı.",
    path: "/iletisim/",
    assetPrefix: "../",
    current: "iletisim",
    jsonLd: [
      localBusiness(),
      faqSchema(faqs),
      breadcrumbSchema([
        { name: "Ana sayfa", path: "/" },
        { name: "İletişim", path: "/iletisim/" },
      ]),
    ],
    body,
    h1: "İletişim",
    lead: "Kayıt için arayın. 7 gün 08:00–22:00.",
    crumbs: [
      { name: "Ana sayfa", href: "../" },
      { name: "İletişim", href: "./" },
    ],
    heroImage: "images/hero-klima.jpg",
  });
}

function notFoundPage() {
  const body = `<main id="icerik" class="container">
        <div class="section-card not-found">
            <h1>Sayfa bulunamadı</h1>
            <p>Aradığınız adres taşınmış veya hiç oluşturulmamış olabilir. Ana sayfadan cihaz veya ilçe seçebilir, servis için arayabilirsiniz.</p>
            <p style="margin-top:16px;"><a class="btn-pulse" href="../"><span class="btn-text">Ana sayfaya dön</span></a></p>
        </div>
    </main>`;
  return layout({
    title: "Sayfa bulunamadı | Ankara Kapında Servis",
    description: "Sayfa bulunamadı. Ankara Kapında Servis ana sayfasına dönün veya 0540 008 12 28’i arayın.",
    path: "/404.html",
    assetPrefix: "",
    current: "",
    jsonLd: [localBusiness()],
    body,
    h1: "Sayfa bulunamadı",
    lead: "Bu bağlantı geçersiz.",
    crumbs: [{ name: "Ana sayfa", href: "/" }, { name: "404", href: "/404.html" }],
  }).replace('<meta name="robots" content="index, follow">', '<meta name="robots" content="noindex, follow">');
}

function sitemap() {
  const urls = [
    "/",
    "/cihazlar/",
    "/bolgeler/",
    "/iletisim/",
    ...DEVICES.map((d) => `/${d.slug}/`),
    ...DISTRICTS.map((d) => `/${d.slug}/`),
  ];
  const body = urls
    .map(
      (loc) => `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${loc === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${loc === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

writePage("index.html", homepage());
writePage("cihazlar/index.html", hubCihazlar());
writePage("bolgeler/index.html", hubBolgeler());
writePage("iletisim/index.html", iletisimPage());
writePage("404.html", notFoundPage());
for (const device of DEVICES) writePage(`${device.slug}/index.html`, devicePage(device));
for (const district of DISTRICTS) writePage(`${district.slug}/index.html`, districtPage(district));
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap(), "utf8");

console.log("Sayfalar yazıldı:", 4 + DEVICES.length + DISTRICTS.length + 1);
