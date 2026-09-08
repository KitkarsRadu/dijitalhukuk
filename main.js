/* Global interface, i18n and browser-only demo interactions. */
const translations = {
  tr: {
    brand: "Dijital Hukuk",
    credential: "Av. Ahmet Turan Delice | Türk Hukuku Danışmanı (§ 206 BRAO)",
    navHome: "Ana Sayfa",
    navExpertise: "Uzmanlık Alanları",
    navBlog: "Blog / Haberler",
    navAbout: "Hakkımızda",
    navServices: "Hizmetler",
    navGuide: "Rehber",
    navPortal: "Müvekkil Portalı",
    navBooking: "Randevu Al",
    heroEyebrow: "Almanya’dan Türkiye’ye güvenli hukuki bağlantı",
    heroTitle: "Türkiye’deki haklarınıza <em>modern ve güvenilir erişim.</em>",
    heroLead:
      "Türk diasporası için, Türk Hukuku kapsamındaki işlemlerde bağımsız danışmanlık ve şeffaf dijital iletişim.",
    heroCta: "Hukuki hizmeti seçin",
    heroMore: "Nasıl çalışır?",
    trust1: "§ 206 BRAO statüsü",
    trust2: "DSGVO odaklı süreç",
    trust3: "14 gün belge imhası",
    packagesEyebrow: "Hizmet seçenekleri",
    packagesTitle: "İhtiyacınıza uygun, açık ücretli hukuki destek.",
    writtenTitle: "24 Saat İçinde Yazılı Hukuki Değerlendirme Raporu",
    writtenDesc:
      "Evrak ve olay analizi, risk raporu; 24 saatte e-posta veya portal ile teslim.",
    liveTitle: "45 Dakika Canlı Online Danışmanlık",
    liveDesc: "Birebir video görüşme, belge incelemesi ve anlık soru-cevap.",
    litigationTitle: "Türkiye’de Dava Takibi",
    litigationDesc:
      "Miras, tapu iptali, tahliye veya tanıma-tenfiz için Türkiye’de tam yetkili dava vekilliği. Ön görüşme ve dosya incelemesi sonrası özel teklif.",
    from49: "49 €",
    from79: "79 €",
    quote: "Teklif Usulü",
    select: "Bu seçeneği seç",
    bookingTitle: "Randevu ve ödeme akışı",
    bookingLead: "Paketi, uygun saati ve iletişim bilgilerinizi belirleyin.",
    chooseTime: "Uygun saati seçin",
    pay: "Ödemeyi ve randevuyu onayla",
    waiver:
      "Görüşmenin belirlenen saatte başlamasını talep ediyorum; hizmet ifa edildiğinde yasal 14 günlük cayma hakkımı kaybedeceğimi kabul ediyorum (§ 356 Abs. 4 BGB).",
    paymentOk:
      "Randevu talebiniz ve demo ödeme onayınız alındı. E-posta ile teyit gönderilecektir.",
    paymentError:
      "Lütfen paket, saat, kart bilgileri ve cayma hakkı onayını tamamlayın.",
    scopeTitle: "Çalışma sınırları",
    scopeText:
      "Alman ceza hukukuna bakılmaz; yetki alanı Türk Hukuku ile sınırlıdır.",
    portalTitle: "Güvenli Müvekkil Portalı",
    portalLead: "Dosya ve belge akışınızı tek ekrandan takip edin.",
    login: "Giriş Yap",
    register: "Kayıt Ol",
    upload: "Belgeleri sürükleyip bırakın veya seçin",
    destruction:
      "Yüklenen belgeler 14 gün sonra sistemden otomatik olarak kalıcı silinir.",
    join: "Görüşme Odasına Katıl",
    aboutTitle: "Bağımsız, erişilebilir ve çağdaş Türk Hukuku danışmanlığı.",
    aboutText:
      "Av. Ahmet Turan Delice, Türk Barosu üyesi ve Almanya’da § 206 BRAO statüsünde Türk Hukuku Danışmanıdır. Vizyonu, Türk diasporasının Türkiye ile bağ kuran hukuki ihtiyaçlarına şeffaf, güvenilir ve teknoloji destekli temsil sunmaktır.",
    guideTitle: "Konsolosluktan vekâletname çıkarma rehberi",
    faqTitle: "Sıkça sorulan sorular",
    legalTitle: "Impressum, DSGVO ve tüketici uyuşmazlıkları",
    errorTitle: "Sayfa Bulunamadı",
    errorLead: "Aradığınız sayfa taşınmış veya mevcut değil.",
    backHome: "Ana Sayfaya Dön",
  },
  de: {
    brand: "Digitales Recht",
    credential:
      "Av. Ahmet Turan Delice | Berater für türkisches Recht (§ 206 BRAO)",
    navHome: "Startseite",
    navExpertise: "Rechtsgebiete",
    navBlog: "Blog / Aktuelles",
    navAbout: "Über uns",
    navServices: "Leistungen",
    navGuide: "Ratgeber",
    navPortal: "Mandantenportal",
    navBooking: "Termin buchen",
    heroEyebrow: "Sichere rechtliche Verbindung von Deutschland in die Türkei",
    heroTitle:
      "Moderner und verlässlicher Zugang zu Ihren <em>Rechten in der Türkei.</em>",
    heroLead:
      "Unabhängige Beratung und transparente digitale Kommunikation für die türkische Diaspora im Rahmen des türkischen Rechts.",
    heroCta: "Rechtsleistung wählen",
    heroMore: "So funktioniert es",
    trust1: "Status nach § 206 BRAO",
    trust2: "DSGVO-orientierter Prozess",
    trust3: "Löschung nach 14 Tagen",
    packagesEyebrow: "Leistungsoptionen",
    packagesTitle: "Rechtliche Unterstützung mit klaren Konditionen.",
    writtenTitle:
      "Schriftlicher Rechtsbewertungsbericht innerhalb von 24 Stunden",
    writtenDesc:
      "Analyse von Unterlagen und Sachverhalt, Risikobericht; Zustellung innerhalb von 24 Stunden per E-Mail oder Portal.",
    liveTitle: "45 Minuten Live-Online-Beratung",
    liveDesc:
      "Persönliches Videogespräch, Dokumentenprüfung und direkte Fragen und Antworten.",
    litigationTitle: "Prozessvertretung in der Türkei",
    litigationDesc:
      "Umfassende Prozessvertretung in der Türkei bei Erbschaft, Grundbuchklagen, Räumung oder Anerkennung/Vollstreckung. Individuelles Angebot nach Vorbesprechung und Aktenprüfung.",
    from49: "49 €",
    from79: "79 €",
    quote: "Individuelles Angebot",
    select: "Option wählen",
    bookingTitle: "Termin- und Zahlungsablauf",
    bookingLead: "Wählen Sie Leistung, Termin und Kontaktdaten.",
    chooseTime: "Passende Uhrzeit wählen",
    pay: "Zahlung und Termin bestätigen",
    waiver:
      "Ich wünsche den Beginn der Beratung zum vereinbarten Termin und bestätige, dass ich mein gesetzliches 14-tägiges Widerrufsrecht verliere, sobald die Leistung vollständig erbracht ist (§ 356 Abs. 4 BGB).",
    paymentOk:
      "Ihre Terminanfrage und die Demo-Zahlungsbestätigung sind eingegangen. Eine Bestätigung folgt per E-Mail.",
    paymentError:
      "Bitte wählen Sie Leistung und Uhrzeit aus und ergänzen Sie Kartendaten sowie Widerrufsbestätigung.",
    scopeTitle: "Grenzen der Tätigkeit",
    scopeText:
      "Deutsches Strafrecht wird nicht bearbeitet; der Tätigkeitsbereich ist auf türkisches Recht beschränkt.",
    portalTitle: "Sicheres Mandantenportal",
    portalLead: "Verfolgen Sie Akten- und Dokumentenabläufe an einem Ort.",
    login: "Anmelden",
    register: "Registrieren",
    upload: "Dokumente hierher ziehen oder auswählen",
    destruction:
      "Hochgeladene Dokumente werden nach 14 Tagen automatisch und dauerhaft gelöscht.",
    join: "Besprechungsraum betreten",
    aboutTitle:
      "Unabhängige, zugängliche und zeitgemäße Beratung im türkischen Recht.",
    aboutText:
      "Av. Ahmet Turan Delice ist Mitglied einer türkischen Rechtsanwaltskammer und in Deutschland als Berater für türkisches Recht nach § 206 BRAO tätig. Seine Vision ist eine transparente, verlässliche und technologiegestützte Vertretung für die rechtlichen Anliegen der türkischen Diaspora.",
    guideTitle: "Leitfaden für die Vollmacht beim Konsulat",
    faqTitle: "Häufige Fragen",
    legalTitle: "Impressum, DSGVO und Verbraucherstreitbeilegung",
    errorTitle: "Seite nicht gefunden",
    errorLead: "Die gesuchte Seite wurde verschoben oder existiert nicht.",
    backHome: "Zur Startseite",
  },
  en: {
    brand: "Digital Law",
    credential: "Av. Ahmet Turan Delice | Turkish Law Consultant (§ 206 BRAO)",
    navHome: "Home",
    navExpertise: "Practice Areas",
    navBlog: "Blog / News",
    navAbout: "About Us",
    navServices: "Services",
    navGuide: "Guide",
    navPortal: "Client Portal",
    navBooking: "Book an Appointment",
    heroEyebrow: "A secure legal connection from Germany to Turkey",
    heroTitle: "Modern, reliable access to your <em>rights in Turkey.</em>",
    heroLead:
      "Independent advice and transparent digital communication for the Turkish diaspora, limited to Turkish law.",
    heroCta: "Choose a legal service",
    heroMore: "How it works",
    trust1: "Status under § 206 BRAO",
    trust2: "DSGVO-focused process",
    trust3: "Document deletion in 14 days",
    packagesEyebrow: "Service options",
    packagesTitle: "Legal support with clear fees.",
    writtenTitle: "Written Legal Assessment Report within 24 Hours",
    writtenDesc:
      "Document and case analysis, risk report; delivered by email or portal within 24 hours.",
    liveTitle: "45-Minute Live Online Consultation",
    liveDesc: "One-to-one video consultation, document review and live Q&A.",
    litigationTitle: "Litigation Follow-up in Turkey",
    litigationDesc:
      "Full litigation representation in Turkey for inheritance, title cancellation, eviction, or recognition/enforcement cases. A tailored offer follows the initial consultation and file review.",
    from49: "€49",
    from79: "€79",
    quote: "Quotation Basis",
    select: "Choose this option",
    bookingTitle: "Appointment and payment flow",
    bookingLead:
      "Choose the service, a suitable time, and your contact details.",
    chooseTime: "Choose a suitable time",
    pay: "Confirm payment and appointment",
    waiver:
      "I request that the consultation start at the agreed time and acknowledge that I lose my statutory 14-day right of withdrawal once the service has been performed (§ 356(4) BGB).",
    paymentOk:
      "Your appointment request and demo payment confirmation were received. A confirmation will be sent by email.",
    paymentError:
      "Please complete the service, time, card information and withdrawal confirmation.",
    scopeTitle: "Scope of work",
    scopeText:
      "German criminal law is not handled; the scope of work is limited to Turkish law.",
    portalTitle: "Secure Client Portal",
    portalLead: "Manage your case and document flow in one place.",
    login: "Sign In",
    register: "Register",
    upload: "Drag documents here or choose files",
    destruction:
      "Uploaded documents are automatically and permanently deleted after 14 days.",
    join: "Join Meeting Room",
    aboutTitle: "Independent, accessible, contemporary Turkish law consulting.",
    aboutText:
      "Av. Ahmet Turan Delice is a member of a Turkish Bar Association and works in Germany as a Turkish Law Consultant under § 206 BRAO. His vision is transparent, reliable and technology-enabled representation for the Turkey-related legal needs of the Turkish diaspora.",
    guideTitle: "Consulate power of attorney guide",
    faqTitle: "Frequently asked questions",
    legalTitle: "Imprint, DSGVO and consumer dispute resolution",
    errorTitle: "Page Not Found",
    errorLead: "The page you are looking for has moved or does not exist.",
    backHome: "Return Home",
  },
};

Object.assign(translations.tr,{focus:"Uzmanlık odağı",disputes:"En Çok Karşılaşılan Uyuşmazlıklar",allAreas:"Tüm Alanları İnceleyin →",d1:"Miras & Tereke Takibi",d1t:"Veraset ilamı, tenkis davaları, intikal işlemleri ve miras payının nakde çevrilmesi.",d2:"Gayrimenkul & Tahliye",d2t:"Kira tespit/tahliye, tapu iptal ve tescil, ortaklığın giderilmesi.",d3:"Tanıma ve Tenfiz",d3t:"Alman mahkemelerinden alınan kararların Türkiye'de tescili.",d4:"İcra & Alacak Tahsili",d4t:"Türkiye'deki borçlulardan alacak tahsili ve icra takipleri.",trustA:"Doğrudan Vekil Güvencesi",trustAt:"Dosyanız aracı bürolara devredilmez; bizzat takip edilir.",trustB:"Almanya Saatiyle İletişim",trustBt:"Saat farkı yaşamadan, esnek randevu imkânı.",trustC:"Şeffaf & Fatura Garantili",trustCt:"Her danışmanlık için yasal Alman faturası düzenlenir.",step1:"Seçin",step1t:"İhtiyacınıza uygun hizmet türünü ve güvenli randevu saatini belirleyin.",step2:"Paylaşın",step2t:"Belgelerinizi portal üzerinden kontrollü biçimde iletin.",step3:"İlerleyin",step3t:"Net bir yol haritası ve sonraki adımları alın.",footerQuick:"Kısayollar",footerLegal:"Yasal Kısayollar",footerCopy:"© 2026 Dijital Hukuk",legalNotice:"Yasal Bilgilendirme: Sunulan danışmanlık Türk Hukuku mevzuatına tabidir. Almanya’da Alman Hukuku alanında mahkeme temsili yapılmaz."});
Object.assign(translations.de,{focus:"Schwerpunkt",disputes:"Häufige Rechtsangelegenheiten",allAreas:"Alle Rechtsgebiete ansehen →",d1:"Erbe & Nachlass",d1t:"Erbschein, Pflichtteilsansprüche, Übertragung und Verwertung des Nachlasses.",d2:"Immobilien & Räumung",d2t:"Miet-, Räumungs-, Grundbuch- und Eigentumsstreitigkeiten.",d3:"Anerkennung & Vollstreckung",d3t:"Registrierung deutscher Gerichtsentscheidungen in der Türkei.",d4:"Vollstreckung & Forderungseinzug",d4t:"Forderungsmanagement und Vollstreckungsverfahren in der Türkei.",trustA:"Direkte anwaltliche Betreuung",trustAt:"Ihre Akte wird nicht an Vermittler übergeben.",trustB:"Kommunikation nach deutscher Zeit",trustBt:"Flexible Termine ohne Zeitverschiebung.",trustC:"Transparenz & Rechnungsgarantie",trustCt:"Für jede Beratung wird eine deutsche Rechnung erstellt.",step1:"Auswählen",step1t:"Wählen Sie Leistung und einen sicheren Termin.",step2:"Bereitstellen",step2t:"Übermitteln Sie Unterlagen kontrolliert über das Portal.",step3:"Weitergehen",step3t:"Erhalten Sie einen klaren Fahrplan für die nächsten Schritte.",footerQuick:"Direktlinks",footerLegal:"Rechtliche Links",footerCopy:"© 2026 Digitales Recht",legalNotice:"Rechtlicher Hinweis: Die Beratung unterliegt türkischem Recht. Eine gerichtliche Vertretung im deutschen Recht erfolgt nicht."});
Object.assign(translations.en,{focus:"Practice focus",disputes:"Most common legal matters",allAreas:"Explore all practice areas →",d1:"Inheritance & Estate",d1t:"Heirship certificates, reserved shares, transfer and estate realisation.",d2:"Property & Eviction",d2t:"Lease, eviction, title and ownership disputes.",d3:"Recognition & Enforcement",d3t:"Registration of German court decisions in Turkey.",d4:"Enforcement & Debt Collection",d4t:"Debt recovery and enforcement proceedings in Turkey.",trustA:"Direct counsel assurance",trustAt:"Your file is never handed to intermediaries.",trustB:"Communication on German time",trustBt:"Flexible appointments without time-zone friction.",trustC:"Transparency & invoicing",trustCt:"A German invoice is issued for every consultation.",step1:"Choose",step1t:"Choose the appropriate service and a secure appointment time.",step2:"Share",step2t:"Share documents securely through the portal.",step3:"Proceed",step3t:"Receive a clear roadmap and next steps.",footerQuick:"Quick links",footerLegal:"Legal links",footerCopy:"© 2026 Digital Law",legalNotice:"Legal notice: Advice is governed by Turkish law. Court representation in German law is not provided."});

Object.assign(translations.tr,{processEyebrow:"Süreç",processTitle:"Hukuki desteğinize giden açık yol.",processCommonTitle:"Kullanıcı Kaydı & İletişim Bilgileri",processCommonText:"Güvenli iletişim için sisteme kaydolur, e-posta ve telefon numaranızı girersiniz.",details:"Detayları İncele",packageChoose:"Paketi Seç",firstName:"Ad",lastName:"Soyad",email:"E-posta",phone:"Telefon",createAccount:"Bu bilgilerle üye hesabı oluştur",password:"Şifre belirleyin",footerHome:"Ana Sayfa",footerAreas:"Uzmanlık Alanları",footerServices:"Hizmetler",footerProcess:"Süreç",footerBooking:"Randevu",footerBlog:"Blog / Haberler",footerContact:"İletişim",footerImprint:"Impressum (§ 5 DDG)",footerPrivacy:"Gizlilik Politikası (DSGVO)",footerCookies:"Çerez Ayarları",footerDisputes:"Tüketici Uyuşmazlıkları (§ 36 VSBG)",footerDisclaimer:"Yasal Sorumluluk Reddi"});
Object.assign(translations.de,{processEyebrow:"Ablauf",processTitle:"Ein klarer Weg zu Ihrer Rechtsberatung.",processCommonTitle:"Registrierung & Kontaktdaten",processCommonText:"Sie registrieren sich und hinterlegen Ihre E-Mail-Adresse sowie Telefonnummer für eine sichere Kommunikation.",details:"Details ansehen",packageChoose:"Paket wählen",firstName:"Vorname",lastName:"Nachname",email:"E-Mail",phone:"Telefon",createAccount:"Mit diesen Angaben ein Mitgliedskonto erstellen",password:"Passwort festlegen",footerHome:"Startseite",footerAreas:"Fachbereiche",footerServices:"Leistungen",footerProcess:"Ablauf",footerBooking:"Termin buchen",footerBlog:"Aktuelles & Blog",footerContact:"Kontakt",footerImprint:"Impressum (§ 5 DDG)",footerPrivacy:"Datenschutz (DSGVO)",footerCookies:"Cookie-Einstellungen",footerDisputes:"Verbraucherstreitbeilegung (§ 36 VSBG)",footerDisclaimer:"Haftungsausschluss"});
Object.assign(translations.en,{processEyebrow:"Process",processTitle:"A clear path to your legal support.",processCommonTitle:"Registration & Contact Details",processCommonText:"Register and provide your email address and telephone number for secure communication.",details:"View details",packageChoose:"Choose package",firstName:"First name",lastName:"Last name",email:"Email",phone:"Phone",createAccount:"Create a member account with these details",password:"Set a password",footerHome:"Home",footerAreas:"Practice Areas",footerServices:"Services",footerProcess:"Process",footerBooking:"Book Appointment",footerBlog:"News & Blog",footerContact:"Contact",footerImprint:"Legal Notice (§ 5 DDG)",footerPrivacy:"Privacy Policy (GDPR)",footerCookies:"Cookie Settings",footerDisputes:"Consumer Dispute Resolution (§ 36 VSBG)",footerDisclaimer:"Disclaimer"});

Object.assign(translations.tr,{homeProcessEyebrow:"Şeffaf çalışma modeli",homeProcessTitle:"Almanya'dan Türkiye'deki İşlemlerinize 4 Kolay Adımda Ulaşın",homeStep1:"İhtiyacınızı Belirleyin",homeStep1Text:"Rapor, canlı danışmanlık veya dava takibi seçin.",homeStep2:"Güvenli Randevu & Evrak İletimi",homeStep2Text:"Almanya saatiyle randevu ve DSGVO uyumlu evrak kasası.",homeStep3:"Hukuki Değerlendirme & Canlı Görüşme",homeStep3Text:"Türk Hukuku danışmanınızla strateji görüşmesi.",homeStep4:"Türkiye'de Dava & İşlem Takibi",homeStep4Text:"Seyahat etmeden vekâletle kesin adli takip.",assurance1:"Türkiye'ye Seyahat Zorunluluğu Yok",assurance2:"256-Bit Şifreli Portal",assurance3:"Yasal Fatura Güvencesi",homeProcessCta:"Tüm Süreç Detaylarını İnceleyin →"});
Object.assign(translations.de,{homeProcessEyebrow:"Transparenter Ablauf",homeProcessTitle:"In 4 einfachen Schritten von Deutschland zu Ihren Anliegen in der Türkei",homeStep1:"Bedarf bestimmen",homeStep1Text:"Wählen Sie Bericht, Live-Beratung oder Prozessvertretung.",homeStep2:"Sicherer Termin & Dokumentenübermittlung",homeStep2Text:"Termin nach deutscher Zeit und DSGVO-konformer Dokumententresor.",homeStep3:"Rechtliche Prüfung & Live-Gespräch",homeStep3Text:"Strategiegespräch mit Ihrem Berater für türkisches Recht.",homeStep4:"Prozess- & Verfahrensverfolgung in der Türkei",homeStep4Text:"Verbindliche Verfolgung mit Vollmacht – ohne Reise in die Türkei.",assurance1:"Keine Reise in die Türkei erforderlich",assurance2:"256-Bit-verschlüsseltes Portal",assurance3:"Gesetzliche Rechnungsgarantie",homeProcessCta:"Alle Prozessdetails ansehen →"});
Object.assign(translations.en,{homeProcessEyebrow:"Transparent working model",homeProcessTitle:"Reach Your Matters in Turkey from Germany in 4 Easy Steps",homeStep1:"Identify Your Need",homeStep1Text:"Choose a report, live consultation or litigation follow-up.",homeStep2:"Secure Appointment & Document Transfer",homeStep2Text:"German-time appointment and DSGVO-compliant document vault.",homeStep3:"Legal Assessment & Live Consultation",homeStep3Text:"Strategy session with your Turkish law consultant.",homeStep4:"Litigation & Matter Follow-up in Turkey",homeStep4Text:"Definitive legal follow-up by power of attorney, without travelling to Turkey.",assurance1:"No Travel to Turkey Required",assurance2:"256-Bit Encrypted Portal",assurance3:"Legal Invoice Assurance",homeProcessCta:"Explore All Process Details →"});

const serviceCatalog={
tr:[{icon:"fa-file-lines",price:"49 €",title:"24 Saat İçinde Yazılı Hukuki Değerlendirme Raporu",features:["Soru ve belgelerin güvenli iletimi","Somut olay ve evrak incelemesi","24 saat içinde yazılı teslim"],detail:"Dosyanızdaki bilgi ve belgeler hukuki çerçevede incelenir. Kapsamlı yazılı değerlendirme, bildirilen e-posta adresine veya müvekkil portalına 24 saat içinde teslim edilir."},{icon:"fa-video",price:"79 €",title:"45 Dakika Canlı Online Danışmanlık",features:["Takvimden uygun saat seçimi","Güvenli görüşme bağlantısı","45 dakika birebir yol haritası"],detail:"Seçtiğiniz saat için görüşme bağlantısı iletilir. Görüşmede dosyanız, seçenekleriniz ve izlenecek hukuki yol birlikte değerlendirilir."},{icon:"fa-gavel",price:"Teklif Usulü",title:"Türkiye'de Dava Takibi",features:["Ön talep ve canlı ön görüşme","Strateji, masraf ve ücret teklifi","Vekâletname sonrası bizzat takip"],detail:"Mevcut veya açılacak dava dosyanız canlı görüşmede incelenir. Strateji ve maliyet teklifinden sonra vekâletname ile Türkiye mahkemelerindeki takip yürütülür."}],
de:[{icon:"fa-file-lines",price:"49 €",title:"Schriftlicher Rechtsbewertungsbericht innerhalb von 24 Stunden",features:["Sichere Übermittlung von Fragen und Unterlagen","Prüfung von Sachverhalt und Dokumenten","Schriftliche Zustellung innerhalb von 24 Stunden"],detail:"Ihre Angaben und Unterlagen werden rechtlich geprüft. Der umfassende schriftliche Bericht wird innerhalb von 24 Stunden an die angegebene E-Mail-Adresse oder in das Mandantenportal geliefert."},{icon:"fa-video",price:"79 €",title:"45-minütige Live-Online-Beratung",features:["Passenden Termin im Kalender wählen","Sicherer Besprechungslink","45 Minuten persönliche Roadmap"],detail:"Für Ihren Termin erhalten Sie einen sicheren Besprechungslink. Im Gespräch werden Ihre Akte, Optionen und die nächsten rechtlichen Schritte gemeinsam eingeordnet."},{icon:"fa-gavel",price:"Angebot",title:"Prozessvertretung in der Türkei",features:["Voranfrage und Live-Erstgespräch","Strategie-, Kosten- und Honorarangebot","Persönliche Verfolgung nach Vollmacht"],detail:"Eine bestehende oder geplante Klage wird im Live-Gespräch geprüft. Nach Strategie- und Kostenangebot erfolgt die persönliche Verfolgung vor türkischen Gerichten auf Grundlage Ihrer Vollmacht."}],
en:[{icon:"fa-file-lines",price:"€49",title:"Written Legal Assessment Report within 24 Hours",features:["Secure question and document transfer","Case and document review","Written delivery within 24 hours"],detail:"Your information and documents are reviewed in their legal context. The comprehensive written report is delivered to your stated email address or client portal within 24 hours."},{icon:"fa-video",price:"€79",title:"45-Minute Live Online Consultation",features:["Select a suitable calendar time","Secure meeting link","45-minute personal roadmap"],detail:"A secure meeting link is sent for the time you choose. Your file, options and next legal steps are assessed together during the consultation."},{icon:"fa-gavel",price:"Quotation",title:"Litigation Follow-up in Turkey",features:["Initial request and live consultation","Strategy, cost and fee proposal","Personal follow-up after power of attorney"],detail:"An existing or prospective case is reviewed in a live consultation. Once strategy and cost terms are agreed, the case is personally followed before Turkish courts under your power of attorney."}]
};
const processCatalog={tr:[["24 Saat İçinde Yazılı Hukuki Değerlendirme Raporu",["Paket Seçimi & Soru/Belge İletimi","Hukuki İnceleme","24 Saat İçinde E-Postaya / Portala Kapsamlı Yazılı Rapor Teslimi"]],["45 Dakika Canlı Online Danışmanlık",["Paket Seçimi & Takvimden Saat Belirleme","Online Görüşme Linkinin İletilmesi","Belirlenen Gün/Saatte Birebir Görüntülü Danışmanlık & Yol Haritası"]],["Türkiye'de Dava Takibi (Teklif Usulü)",["Ön Talep & Randevu Oluşturulması","Canlı Görüşme & Hukuki Bilgilendirme","Dava Stratejisi, Masraf ve Ücret Teklifi","Konsolosluk/Noterden Vekâletname & Türkiye'de Bizzat Dava Takibi"]]],de:[["Schriftlicher Rechtsbewertungsbericht innerhalb von 24 Stunden",["Paketwahl & Übermittlung von Frage/Unterlagen","Rechtliche Prüfung","Umfassender schriftlicher Bericht binnen 24 Stunden per E-Mail / Portal"]],["45-minütige Live-Online-Beratung",["Paketwahl & Termin im Kalender","Übermittlung des Online-Besprechungslinks","Persönliche Video-Beratung und Roadmap zum vereinbarten Termin"]],["Prozessvertretung in der Türkei (Angebot)",["Voranfrage & Terminvereinbarung","Live-Gespräch & rechtliche Einordnung","Prozessstrategie, Kosten- und Honorarangebot","Vollmacht beim Konsulat/Notar & persönliche Prozessführung in der Türkei"]]],en:[["Written Legal Assessment Report within 24 Hours",["Package selection & question/document transfer","Legal review","Comprehensive written report delivered by email / portal within 24 hours"]],["45-Minute Live Online Consultation",["Package selection & calendar time","Online meeting link sent","One-to-one video advice and roadmap at the scheduled time"]],["Litigation Follow-up in Turkey (Quotation)",["Initial request & appointment","Live consultation & legal information","Case strategy, costs and fee proposal","Power of attorney at consulate/notary & personal litigation follow-up in Turkey"]]]};
const richDetails={tr:[["Mevzuat ve Yargıtay içtihatları somut olaya göre incelenir; tapu ve nüfus kayıtlarındaki riskler ayrıca belirtilir.","24 saatlik süre, soru ve belgelerin eksiksiz ulaşmasıyla başlar. Rapor PDF olarak şifreli teslim edilir; belgeler 14 gün sonunda otomatik imha edilir."],["Görüşme öncesinde evraklarınızı güvenli alana yükleyebilir, Almanya saatine göre esnek bir randevu seçebilirsiniz.","Uçtan uca şifreli WebRTC/Jitsi bağlantısındaki 45 dakikalık görüşme sonrası yazılı aksiyon özeti gönderilir."],["Dosya bizzat Av. Ahmet Turan Delice ve yetkili avukatlar tarafından yürütülür; UYAP entegrasyonu ile gelişmeler izlenir.","Harç ve masraf avansı şeffaf biçimde dökümlenir; konsolosluk vekâletname şablonu hazırlanır ve duruşma tutanakları portaldan takip edilir."]],de:[["Gesetzgebung und Yargıtay-Rechtsprechung werden fallbezogen geprüft; Risiken in Grundbuch- und Personenstandsregistern werden gesondert ausgewiesen.","Die 24-Stunden-Frist beginnt mit vollständigem Eingang. Der Bericht kommt verschlüsselt als PDF; Unterlagen werden nach 14 Tagen automatisch gelöscht."],["Vor dem Gespräch können Sie Unterlagen sicher hochladen und einen flexiblen Termin nach deutscher Zeit wählen.","Die 45-minütige Beratung erfolgt über eine Ende-zu-Ende-verschlüsselte WebRTC/Jitsi-Verbindung; danach erhalten Sie eine schriftliche Aktionszusammenfassung."],["Die Akte wird persönlich durch Av. Ahmet Turan Delice und bevollmächtigte Anwälte geführt; Entwicklungen werden über die UYAP-Integration verfolgt.","Gerichtsgebühren und Vorschüsse werden transparent aufgeschlüsselt; die Konsulatsvollmacht wird vorbereitet und Protokolle sind im Portal abrufbar."]],en:[["Legislation and Yargıtay precedents are assessed for your case, with separate title-deed and civil-registry risk checks.","The 24-hour period starts once the complete file is received. The report is delivered as an encrypted PDF; documents are automatically destroyed after 14 days."],["Upload documents securely before the session and select a flexible appointment in German time.","The 45-minute session uses an end-to-end encrypted WebRTC/Jitsi connection, followed by a written action summary."],["The case is personally handled by Av. Ahmet Turan Delice and authorised lawyers, with progress followed through UYAP integration.","Court costs and advances are itemised transparently; the consular power-of-attorney template is prepared and hearing records are available in the portal."]]};
translations.tr.brand_title="Dijital Hukuk | Av. Ahmet Turan Delice - Türk Hukuku Danışmanı";
translations.de.brand_title="Digitales Recht | Av. Ahmet Turan Delice - Berater für türkisches Recht";
translations.en.brand_title="Digital Law | Av. Ahmet Turan Delice - Turkish Law Consultant";

function translatePage(language) {
  const dictionary = translations[language] || translations.de;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = dictionary[element.dataset.i18n];
    if (text) element.innerHTML = text;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const text = dictionary[element.dataset.i18nPlaceholder];
    if (text) element.placeholder = text;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
    button.setAttribute("aria-pressed", button.dataset.lang === language);
  });
  localStorage.setItem("dh-language", language);
}

function setupLanguage() {
  const current = localStorage.getItem("dh-language") || "de";
  translatePage(current);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      translatePage(button.dataset.lang);
      renderHeader(button.dataset.lang);
      renderFooter(button.dataset.lang);
      setupLanguage();
      setupFeaturedSlider();
      setupBlogContent();
      renderPricing();
      renderProcess();
      setupCmsContent();
      setupFaq();
      setupSlider();
    });
  });
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  if (header) renderHeader(localStorage.getItem("dh-language") || "de");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  toggle?.addEventListener("click", () => links.classList.toggle("open"));
}
function renderHeader(language) {
  const header = document.querySelector(".site-header");
  if (header) {
    const copy={tr:["Ana Sayfa","Kurumsal","Hakkımızda","Yasal Bilgiler (Impressum)","KVKK / DSGVO","Hizmetlerimiz","Uzmanlık Alanları","Hizmet Kapsamı","Süreç","Rehber & SSS","Blog / Haberler","Müvekkil Portalı","Randevu Al"],de:["Startseite","Kanzlei","Über uns","Impressum","DSGVO","Leistungen","Rechtsgebiete","Leistungsumfang","Ablauf","Ratgeber & FAQ","Blog / Aktuelles","Mandantenportal","Termin buchen"],en:["Home","Firm","About us","Legal notice","GDPR","Services","Practice areas","Scope of services","Process","Guide & FAQ","Blog / News","Client portal","Book appointment"]}[language]||[];
    const page = location.pathname.split("/").pop() || "index.html";
    const active = (file) => page === file ? "active" : "";
    const brand={tr:["Dijital Hukuk","Av. Ahmet Turan Delice - Türk Hukuku Danışmanı"],de:["Digitales Recht","Av. Ahmet Turan Delice - Berater für türkisches Recht"],en:["Digital Law","Av. Ahmet Turan Delice - Turkish Law Consultant"]}[language];
    header.innerHTML = `<nav class="header-container nav nav-container" aria-label="${copy[0]}"><a class="identity" href="index.html"><span class="brand-mark">D</span><span class="brand-copy"><span class="brand-name">${brand[0]}</span><span class="brand-subtitle">${brand[1]}</span></span></a><button class="menu-toggle" aria-label="Menu"><i class="fa-solid fa-bars"></i></button><div class="nav-links"><a class="${active("index.html")}" href="index.html">${copy[0]}</a><div class="nav-dropdown"><button>${copy[1]} <i class="fa-solid fa-chevron-down"></i></button><div class="dropdown-menu"><a href="hakkimizda.html">${copy[2]}</a><a href="yasal.html#impressum">${copy[3]}</a><a href="yasal.html#datenschutz">${copy[4]}</a></div></div><div class="nav-dropdown"><button>${copy[5]} <i class="fa-solid fa-chevron-down"></i></button><div class="dropdown-menu"><a href="uzmanlik.html">${copy[6]}</a><a href="hizmetler.html">${copy[7]}</a><a href="hizmetler.html#surec">${copy[8]}</a></div></div><a class="${active("rehber.html")}" href="rehber.html">${copy[9]}</a><a class="${active("blog.html")}" href="blog.html">${copy[10]}</a><a class="${active("portal.html")}" href="portal.html">${copy[11]}</a><a class="btn appointment" href="randevu.html">${copy[12]}</a><span class="language-switcher" aria-label="Language"><button data-lang="tr">TR</button><button data-lang="de">DE</button><button data-lang="en">EN</button></span></div></nav>`;
    header.innerHTML = `<nav class="header-container nav nav-container" aria-label="${copy[0]}"><a class="identity" href="index.html"><span class="brand-mark">D</span><span class="brand-copy"><span class="brand-name">${brand[0]}</span><span class="brand-subtitle">${brand[1]}</span></span></a><button class="menu-toggle" aria-label="Menu"><i class="fa-solid fa-bars"></i></button><div class="nav-links"><a class="${active("index.html")}" href="index.html">${copy[0]}</a><div class="nav-dropdown"><button>${copy[1]} <i class="fa-solid fa-chevron-down"></i></button><div class="dropdown-menu"><a href="hakkimizda.html">${copy[2]}</a><a href="yasal.html#impressum">${copy[3]}</a><a href="yasal.html#datenschutz">${copy[4]}</a></div></div><div class="nav-dropdown"><button>${copy[5]} <i class="fa-solid fa-chevron-down"></i></button><div class="dropdown-menu"><a href="uzmanlik.html">${copy[6]}</a><a href="hizmetler.html">${copy[7]}</a><a href="surec.html">${copy[8]}</a></div></div><a class="${active("rehber.html")}" href="rehber.html">${copy[9]}</a><a class="${active("blog.html")}" href="blog.html">${copy[10]}</a><a class="${active("portal.html")}" href="portal.html">${copy[11]}</a><a class="btn appointment" href="randevu.html">${copy[12]}</a><span class="language-switcher" aria-label="Language"><button class="flag flag-tr" data-lang="tr" aria-label="Türkçe">🇹🇷</button><button class="flag flag-de" data-lang="de" aria-label="Deutsch">🇩🇪</button><button class="flag flag-en" data-lang="en" aria-label="English">🇬🇧</button></span></div></nav>`;
  }
}

function renderFooter(language) {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;
  const t = translations[language] || translations.de;
  footer.classList.add("corporate-footer");
  footer.innerHTML = `<div class="container footer-grid"><div><h3 data-i18n="footerQuick">${t.footerQuick}</h3><a href="index.html" data-i18n="footerHome">${t.footerHome}</a><a href="uzmanlik.html" data-i18n="footerAreas">${t.footerAreas}</a><a href="hizmetler.html" data-i18n="footerServices">${t.footerServices}</a><a href="surec.html" data-i18n="footerProcess">${t.footerProcess}</a><a href="randevu.html" data-i18n="footerBooking">${t.footerBooking}</a><a href="blog.html" data-i18n="footerBlog">${t.footerBlog}</a><a href="mailto:info@digitales-recht.de" data-i18n="footerContact">${t.footerContact}</a></div><div><h3 data-i18n="footerLegal">${t.footerLegal}</h3><a href="yasal.html#impressum" data-i18n="footerImprint">${t.footerImprint}</a><a href="yasal.html#datenschutz" data-i18n="footerPrivacy">${t.footerPrivacy}</a><a href="yasal.html#cookies" data-i18n="footerCookies">${t.footerCookies}</a><a href="yasal.html#streitbeilegung" data-i18n="footerDisputes">${t.footerDisputes}</a><a href="yasal.html#haftung" data-i18n="footerDisclaimer">${t.footerDisclaimer}</a></div></div><div class="container footer-bottom"><span data-i18n="footerCopy">${t.footerCopy}</span><span data-i18n="legalNotice">${t.legalNotice}</span></div>`;
}

function renderPricing() {
  const grid = document.querySelector("[data-pricing-grid]");
  if (!grid) return;
  const lang = localStorage.getItem("dh-language") || "de", t = translations[lang] || translations.de;
  const periods = { tr: ["/ rapor", "/ 45 dk", "/ dosya bazlı"], de: ["/ Bericht", "/ 45 Min.", "/ je Akte"], en: ["/ report", "/ 45 min", "/ per case"] };
  grid.innerHTML = serviceCatalog[lang].map((item, index) => `<article class="pricing-card"><div class="pricing-head"><i class="fa-solid ${item.icon}"></i><h2>${item.title}</h2><div class="pricing-amount">${item.price}<span class="pricing-period">${periods[lang][index]}</span></div></div><ul>${item.features.map(feature=>`<li><i class="fa-solid fa-check"></i>${feature}</li>`).join("")}</ul><div class="pricing-actions"><button class="btn btn-light" type="button" data-package-detail="${index}">${t.details}</button><a class="btn btn-gold" href="randevu.html?package=${index + 1}">${t.packageChoose}</a></div></article>`).join("");
  grid.querySelectorAll("[data-package-detail]").forEach(button => button.addEventListener("click", () => { const index = Number(button.dataset.packageDetail), item = serviceCatalog[lang][index], detail = document.querySelector("[data-service-detail]"); detail.innerHTML = `<h2>${item.title}</h2>${richDetails[lang][index].map(text => `<p>${text}</p>`).join("")}<a class="btn btn-gold" href="randevu.html?package=${index + 1}">${t.packageChoose} →</a>`; detail.classList.add("open"); detail.scrollIntoView({ behavior: "smooth", block: "nearest" }); }));
}

function renderProcess() {
  const grid = document.querySelector("[data-process-grid]");
  if (!grid) return;
  const lang = localStorage.getItem("dh-language") || "de";
  grid.innerHTML = processCatalog[lang].map(([title, steps]) => `<article class="process-card"><h2>${title}</h2><ol class="flow-timeline">${steps.map((step, index) => `<li><span>${index + 1}</span><p>${step}</p></li>`).join("")}</ol></article>`).join("");
}

const defaultPosts = [{id:1,title:"Almanya Boşanma Kararlarının Türkiye'de Tescili",category:"Tanıma/Tenfiz",key:"tenfiz",date:"08 Eylül 2026",read:"6 dk",image:"https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1200&q=80",summary:"Kararın kesinleşmesi, apostil ve nüfus kaydı bakımından temel kontrol noktaları."},{id:2,title:"Yurt Dışındaki Mirasçı İçin Veraset ve İntikal",category:"Miras",key:"miras",date:"02 Eylül 2026",read:"7 dk",image:"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",summary:"Türkiye'deki tereke, belge tedariki ve tapu intikalinde pratik süreç haritası."},{id:3,title:"Taşınmaz Satışında Vekâletname Kontrol Listesi",category:"Gayrimenkul",key:"tapu",date:"26 Ağustos 2026",read:"5 dk",image:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",summary:"Özel yetki, fotoğraf, tapu bilgileri ve satış öncesi dikkat edilmesi gerekenler."},{id:4,title:"Konsolosluk Noterlik Randevusuna Hazırlık",category:"Konsolosluk",key:"konsolosluk",date:"18 Ağustos 2026",read:"4 dk",image:"https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",summary:"Vekâletname işlemi öncesinde kimlik, belge ve tercüme kontrolü."}];
function migrateCms(){const pairs=[["dijital_hukuk_articles","dh-posts","articles"],["dijital_hukuk_faq","dh-faq","faqs"],["dijital_hukuk_services","dh-practice","services"],["dijital_hukuk_guide","dh-guide","guide"]];pairs.forEach(([target,...old])=>{if(localStorage.getItem(target))return;const source=old.map(k=>localStorage.getItem(k)).find(Boolean);if(source)localStorage.setItem(target,source)})}
function cleanupArticles(){migrateCms();try{const key="dijital_hukuk_articles",items=JSON.parse(localStorage.getItem(key)||"[]"),clean=items.filter(x=>!/^\s*(asd|test|deneme)/i.test(`${x.title||""} ${x.summary||""}`));if(clean.length!==items.length)localStorage.setItem(key,JSON.stringify(clean))}catch{}}
function resetDijitalHukukData(){["dijital_hukuk_articles","dijital_hukuk_faq","dijital_hukuk_services","dijital_hukuk_guide","dh-posts","articles","dh-faq","faqs","dh-practice","services","dh-guide","guide"].forEach(k=>localStorage.removeItem(k));location.reload()}
window.resetDijitalHukukData=resetDijitalHukukData;
function getPosts(){cleanupArticles();try{return [...defaultPosts,...JSON.parse(localStorage.getItem("dijital_hukuk_articles")||"[]")]}catch{return defaultPosts}}
function localizedPost(p,lang){const v=p.translations?.[lang];if(v)return {...p,...v};const base={de:{1:["Anerkennung deutscher Scheidungsurteile in der Türkei","Wichtige Punkte zu Rechtskraft, Apostille und Personenstandsregister."],2:["Erbschein und Nachlassübertragung für Erben im Ausland","Praktischer Ablauf für Nachlass, Unterlagen und Grundbuch."],3:["Vollmachts-Checkliste beim Immobilienverkauf","Besondere Befugnisse und wichtige Informationen vor dem Verkauf."],4:["Vorbereitung auf einen konsularischen Notartermin","Checkliste für Ausweis, Unterlagen und Übersetzungen."]},en:{1:["Registration of German divorce rulings in Turkey","Key checks for finality, apostille and civil registry records."],2:["Inheritance and transfer for heirs abroad","A practical roadmap for estate documents and title transfer."],3:["Power of attorney checklist for property sales","Special authority and key details to verify before the sale."],4:["Preparing for a consular notary appointment","A checklist for identification, documents and translations."]}};const x=base[lang]?.[p.id];return x?{...p,title:x[0],summary:x[1]}:p}
function postCard(raw){const p=localizedPost(raw,localStorage.getItem("dh-language")||"tr"),more={tr:"Devamını Oku",de:"Weiterlesen",en:"Read article"}[localStorage.getItem("dh-language")||"tr"];return `<article class="card article-card" data-category="${p.key||"all"}"><img class="article-image" src="${p.image}" alt="${p.title}"><p class="eyebrow">${p.category}</p><h3>${p.title}</h3><p>${p.summary}</p><div class="article-meta">${p.date} · ${p.read||"5 dk"} ${localStorage.getItem("dh-language")==="tr"?"okuma":"read"}</div><a class="btn btn-light" href="makale-detay.html?id=${p.id}">${more}</a></article>`}
function setupBlogContent(){const grid=document.querySelector("[data-blog-grid]");if(grid)grid.innerHTML=getPosts().map(postCard).join("")}
function setupFeaturedSlider(){const slider=document.querySelector(".news-slider");if(!slider)return;const lang=localStorage.getItem("dh-language")||"tr",ui={tr:["Türkiye'deki Haklarınıza Güvenli Erişim","Türkiye ile bağ kuran hukuki süreçlerinizi güvenli, şeffaf ve dijital olarak yönetin.","Hizmetleri İnceleyin"],de:["Sicherer Zugang zu Ihren Rechten in der Türkei","Verwalten Sie Ihre rechtlichen Angelegenheiten mit Türkei-Bezug sicher, transparent und digital.","Leistungen ansehen"],en:["Secure Access to Your Rights in Turkey","Manage your Turkey-related legal matters securely, transparently and digitally.","Explore services"]}[lang];const platform={id:"platform",title:ui[0],category:"Dijital Hukuk",date:"",summary:ui[1],image:"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",href:"hizmetler.html",cta:ui[2]};const posts=[platform,...getPosts().filter(p=>p.featured).map(p=>localizedPost(p,lang))];slider.innerHTML=`<div class="container headline-slider"><div class="headline-content">${posts.map((p,i)=>`<article class="headline ${i?"":"active"}"><div><span class="slide-tag">${p.category}${p.date?' · '+p.date:''}</span><h1>${p.title}</h1><p>${p.summary}</p><a class="btn btn-gold" href="${p.href||'makale-detay.html?id='+p.id}">${p.cta||({tr:'Makaleyi Oku',de:'Artikel lesen',en:'Read article'}[lang])} <i class="fa-solid fa-arrow-right"></i></a></div><img src="${p.image}" alt="${p.title}"></article>`).join("")}</div><button class="headline-arrow prev" data-slide-prev aria-label="Previous"><i class="fa-solid fa-chevron-left"></i></button><button class="headline-arrow next" data-slide-next aria-label="Next"><i class="fa-solid fa-chevron-right"></i></button><div class="headline-dots">${posts.map((p,i)=>`<button class="${i?"":"active"}" data-slide-to="${i}" aria-label="Slide ${i+1}"></button>`).join("")}</div></div>`}

function setupRevealAndTilt() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 7}deg) translateY(-3px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      item.classList.toggle("open");
      button.setAttribute("aria-expanded", item.classList.contains("open"));
    });
  });
}

function setupPortal() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".tab")
        .forEach((item) => item.classList.remove("active"));
      document
        .querySelectorAll(".tab-pane")
        .forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab)?.classList.add("active");
    });
  });
  const zone = document.querySelector(".dropzone");
  const input = document.querySelector("#documents");
  const list = document.querySelector(".file-list");
  if (!zone || !input || !list) return;
  const displayFiles = (files) => {
    list.innerHTML = "";
    [...files].forEach((file) => {
      if (!/\.(pdf|jpe?g|png)$/i.test(file.name)) return;
      const item = document.createElement("li");
      item.textContent = `✓ ${file.name} — ${Math.ceil(file.size / 1024)} KB`;
      list.appendChild(item);
    });
  };
  zone.addEventListener("click", () => input.click());
  input.addEventListener("change", () => displayFiles(input.files));
  ["dragenter", "dragover"].forEach((eventName) =>
    zone.addEventListener(eventName, (event) => {
      event.preventDefault();
      zone.classList.add("dragover");
    }),
  );
  ["dragleave", "drop"].forEach((eventName) =>
    zone.addEventListener(eventName, (event) => {
      event.preventDefault();
      zone.classList.remove("dragover");
    }),
  );
  zone.addEventListener("drop", (event) =>
    displayFiles(event.dataTransfer.files),
  );

  const countdown = document.querySelector("[data-destruction-count]");
  const expiry = Date.now() + 14 * 24 * 60 * 60 * 1000;
  if (countdown) {
    const updateCountdown = () => {
      const remaining = Math.max(0, expiry - Date.now());
      const days = Math.floor(remaining / 86400000);
      const hours = Math.floor((remaining % 86400000) / 3600000);
      countdown.textContent = `${days} gün ${hours} saat`;
    };
    updateCountdown();
    window.setInterval(updateCountdown, 60000);
  }

  document.querySelector("[data-meeting]")?.addEventListener("click", () => {
    const message = document.querySelector("[data-meeting-message]");
    if (message) {
      message.textContent =
        "Görüşme odası bağlantısı güvenli randevu teyidinden sonra açılır.";
    }
  });
}

function setupBooking() {
  const slots = document.querySelectorAll(".slot");
  slots.forEach((slot) =>
    slot.addEventListener("click", () => {
      slots.forEach((item) => item.classList.remove("selected"));
      slot.classList.add("selected");
    }),
  );
  const form = document.querySelector("#booking-form");
  const account = document.querySelector("[data-create-account]");
  const password = document.querySelector(".account-password");
  account?.addEventListener("change", () => {
    password.hidden = !account.checked;
    password.querySelector("input").required = account.checked;
  });
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector(".payment-message");
    const language = localStorage.getItem("dh-language") || "tr";
    const valid =
      form.checkValidity() && document.querySelector(".slot.selected");
    message.textContent = valid
      ? translations[language].paymentOk
      : translations[language].paymentError;
    if (valid && account?.checked) {
      const fields = form.querySelectorAll("input");
      const email = [...fields].find((field) => field.type === "email")?.value;
      const passwordValue = password?.querySelector("input")?.value;
      localStorage.setItem("dh-member-account", JSON.stringify({ email, passwordConfigured: Boolean(passwordValue), createdAt: new Date().toISOString() }));
    }
    message.style.color = valid ? "#15803d" : "#b91c1c";
    if (!valid) form.reportValidity();
  });
}

function setupSlider() {
  const slides = [...document.querySelectorAll(".headline, .slide")];
  if (!slides.length) return;
  let index = 0;
  let paused = false;
  const render = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, current) =>
      slide.classList.toggle("active", current === index),
    );
    document
      .querySelectorAll("[data-slide-to]")
      .forEach((dot, current) =>
        dot.classList.toggle("active", current === index),
      );
  };
  document
    .querySelector("[data-slide-prev]")
    ?.addEventListener("click", () => render(index - 1));
  document
    .querySelector("[data-slide-next]")
    ?.addEventListener("click", () => render(index + 1));
  document
    .querySelectorAll("[data-slide-to]")
    .forEach((dot) =>
      dot.addEventListener("click", () => render(Number(dot.dataset.slideTo))),
    );
  document
    .querySelector("[data-slider-pause]")
    ?.addEventListener("click", (event) => {
      paused = !paused;
      event.currentTarget.setAttribute("aria-pressed", String(paused));
      event.currentTarget.lastChild.textContent = paused
        ? " Başlat"
        : " Duraklat";
    });
  window.setInterval(() => {
    if (!paused) render(index + 1);
  }, 5000);
}

function setupGuideToggle() {
  document
    .querySelector("[data-guide-toggle]")
    ?.addEventListener("click", (event) => {
      const steps = document.querySelector(".guide-steps");
      steps?.classList.toggle("open");
      event.currentTarget.setAttribute(
        "aria-expanded",
        String(steps?.classList.contains("open")),
      );
    });
}

function setupBlogFilters() {
  const search = document.querySelector("[data-blog-search]");
  const cards = [...document.querySelectorAll(".article-card")];
  let category = "all";
  const apply = () => {
    const term = (search?.value || "").toLocaleLowerCase("tr");
    cards.forEach((card) =>
      card.classList.toggle(
        "hidden",
        !(category === "all" || card.dataset.category === category) ||
          !card.textContent.toLocaleLowerCase("tr").includes(term),
      ),
    );
  };
  search?.addEventListener("input", apply);
  document.querySelectorAll("[data-category]").forEach((button) =>
    button.addEventListener("click", () => {
      category = button.dataset.category;
      document
        .querySelectorAll("[data-category]")
        .forEach((item) => item.classList.toggle("active", item === button));
      apply();
    }),
  );
}

/* CMS-managed three-language site content. Admin edits are stored as arrays in localStorage. */
const defaultPractice=[
 {icon:"fa-passport",tr:["Göçmenlik, Vize & Aile Birleşimi","Türkiye kaynaklı belge, konsolosluk ve aile birleşimi süreçleri."],de:["Migration, Visum & Familiennachzug","Unterstützung bei türkischen Dokumenten, Konsulat und Familiennachzug."],en:["Immigration, Visa & Family Reunion","Support for Turkish documents, consular and family-reunion matters."]},
 {icon:"fa-people-roof",tr:["Boşanma, Velayet & Tanıma-Tenfiz","Yabancı kararların Türkiye’de tanınması, velayet ve nafaka."],de:["Scheidung, Sorgerecht & Anerkennung","Anerkennung ausländischer Entscheidungen, Sorge- und Unterhaltsfragen."],en:["Divorce, Custody & Recognition","Recognition of foreign rulings, custody and maintenance matters."]},
 {icon:"fa-scroll",tr:["Miras & Tereke Hukuku","Veraset belgesi, tereke tespiti ve mirasın intikali."],de:["Erb- & Nachlassrecht","Erbschein, Nachlassfeststellung und Übertragung."],en:["Inheritance & Estate Law","Heirship certificates, estate assessment and transfer."]},
 {icon:"fa-building",tr:["Gayrimenkul, Tapu & Tahliye","Tapu, kira, tahliye ve taşınmaz uyuşmazlıkları."],de:["Immobilien, Grundbuch & Räumung","Grundbuch-, Miet- und Räumungsangelegenheiten."],en:["Property, Title & Eviction","Title, lease, eviction and real-estate disputes."]},
 {icon:"fa-coins",tr:["İcra & Alacak Tahsili","Alacak takibi ve Türkiye’de icra süreçleri."],de:["Vollstreckung & Forderungseinzug","Forderungsmanagement und Vollstreckung in der Türkei."],en:["Enforcement & Debt Collection","Debt recovery and enforcement proceedings in Turkey."]},
 {icon:"fa-briefcase",tr:["Şirketler & Ticaret Hukuku","Şirket kuruluşu, sözleşmeler ve ticari yatırımlar."],de:["Gesellschafts- & Handelsrecht","Gründung, Verträge und Handelsinvestitionen."],en:["Corporate & Commercial Law","Incorporation, contracts and commercial investments."]},
 {icon:"fa-scale-balanced",tr:["Türk Ceza Hukuku Süreçleri","Şikâyet, soruşturma ve ceza dosyası takibi."],de:["Türkische Strafverfahren","Unterstützung bei Anzeige, Ermittlungen und Verfahren."],en:["Turkish Criminal Law Proceedings","Support with complaints, investigations and proceedings."]}
];
const defaultGuide=[
 {tr:["Randevu","İlgili dış temsilciliğin güncel sisteminden noterlik işlemi randevusu seçin."],de:["Termin","Wählen Sie im aktuellen System der Auslandsvertretung einen Notartermin."],en:["Appointment","Choose a notarial appointment in the current consular booking system."]},
 {tr:["Belgeler","Kimlik, pasaport, T.C. kimlik numarası ve vekil bilgilerini önceden hazırlayın."],de:["Unterlagen","Bereiten Sie Ausweis, Pass, türkische ID-Nummer und Vertreterdaten vor."],en:["Documents","Prepare your ID, passport, Turkish ID number and representative details."],},
 {tr:["Fotoğraflı vekâlet","Taşınmaz işlemlerinde fotoğraflı özel vekâlet gerekebilir; temsilcilikten teyit edin."],de:["Vollmacht mit Foto","Für Immobilien kann eine besondere Vollmacht mit Foto nötig sein; bitte bestätigen lassen."],en:["Photographed power of attorney","Property matters may require a special power of attorney with a photo; confirm with the mission."]},
 {tr:["Apostil / tercüme","Yabancı resmî belgelerde apostil veya yeminli tercüme ihtiyacını doğrulayın."],de:["Apostille / Übersetzung","Prüfen Sie, ob ausländische Urkunden Apostille oder beglaubigte Übersetzung benötigen."],en:["Apostille / translation","Confirm whether foreign official documents require an apostille or sworn translation."]}
];
const defaultFaq=[
 {tr:["Vekâletname nerede düzenlenir?","Türkiye Cumhuriyeti dış temsilciliklerinin noterlik biriminde düzenlenebilir."],de:["Wo wird eine Vollmacht ausgestellt?","Sie kann bei der Notarstelle einer türkischen Auslandsvertretung ausgestellt werden."],en:["Where is a power of attorney issued?","It can be issued at the notary section of a Turkish foreign mission."]},
 {tr:["Mirasçılık belgesi Almanya'dan alınabilir mi?","Belge türüne göre Türk makamları ve konsolosluk işlemleri değerlendirilmelidir."],de:["Kann ein Erbschein in Deutschland beantragt werden?","Je nach Dokument sind türkische Behörden und Konsulatsverfahren zu prüfen."],en:["Can an heirship certificate be obtained from Germany?","Turkish authorities and consular procedures must be assessed for the document type."]},
 {tr:["Tapu harçlarını kim öder?","Yükümlülük işlem türüne ve tarafların anlaşmasına göre değerlendirilir."],de:["Wer zahlt Grundbuchgebühren?","Die Pflicht richtet sich nach Vorgang und Vereinbarung der Parteien."],en:["Who pays title-deed fees?","The obligation depends on the transaction and the parties' agreement."]},
 {tr:["UYAP üzerinden dava takibi yapılabilir mi?","Yetkili avukatlar dosyaları UYAP üzerinden takip edebilir."],de:["Kann ein Verfahren über UYAP verfolgt werden?","Berechtigte Anwälte können Akten über UYAP verfolgen."],en:["Can a case be followed through UYAP?","Authorised lawyers can follow case files through UYAP."]},
 {tr:["Tenfiz davası ne kadar sürer?","Süre mahkeme yoğunluğu, tebligat ve belgelerin durumuna göre değişir."],de:["Wie lange dauert eine Vollstreckbarerklärung?","Die Dauer hängt von Gericht, Zustellung und Unterlagen ab."],en:["How long does enforcement recognition take?","Timing depends on the court, service and completeness of documents."]},
 {tr:["Video görüşmesi gizli midir?","Görüşmeler mesleki sır ve gizlilik ilkeleri gözetilerek yapılır."],de:["Ist eine Videoberatung vertraulich?","Gespräche erfolgen unter Wahrung von Vertraulichkeit und Berufsgeheimnis."],en:["Is a video consultation confidential?","Consultations are conducted subject to confidentiality and professional secrecy."]}
];
function cmsData(key,defaults){migrateCms();const standardized={"dh-faq":"dijital_hukuk_faq","dh-practice":"dijital_hukuk_services","dh-guide":"dijital_hukuk_guide"}[key]||key;try{return JSON.parse(localStorage.getItem(standardized)||localStorage.getItem(key)||"null")||defaults}catch{return defaults}}
function setupCmsContent(){const lang=localStorage.getItem("dh-language")||"tr",cta={tr:"Bu Konuda Danışmanlık Al",de:"Beratung zu diesem Thema",en:"Get advice on this topic"}[lang];const practices=document.querySelector("[data-practice-grid]");if(practices)practices.innerHTML=cmsData("dh-practice",defaultPractice).map(x=>{const v=x[lang]||x.tr;return `<article class="card tilt-card"><div class="card-icon"><i class="fa-solid ${x.icon||'fa-scale-balanced'}"></i></div><h3>${v[0]}</h3><p>${v[1]}</p><a class="btn" href="randevu.html">${cta}</a></article>`}).join("");const guide=document.querySelector("[data-guide-steps]");if(guide)guide.innerHTML=`<div class="grid grid-4" style="margin-top:30px">${cmsData("dh-guide",defaultGuide).map((x,i)=>{const v=x[lang]||x.tr;return `<article class="card"><div class="card-icon">${i+1}</div><h3>${v[0]}</h3><p>${v[1]}</p></article>`}).join("")}</div>`;const faq=document.querySelector("[data-faq-list]");if(faq)faq.innerHTML=cmsData("dh-faq",defaultFaq).map(x=>{const v=x[lang]||x.tr;return `<div class="faq-item"><button class="faq-question">${v[0]}<i class="fa-solid fa-plus"></i></button><div class="faq-answer"><div><p>${v[1]}</p></div></div></div>`}).join("");}
function setupAdminReset(){const anchor=document.querySelector("#postAdd");if(!anchor||document.querySelector("[data-reset-data]"))return;const button=document.createElement("button");button.type="button";button.className="btn danger";button.dataset.resetData="";button.textContent="Fabrika Ayarlarına Dön";button.addEventListener("click",()=>{if(confirm("Tüm yönetilen içerikler silinecek. Devam edilsin mi?"))resetDijitalHukukData()});anchor.before(button)}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderFooter(localStorage.getItem("dh-language") || "de");
  setupLanguage();
  renderPricing();
  renderProcess();
  setupFeaturedSlider();
  setupBlogContent();
  setupCmsContent();
  setupAdminReset();
  setupRevealAndTilt();
  setupFaq();
  setupPortal();
  setupBooking();
  setupSlider();
  setupGuideToggle();
  setupBlogFilters();
});
