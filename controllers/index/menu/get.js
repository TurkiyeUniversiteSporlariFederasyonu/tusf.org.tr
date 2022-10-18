const Announcement = require('../../../models/announcement/Announcement')

module.exports = (req, res) => {
  const url = req.originalUrl.split('/').join('');

  getPageContent(url, (err, content) => {
    if (err) return res.redirect('/error?message=' + err);

    Announcement.findAnnouncementsByFilters({ limit: 5 }, (err, announcements) => {
      if (err) return res.redirect('/error?message=' + err);
  
      return res.render('index/template', {
        page: 'index/template',
        title: content.name,
        includes: {
          external: {
            css: ['general', 'header', 'page'],
            js: ['ancestorWithClassName', 'header', 'page', 'serverRequest']
          }
        },
        name: content.name,
        url: '/' + url,
        announcements,
        template: content.template
      });
    });
  });
}


function getPageContent(url, callback) {
  const content = {
    about_us: {
      name: 'Hakkımızda',
      template: [
        {
          type: 'image',
          content: 'https://tusf.org/Data/Sites/1/images/tusf.png'
        },
        {
          type: 'title',
          content: 'Amaç'
        },
        {
          type: 'text',
          content: 'Yüksek öğretim kurumlarında her düzeyde sporu çok yönlü olarak tanıtmak, sevdirmek, spor yapmaya yönlendirmek için gerekli çalışmaları yapmak, üniversiteler arasında yapılacak yurtiçi ve yurtdışı yarışmaları ve faaliyetleri yürütmek ve bu kurumlar arasında koordinasyonu sağlamaktır.'
        },
        {
          type: 'title',
          content: 'Kuruluş ve Tarihçe'
        },
        {
          type: 'text',
          content: 'Yüksek Öğretim Kurumları ve orta dereceli okulların spor faaliyetleri geçmiş yıllarda Milli Eğitim Bakanlığına bağlı muhtelif birimler tarafından organize edilmiştir. 1986- 1996 yılları arasında Gençlik ve Spor Genel Müdürlüğü bünyesinde bulunan Spor Faaliyetleri Daire Başkanlığı tarafından organize edilmiştir. 1996 yılında Merkez Danışma Kurulunun aldığı karar ile “ Üniversite Spor Faaliyetleri Federasyonu” adı altında, Prof. Dr. Emin ERGEN başkanlığında kurulmuştur.'
        },
        {
          type: 'text',
          content: 'Federasyonun adı, Prof. Dr. Kemal TAMER\'in başkanlığında ki yönetim kurulunun teklifi üzerine, 08.07.1997 tarihinde “Üniversite Sporları Federasyonu” olarak değiştirilmiştir.'
        },
        {
          type: 'text',
          content: '2005 yılında İzmir’ de yapılan Dünya Üniversiteler Yaz Oyunları ve 2011 yılında Erzurum’da yapılan Dünya Üniversiteler Kış Oyunları ile büyük organizasyonlara ev sahipliği yapan Federasyonumuz günümüzde 71 spor branşında faaliyet göstermekte ve yılda ortalama 166 ulusal spor organizasyonu yapmaktadır.'
        },
        {
          type: 'text',
          content: 'Uluslararası Üniversite Sporları Federasyonu (FISU) ve Avrupa Üniversite Sporları Birliği (EUSA) üyesi olan Federasyonumuz, 28.06.2006 tarihinde İdari ve Mali yönden özerk yapıya kavuşmuştur.'
        }
      ]
    },
    minister: {
      name: 'Bakan',
      template: [
        {
          type: 'image',
          content: 'https://tusf.org/Data/Sites/1/images/genclik_ve_spor_bakani_muharrem-kasapoglu-tssf.jpg'
        },
        {
          type: 'title',
          content: 'Dr. Mehmet Muharrem Kasapoğlu'
        },
        {
          type: 'subtitle',
          content: 'T.C. Gençlik ve Spor Bakanı'
        },
        {
          type: 'text',
          content: 'Dr. Mehmet Kasapoğlu, 1976 yılında İstanbul’da doğdu. Marmara Üniversitesi İktisadi ve İdari Bilimler Fakültesi İşletme Bölümü’nden mezun olan Dr. Kasapoğlu, aynı üniversitede mahalli idareler ve yerinden yönetim programında yüksek lisans yaptı. ABD’deki Florida State Üniversitesi İşletme Fakültesi’nde yönetim organizasyonu alanında araştırmacı, uzman ve proje koordinatörü olarak çalışan Dr. Mehmet Kasapoğlu, Palm Beach Atlantic Üniversitesi’nde işletme yüksek lisansını tamamladı. Dr. Kasapoğlu, İstanbul Üniversitesi’nden yerel istihdam konusundaki çalışmasıyla doktora derecesi aldı.'
        },
        {
          type: 'text',
          content: 'Türkiye ve yurt dışındaki öğrencilik yıllarında sivil toplum kuruluşlarında aktif görev alan Dr. Kasapoğlu, özel sektörde uluslararası ticaret alanında çalıştı.'
        },
        {
          type: 'text',
          content: 'Dr. Mehmet Kasapoğlu, 2009 yılında Başbakanlık Müşavirliği’ne atanmasının ardından Çalışma ve Sosyal Güvenlik Bakanlığı, Milli Eğitim Bakanlığı ile Gençlik ve Spor Bakanlığı’nda çeşitli görevler üstlendi.'
        },
        {
          type: 'text',
          content: 'Spor Toto Teşkilat Başkanlığı döneminde sporun tabana yayılması ve herkes için spora erişilebilirliğin sağlanması amacıyla çok sayıda tesisin ülkemize kazandırılmasına katkıda bulunan Dr. Kasapoğlu, gençlik, eğitim ve spor faaliyetlerinin finansmanı ile sportif istihdamın artırılması konularına özellikle odaklandı.'
        },
        {
          type: 'text',
          content: 'Evli ve iki çocuk babası olan Dr. Mehmet Kasapoğlu, İngilizce ve Arapça biliyor.'
        }
      ]
    },
    president: {
      name: 'Başkan',
      template: [
        {
          type: 'image',
          content: 'https://tusf.org/Data/Sites/1/images/profdrmehmetgunay.jpg'
        },
        {
          type: 'title',
          content: 'Prof Dr. Mehmet Günay'
        },
        {
          type: 'subtitle',
          content: 'Türkiye Üniversite Sporları Federasyonu Başkanı'
        },
        {
          type: 'text',
          content: '1966 yılında Afyonkarahisar’da doğdu.'
        },
        {
          type: 'text',
          content: 'İlk, orta ve lise öğrenimini Afyonkarahisar’da tamamladı.'
        },
        {
          type: 'text',
          content: '1987 yılında Gazi Üniversitesi, Gazi Eğitim Fakültesi Beden Eğitimi ve Spor Öğretmenliği bölümünden mezun oldu.'
        },
        {
          type: 'text',
          content: '1993 yılında Gazi Üniversitesi Sağlık Bilimleri Enstitüsü Beden Eğitimi ve Spor Öğretimi Anabilim Dalında Eğitimini tamamladı. 1996 yılında Üniversitelerarası Kurul tarafından Doçentlik unvanı verilen Mehmet Günay, 2002 yılında Gazi Üniversitesi Spor Bilimleri Fakültesi ’ne Profesör olarak atandı. Halen buradaki görevine devam etmektedir.'
        },
        {
          type: 'text',
          content: '1997-2002 yılları arasında Gazi Üniversitesi Beden Eğitimi ve Spor Yüksekokulu Müdür Yardımcılığı, 2002-2005 yılları arasında Gazi Üniversitesi Kırşehir Eğitim Fakültesi Dekanlığı, 2008-2012 yılları arasında Gazi Üniversitesi Rektör Danışmanlığı, 2010-2012 yıllarında Gazi Üniversitesi Beden Eğitimi ve Spor Yüksekokulu Müdürlüğü ve 2016-2020 Gazi Üniversitesi Spor Bilimleri Fakültesi Dekanlığı görevlerini yürütmüştür.'
        },
        {
          type: 'text',
          content: '1992 yılından beri üyesi olduğu Spor Bilimleri Derneği’nde 2015-2017 yılları arasında başkan yardımcılığı yapan Günay, 2017 yılından itibaren dernek başkanlığı görevini yürütmektedir. Ayrıca 2018 yılından itibaren kuruculuğuna öncülük ettiği Avrasya Spor Bilimleri Birliği Kurucu Başkanlığı ve Gençlik ve Spor Bakanlığı Bilim Kurulu Koordinatörlüğü görevini yürütmektedir.'
        },
        {
          type: 'text',
          content: '10-11 Eylül 2021 tarihleri arasında Macaristan\'ın Budapeşte kentinde gerçekleştirilen Avrupa Üniversite Sporları Birliği (EUSA) Genel Kurul oylamasında Prof.Dr. Mehmet GÜNAY EUSA Yönetim Kurulu Üyeliğine seçilmiştir.'
        },
        {
          type: 'text',
          content: '5 Kasım 2021 tarihinde Türkiye Üniversite Sporları Federasyonu Başkanlığına seçilmiştir.'
        },
        {
          type: 'text',
          content: 'Prof. Dr. Mehmet GÜNAY’ ın ulusal ve uluslararası 132 bilimsel makale, 121 tebliğ ve 16 adet yayınlanmış kitabı bulunmaktadır.'
        }
      ]
    },
    vision: {
      name: 'Misyon & Vizyon',
      template: [
        {
          type: 'image',
          content: 'https://tusf.org/Data/Sites/1/images/misyonvizyon1.png'
        },
        {
          type: 'title',
          content: 'Misyonumuz'
        },
        {
          type: 'text',
          content: 'Ülkemizde ve KKTC’de ki Yüksek Öğretim Kurumlarında her düzeyde sporu çok yönlü olarak tanıtmak, sevdirmek, spor yapmaya yönlendirmek için gerekli çalışmaları yapmak, üniversiteler arasında yapılacak yurt içi ve yurtdışı yarışmaları ve faaliyetleri yürütmek ve bu kurumlar arasında koordinasyonu sağlamaktır.'
        },
        {
          type: 'title',
          content: 'Vizyonumuz'
        },
        {
          type: 'text',
          content: 'Federasyon faaliyetleri ile ilgili üniversite gençliği içinde farkındalık yaratarak daha fazla gencimize spor yaptırmak;'
        },
        {
          type: 'text',
          content: 'Daha fazla üniversite öğrencisinin faaliyetlerden faydalanmasını sağlamak;'
        },
        {
          type: 'text',
          content: 'Gerek ulusal gerekse uluslararası alanlarda gerçekleştirilen spor organizasyonları anlamında ufuklarını açmak ve onları bu alanlara yönlendirerek aktif kılmak;'
        },
        {
          type: 'text',
          content: 'Federasyonumuz bünyesinde yer alan mevcut branşlara ilave olarak, üniversitelerimizden gelen talepler doğrultusunda yeni spor branşlarını faaliyet takvimine alarak, bu branşların üniversitelerde yapılabilmesini sağlamaktır;'
        }
      ]
    },
    plan: {
      name: 'Stratejik Plan',
      template: [
        {
          type: 'title',
          content: 'Stratejik Plan'
        },
        {
          type: 'text',
          content: 'Stratejik planı görmek için aşağıdaki linke tıklayın.'
        },
        {
          type: 'link',
          content: 'Stratejik Plan',
          url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/5c0d84c6-d172-4c0a-92a2-2568ffc3bfa1637807025917330199.pdf'
        }
      ]
    },
    directory_board: {
      name: 'Yönetim Kurulu',
      template: [
        {
          type: 'grid',
          content: [
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/de6a20fb-c673-451a-b552-af15e040fd83637768880838116030.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/640b5372-8d51-4038-bfa0-103c66e72c4c..jpeg',
              title: 'Prof. Dr. Mehmet Günay',
              subtitle: 'Başkan'
            }
          ]
        },
        {
          type: 'grid',
          content: [
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/74a06e52-cab5-46c4-8abe-e4e1cb9f78fc637757633081340882.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/c81b2898-15f8-46bd-b454-736ac66d9ad3..png',
              title: 'Doç. Dr. Serdar ELER',
              subtitle: 'Asbaşkan / Başkan V.'
            }
          ]
        },
        {
          type: 'grid',
          content: [
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/845b2b9b-dbd6-4771-95b0-1de48ef1321a637753452003652824.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/5893aec8-2908-4f9a-b562-5cddbfba0a70..jpg',
              title: 'Prof. Dr. Hürmüz KOÇ',
              subtitle: 'Asbaşkan'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/912d3f63-7333-4c34-939e-73c2b684a8e6637753453010915723.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/5e8adb5d-6d91-4017-85ce-3ae2613b1675..jpg',
              title: 'Prof. Dr. Adem KORKMAZ',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/56edf5db-03fe-4e99-82eb-786fbc09c331637753452679651676.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/2e9be592-3572-4515-8c27-3603a4f8a6ca..jpg',
              title: 'Prof. Dr. Arif ÖZAYDIN',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/fab61e55-5b24-45ca-b8ea-84a431b3396f637769356035488686.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/98d3803b-ede1-40f3-9415-e4ef972c2637..jpg',
              title: 'Prof. Dr. Mehmet GÜÇLÜ',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/09a27944-aaa7-466e-96e7-d4dadb98da9a637758493712935279.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/6b8909d4-a90b-4a3b-9073-69e83d8e5fca..png',
              title: 'Prof. Dr. Mehmet Çağrı ÇETİN',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/e36a3370-4cd6-4a38-9791-10e2c469bb8a637769022909085149.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/049a6a91-a0e6-47a7-8a4f-89783c1c4ea3..jpeg',
              title: 'Prof. Dr. Selahattin AKPINAR',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/7ae02737-7150-430d-a97e-982e1c38374a637753455264166278.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/954ec24b-356e-46b2-b292-53e8bfc86ed1..jpg',
              title: 'Prof. Dr. Murat KALDIRIMCI',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/a4c5eadf-2df8-4de2-8be2-f4f82317b969637753455574458988.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/84c17515-9f7f-4432-b76e-c2cb4f6d4648..jpg',
              title: 'Doç.Dr.Tuba KIZILET',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/2e2e935a-cac8-41f5-9570-217ade0aecbf637753456135196177.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/277e7f15-e155-498c-b372-20fe17541a94..jpg',
              title: 'Mustafa DOĞRU',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/4540c393-fbcb-4b52-8282-1d519df5fd1e637753455867311468.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/7765754c-fee7-40e4-99d8-4765ae49a46f..JPG',
              title: 'TANER KARABULUT',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/8422128c-2e33-4272-abdc-4aba2f05169f637753456473840453.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/559d2ad1-90a6-4221-956f-f4bf5fd25cdf..jpg',
              title: 'İbrahim ERDOĞDU',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/f79bae37-173b-43b2-b1fd-772c7e0ee20f637753456711016882.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/9300a2de-ea7d-460e-9320-32fb402f31f8..jpg',
              title: 'Hulusi YİĞİT',
              subtitle: 'Yönetim Kurulu Üyesi'
            },
            {
              url: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/ee9e049b-1ef7-4950-9b75-3b2a9fd18bbd637798333912690933.pdf',
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/5f1c4119-f3cd-4919-9d48-f24ab42eeb7c..png',
              title: 'Hasan IŞIKTAŞ',
              subtitle: 'Yönetim Kurulu Üyesi'
            }
          ]
        }
      ]
    },
    rector_board: {
      name: 'Rektörler Danışma Kurulu',
      template: [
        {
          type: 'table',
          header: {
            key: 'Ad Soyad',
            value: 'Üniversite'
          },
          keys: [
            {
              type: 'link',
              content: 'Prof. Dr. Sedat MURAT',
              url: 'https://www.comu.edu.tr/dosyalar/rektor.pdf'
            },
            {
              type: 'link',
              content: 'Prof. Dr. Nükhet HOTAR',
              url: 'https://www.deu.edu.tr/rektor_cv/'
            },
            {
              type: 'link',
              content: 'Prof. Dr. Musa YILDIZ',
              url: 'https://gazi.edu.tr/view/page/249462/rektor'
            },
            {
              type: 'link',
              content: 'Prof. Dr. Süleyman ÖZDEMİR',
              url: 'https://www.bandirma.edu.tr/tr/www/Sayfa/Goster/Rektor-191'
            },
            {
              type: 'link',
              content: 'Prof. Dr. Ali Osman ÖZTÜRK',
              url: 'https://www.hitit.edu.tr/rektor'
            },
            {
              type: 'link',
              content: 'Prof. Dr. Hamdullah ÇUVALCI',
              url: 'https://avesis.ktu.edu.tr/hcuvalci'
            },
            {
              type: 'link',
              content: 'Prof. Dr. Erhan TABAKOĞLU',
              url: 'https://personel.trakya.edu.tr/erhantabakoglu#.YekLjaZBxPY'
            }
          ],
          values: [
            {
              type: 'text',
              content: 'Çanakkale Onsekizmart Üniversitesi Rektörü'
            },
            {
              type: 'text',
              content: 'Dokuz Eylül Üniversitesi Rektörü'
            },
            {
              type: 'text',
              content: 'Gazi Üniversitesi Rektörü'
            },
            {
              type: 'text',
              content: 'Bandırma Onyedi Eylül Üniversitesi Rektörü'
            },
            {
              type: 'text',
              content: 'Hitit üniversitesi Rektörü'
            },
            {
              type: 'text',
              content: 'Karadeniz Teknik Üniversitesi Rektörü'
            },
            {
              type: 'text',
              content: 'Trakya Üniversitesi Rektörü'
            }
          ]
        }
      ]
    },
    president_concey: {
      name: 'Sağlık, Spor ve Spor Daire Başkanları Konseyi',
      template: [
        {
          type: 'title',
          content: 'YÜRÜTME KURULU'
        },
        {
          type: 'table',
          header: {
            key: 'Ad Soyad',
            value: 'Görev Yeri'
          },
          keys: [
            {
              type: 'text',
              content: 'Metin UYGUR'
            },
            {
              type: 'text',
              content: 'Ahsen KÜÇÜKDURMAZ'
            },
            {
              type: 'text',
              content: 'Mehmet BAYAR'
            },
            {
              type: 'text',
              content: 'Erdal KORKMAZ'
            },
            {
              type: 'text',
              content: 'Mete Burak SÖNMEZ'
            },
            {
              type: 'text',
              content: 'Aysel DAMAR'
            },
            {
              type: 'text',
              content: 'Mehmet AYDEMİR'
            },
            {
              type: 'text',
              content: 'Ahmet KOCA'
            },
            {
              type: 'text',
              content: 'İsmail EKER'
            },
            {
              type: 'text',
              content: '	Taylan DÜNDAR'
            },
            {
              type: 'text',
              content: 'Ünal AYDOĞAN'
            }
          ],
          values: [
            {
              type: 'text',
              content: 'Gazi Üni. SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'Bilkent Üni. Beden Eğitimi ve Spor Merkezi Başkanı'
            },
            {
              type: 'text',
              content: 'Mardin Artuklu Üni. SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'Atatürk Üni. SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'İstanbul Üni. Cerrahpaşa SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'Kadir Has Üni. Spor Uzmanı'
            },
            {
              type: 'text',
              content: 'Uludağ Üni. SKSD Başkan V.'
            },
            {
              type: 'text',
              content: 'Mersin Üni. SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'Hitit Üni. SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'Yaşar Üni. Sağlık Kültür Spor Müdürü'
            },
            {
              type: 'text',
              content: 'Ankara Müzik ve Güzel Sanatlar Üni. SKSD Başkanı'
            }
          ]
        },
        {
          type: 'title',
          content: 'YEDEKLER'
        },
        {
          type: 'table',
          header: {
            key: 'Ad Soyad',
            value: 'Görev Yeri'
          },
          keys: [
            {
              type: 'text',
              content: 'Havva VANLI'
            },
            {
              type: 'text',
              content: 'Hayriye ÖZPINAR'
            },
            {
              type: 'text',
              content: 'Alev GÖKSU'
            },
            {
              type: 'text',
              content: 'Ali ÖZDEMİR'
            }
          ],
          values: [
            {
              type: 'text',
              content: 'Ardahan Üni. SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'Kocaeli Üni. SKSD Başkanı'
            },
            {
              type: 'text',
              content: 'Atlas Üni. SKSD Başkanlığı / Müdür'
            },
            {
              type: 'text',
              content: 'Abdullah Gül Üni. SKSD Başkanı'
            }
          ]
        }
      ]
    },
    main_status: {
      name: 'Ana Statü',
      template: [
        {
          type: 'title',
          content: 'Ana Statü'
        },
        {
          type: 'text',
          content: 'Ana statü belgesini görmek için aşağıdaki linke tıklayın.'
        },
        {
          type: 'link',
          content: 'Ana Statü',
          url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/c7092923-f0d1-431e-9907-94b74f9ee9a4637769454554982809.pdf'
        }
      ]
    },
    informations: {
      name: 'Talimatlar',
      template: [
        {
          type: 'table',
          header: {
            key: 'Dosya Adı',
            value: 'Yayım Tarihi'
          },
          keys: [
            {
              type: 'link',
              content: 'BÜTÇE VE MUHASEBE TALİMATI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/d66b14c0-36d8-4613-b0df-87da1c7aff8f637489705974124349.pdf'
            },
            {
              type: 'link',
              content: 'DİSİPLİN KURULU TALİMATI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/fb51d97a-5df4-415b-81c2-1e33d2753d49637489706516584697.pdf'
            },
            {
              type: 'link',
              content: 'İL KOORDİNASYON KURULU TALİMATI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/7a183550-bdc7-40c8-bed5-dcf8085813dc637489708101855431.pdf'
            },
            {
              type: 'link',
              content: 'ÖDÜL VE YARDIM TALİMATI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/3a3d0683-c68c-4435-b5cc-af46a7be355f637489708516145598.pdf'
            },
            {
              type: 'link',
              content: 'YARIŞMA TALİMATI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/da380be8-2cf7-474d-bfdf-24a399dcf0b7637752681882950175.pdf'
            }
          ],
          values: [
            {
              type: 'text',
              content: '13.08.2009'
            },
            {
              type: 'text',
              content: '21.07.2007'
            },
            {
              type: 'text',
              content: '15.11.2018'
            },
            {
              type: 'text',
              content: '29.12.2008'
            },
            {
              type: 'text',
              content: '16.12.2021'
            }
          ]
        }
      ]
    },
    forms: {
      name: 'Formlar',
      template: [
        {
          type: 'table',
          header: {
            key: 'Dosya Adı',
            value: 'Yayım Tarihi'
          },
          keys: [
            {
              type: 'link',
              content: 'CİMNASTİK HAKEM FORMU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/2d2eceb7-b1ba-4f6a-a60e-7bc03ebfea54637489714770530835.pdf'
            },
            {
              type: 'link',
              content: 'FUTBOL GÖZLEMCİ RAPORU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/7d044ad0-f190-4f94-b384-7bdfe0e81da9637489723853321147.pdf'
            },
            {
              type: 'link',
              content: 'FUTBOL HAKEM RAPORU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/5f3e95aa-5358-4da8-afd9-a9eb038b13fb637489721643059232.pdf'
            },
            {
              type: 'link',
              content: 'FUTBOL OYUNCU DEĞİŞİKLİK KARTI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/e350417d-008f-4321-9b60-7b74d2a4f1e2637490015151485199.pdf'
            },
            {
              type: 'link',
              content: 'FUTSAL HAKEM, GÖZLEMCİ ve TEMSİLCİ RAPORLARI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/7576296a-cd8d-4e40-89b3-7d7efaa9ada6637822517452342556.xlsx'
            },
            {
              type: 'link',
              content: 'MİLLİ SPORCU BELGESİ BAŞVURU FORMU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/bbd4ebe8-28b3-4c2d-87fb-b04bc4935d91637786169794759749.pdf'
            },
            {
              type: 'link',
              content: 'SPORCU ÖZGEÇMİŞ BELGESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/fdf6a235-5910-4700-a09b-1f080a6a44f3637806949603665696.doc'
            },
            {
              type: 'link',
              content: 'FUTSAL KAFİLE LİSTESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/7e975e67-7c64-470b-a12c-b5b294bd6d6f637490002210754062.doc'
            },
            {
              type: 'link',
              content: 'KORUMALI FUTBOL TEMSİLCİ FORMU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/20f8c383-6ead-46e7-a08c-9e5132b33d4a637490005300733675.xls'
            },
            {
              type: 'link',
              content: 'KORUMALI FUTBOL TEMSİLCİ HAKEM BORDRO',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/8504c10b-94b9-4725-85fe-021a7dbfb3b5637490012929906919.xls'
            },
            {
              type: 'link',
              content: 'MUSABAKA İSİM LİSTESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/5470017d-dbd0-4557-9ffc-66f5024c31a4637490013976055897.doc'
            },
            {
              type: 'link',
              content: 'ÖDÜL DİLEKÇESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/054367b3-2f22-45e6-b658-aae32f5a52b7637490014239405708.pdf'
            },
            {
              type: 'link',
              content: 'TÜSF İL TEMSİLCİ FORMU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/504f07df-fdcf-4ee0-8ed2-d2033fb9c996637490016760094718.docx'
            },
            {
              type: 'link',
              content: 'VAKIF ÜNİVERSİTESİ ÖĞRENİM ÜCRETİ İNDİRİMİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/a2088f97-d66b-4a57-b51f-3688aae6d7d2637507996641982198.docx'
            },
            {
              type: 'link',
              content: 'VELİ MUVAFAKAT ÖRNEĞİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/cf4df1a1-8abb-4fde-a315-df88fb3a7075637490017494804648.pdf'
            },
            {
              type: 'link',
              content: 'YENİ HİZMET (GRİ) PASAPORT FORMU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/541a8d7f-af5d-4072-86bd-99c8c55b3b8b637490017958924843.doc'
            },
            {
              type: 'link',
              content: 'YURTDIŞI FAALİYET BİLGİ FORMU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/aec952f1-590a-482b-8826-9253abb6e92a637490018484994594.pdf'
            },
            {
              type: 'link',
              content: 'YÜZME BAŞVURU FORMU',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/95ca4d87-d7a9-4f65-8d61-8faca8ef349b637490018741015381.xlsx'
            },
            {
              type: 'link',
              content: 'TEKNİK TOPLANTI TUTANAĞI',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/903584c9-7fe0-4163-9614-051b3c853f95637746568714654925.doc'
            },
            {
              type: 'link',
              content: 'KORUMALI FUTBOL TAAHHÜTNAME',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/5b80f56d-5bd6-4425-a7db-d67012ae2d5e637746609376920453.doc'
            },
            {
              type: 'link',
              content: 'TEMSİLCİNİN GÖREVLERİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/998c1cba-9ea4-4c2a-9b3d-88362f22faa1637746591086099798.doc'
            }
          ],
          values: [
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '7.03.2022'
            },
            {
              type: 'text',
              content: '24.01.2022'
            },
            {
              type: 'text',
              content: '17.02.2022'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '8.03.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '15.02.2021'
            },
            {
              type: 'text',
              content: '9.12.2021'
            },
            {
              type: 'text',
              content: '9.12.2021'
            },
            {
              type: 'text',
              content: '9.12.2021'
            }
          ]
        }
      ]
    },
    directions: {
      name: 'Yönergeler',
      template: [
        {
          type: 'title',
          content: 'Yönerge Listesi'
        },
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'link',
              content: 'EĞİTİM YÖNERGESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/ab31d453-12f7-4952-83ec-236d65be30eb637522707433309587.pdf'
            },
            {
              type: 'link',
              content: 'ETİK KURULU YÖNERGESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/3e7332c8-fe4b-446c-9dc1-fb639fa410f1637522750935474531.pdf'
            },
            {
              type: 'link',
              content: 'SPORCU KARTI VE VİZE YÖNERGESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/6cbee0ef-16b3-4625-95a3-ec4a25cfc605637540975552045296.pdf'
            },
            {
              type: 'link',
              content: 'TEMSİLCİNİN GÖREVLERİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/878de06e-b73b-4b17-b483-b75eeede013f637522708267859791.pdf'
            },
            {
              type: 'link',
              content: 'ULUSLARARASI ÜNİVERSİTE SPORLARI ORGANİZASYONLARINA KENDİ İMKANLARI İLE KATILACAK ÜNİVERSİTE VE BRANŞ FEDERASYONLARI İÇİN KATILIM YÖNERGESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/1955bcae-2631-4a12-b59e-aacb31eaeda8637522719122109335.pdf'
            },
            {
              type: 'link',
              content: 'SKSD BAŞKANLARI KONSEYİ YÖNERGESİ',
              url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/a7b5e9ee-0e35-462a-bb7c-d60fb84c091a637745525440918114.pdf'
            }
          ]
        }
      ]
    },
    coordinators: {
      name: 'Koordinatörlükler ',
      template: [
        {
          type: 'grid',
          content: [
            {
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/bd5aed31-d714-451c-9da9-65f347493b28..jpg',
              title: 'Celal Sami TÜFEKÇİ',
              subtitle: 'Danışman'
            },
            {
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/13cc4dcd-92b1-4e3b-bbcc-4042bc54322f..jpg',
              title: 'Prof. Dr. Erkut TUTKUN',
              subtitle: 'Uluslararası Koordinatör'
            },
            {
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/64d7da77-4e88-412e-a511-517f662f14cc..png',
              title: 'Müslüm GÜLHAN',
              subtitle: 'Teknik Kurullar Koordinatörü'
            },
            {
              image: 'https://www.tusf.org/Data/Sites/1/paylasilanDosyalar/4fb9839d-6d4a-4f51-b3da-a8e3fce7a9d8..png',
              title: 'Prof. Dr. Yücel OCAK',
              subtitle: 'Eğitim Koordinatörü'
            }
          ]
        }
      ]
    },
    audit_board: {
      name: 'Denetim Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'Mehmet ÇAĞLAR'
            },
            {
              type: 'text',
              content: 'Battal YILMAZ'
            },
            {
              type: 'text',
              content: 'Gürsel UZUNCA'
            },
            {
              type: 'text',
              content: 'Önal KAYA'
            },
            {
              type: 'text',
              content: 'Volkan Burak MUMCU'
            }
          ]
        }
      ]
    },
    discipline_board: {
      name: 'Disiplin Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'Şahin OĞUZ'
            },
            {
              type: 'text',
              content: 'Av. Ahmet Gürkan ENGİN'
            },
            {
              type: 'text',
              content: 'Av. Enes Batuhan ODABAŞI'
            },
            {
              type: 'text',
              content: 'Av. Ebubekir KORKMAZ'
            },
            {
              type: 'text',
              content: 'Av. Alparslan ÇUHACI'
            }
          ]
        }
      ]
    },
    legal_board: {
      name: 'Hukuk Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'Hâkim. ODABAŞI Hasan'
            },
            {
              type: 'text',
              content: 'Av. KUMKALE Hasan'
            },
            {
              type: 'text',
              content: 'Av. OSMANAĞAOĞLU Gökberk'
            },
            {
              type: 'text',
              content: 'Av. ŞAHİN Ömer Selçuk'
            },
            {
              type: 'text',
              content: 'Av. ERDÖL Özcan'
            },
            {
              type: 'text',
              content: 'Av. UNAN Dilay'
            },
            {
              type: 'text',
              content: 'Av. KILINÇ Seffan'
            },
            {
              type: 'text',
              content: 'Av. ŞAHİN Elif Asena'
            },
          ]
        }
      ]
    },
    medicine_board: {
      name: 'Sağlık Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'Dr. SUNGUROĞLU Kadirhan(Bşk. )'
            },
            {
              type: 'text',
              content: 'Dr. ADA Mustafa Ahmet'
            },
            {
              type: 'text',
              content: 'Dr. ATAOĞLU Baybars'
            },
            {
              type: 'text',
              content: 'Dr. AYDOĞ Tolga'
            },
            {
              type: 'text',
              content: 'Dr. BEKTAŞER Bülent'
            },
            {
              type: 'text',
              content: 'Dr. BİLGEHAN Erkut'
            },
            {
              type: 'text',
              content: 'Dr. COŞKUN Osman'
            },
            {
              type: 'text',
              content: 'Dr. GÜL Orkun'
            },
            {
              type: 'text',
              content: 'Dr. GÜZEL ATALAY Nevin'
            },
            {
              type: 'text',
              content: 'Dr. İLHAN Mustafa Necmi'
            },
            {
              type: 'text',
              content: 'Dr. KADER Hafız Mustafa'
            },
            {
              type: 'text',
              content: 'Dr. KEMALOĞLU Kemal Yusuf'
            },
            {
              type: 'text',
              content: 'Dr. ÖZÇELİK Aydan'
            },
            {
              type: 'text',
              content: 'Dr. ÖZDEMİR GÜNAY'
            },
            {
              type: 'text',
              content: 'Dr. ÖZTÜRKMuhtar Akif'
            },
            {
              type: 'text',
              content: 'Dr. ŞAHİN Mustafa'
            },
            {
              type: 'text',
              content: 'Dr. ŞENDİL Ateş'
            },
            {
              type: 'text',
              content: 'Dr. TÜRKÇAPAR Mehmet Hakan'
            },
            {
              type: 'text',
              content: 'Dr. ULUSOY İlke Özgür'
            },
            {
              type: 'text',
              content: 'Dr. ÜLKER Bülent'
            },
            {
              type: 'text',
              content: 'NİZAMOĞLU Suna Almıla'
            },
            {
              type: 'text',
              content: 'Dr. POLAT Fazlı Fevzi'
            },
            {
              type: 'text',
              content: 'Dr. CEYLAN Alper'
            },
            {
              type: 'text',
              content: 'Dr. TURGUT Cenk'
            }
          ]
        }
      ]
    },
    technical_board: {
      name: 'Teknik Kurul',
      template: [
        {
          type: 'title',
          content: 'Teknik Kurul'
        },
        {
          type: 'text',
          content: 'Teknik Kurul üyelerini görmek için aşağıdaki linke tıklayın.'
        },
        {
          type: 'link',
          content: 'Teknik Kurul',
          url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/1085fb6a-c320-45f8-8954-f454d7ae06f5637907995419965618.pdf'
        }
      ]
    },
    province_representators: {
      name: 'İl Temsilcileri',
      template: [
        {
          type: 'title',
          content: 'İl Temsilcileri'
        },
        {
          type: 'text',
          content: 'İl Temsilcilerini görmek için aşağıdaki linke tıklayın.'
        },
        {
          type: 'link',
          content: 'İl Temsilcileri',
          url: 'https://tusf.org/Data/Sites/1/paylasilanDosyalar/8258ebbf-88f7-4579-88d9-e9afb5caa2e2637828659021177487.pdf'
        }
      ]
    },
    ethical_board: {
      name: 'Etik Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'Dr. KOZ Mitat (Bşk.)'
            },
            {
              type: 'text',
              content: 'Dr. BALÇIKANLI Sezen Gülfem'
            },
            {
              type: 'text',
              content: 'Dr. ÇOBANOĞLU Nesrin'
            },
            {
              type: 'text',
              content: 'Dr. ESKİLER Ersin'
            },
            {
              type: 'text',
              content: 'Dr. DONUK Bilge'
            },
            {
              type: 'text',
              content: 'Dr. GÖKSEL Gürel Ali'
            },
            {
              type: 'text',
              content: 'Dr. GÜLLÜ Sevim'
            },
            {
              type: 'text',
              content: 'Dr. HAZAR Serkan'
            },
            {
              type: 'text',
              content: 'Dr. MALKOÇ Nedim'
            },
            {
              type: 'text',
              content: 'Dr. YILDIRAN İbrahim'
            },
            {
              type: 'text',
              content: 'Dr. ZEHİR Cemal'
            }
          ]
        }
      ]
    },
    education_board: {
      name: 'Eğitim Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'Dr. KARAKÜÇÜK Suat (Bşk.)'
            },
            {
              type: 'text',
              content: 'Dr. ARABACI Ramiz'
            },
            {
              type: 'text',
              content: 'Dr. ASLAN Yunus'
            },
            {
              type: 'text',
              content: 'Dr. ATAY Emrah'
            },
            {
              type: 'text',
              content: 'Dr. ATLI Mustafa'
            },
            {
              type: 'text',
              content: 'Dr. BAYAR Mehmet'
            },
            {
              type: 'text',
              content: 'Dr. DEMİREL Haydar'
            },
            {
              type: 'text',
              content: 'Dr. DİNÇ Zeynep Filiz'
            },
            {
              type: 'text',
              content: 'Dr. DOĞAN Ali Ahmet'
            },
            {
              type: 'text',
              content: 'Dr. ERYILMAZ KORKMAZ Selcen'
            },
            {
              type: 'text',
              content: 'Dr. GENCAY Alpaslan Ökkeş'
            },
            {
              type: 'text',
              content: 'Dr. GERİ Serdar'
            },
            {
              type: 'text',
              content: 'Dr. KALKAVAN Arslan'
            },
            {
              type: 'text',
              content: 'Dr. KARADAĞ Alper'
            },
            {
              type: 'text',
              content: 'Dr. KIYICI Fatih'
            },
            {
              type: 'text',
              content: 'Dr. KİRAZCI Sadettin'
            },
            {
              type: 'text',
              content: 'Dr. KÜRKÇÜ Recep'
            },
            {
              type: 'text',
              content: 'Dr. KÜRKLÜ Sercan'
            },
            {
              type: 'text',
              content: 'Dr. ÖZDİLEK Çetin'
            },
            {
              type: 'text',
              content: 'Dr. ÖZMUTLU İlker'
            },
            {
              type: 'text',
              content: 'Dr. PATLAR Süleyman'
            },
            {
              type: 'text',
              content: 'Dr. PEHLİVAN Aysel'
            },
            {
              type: 'text',
              content: 'Dr. SAYGIN Özcan'
            },
            {
              type: 'text',
              content: 'Dr. TAŞKIRAN M. Yavuz'
            },
            {
              type: 'text',
              content: 'Dr. TOROS Turhan'
            },
            {
              type: 'text',
              content: 'Dr. TÜRKÇAPAR Ünal'
            },
            {
              type: 'text',
              content: 'TAHİR Güney'
            },
            {
              type: 'text',
              content: 'ŞENGÜN Halil'
            },
            {
              type: 'text',
              content: 'YILMAZ Sefa'
            },
            {
              type: 'text',
              content: 'ŞİRİN Erkan Faruk'
            }
          ]
        } 
      ]
    },
    women_and_sport_board: {
      name: 'Kadın ve Spor Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'Dr. ÇOLAKOĞLU Filiz Fatma ( Bşk)'
            },
            {
              type: 'text',
              content: 'Dr. BİNGÖL Hülya'
            },
            {
              type: 'text',
              content: 'Dr. CENGİZ Şebnem'
            },
            {
              type: 'text',
              content: 'DİRİ Ayşegül'
            },
            {
              type: 'text',
              content: 'Dr. ER Fatma Nur'
            },
            {
              type: 'text',
              content: 'Dr. ERYILMAZ KORKMAZ Selcen'
            },
            {
              type: 'text',
              content: 'ILDIZLI Asel'
            },
            {
              type: 'text',
              content: 'Dr. KARACAN Selma'
            },
            {
              type: 'text',
              content: 'Dr. PANCAR Zarife'
            },
            {
              type: 'text',
              content: 'Dr. TUNÇ Aygül'
            },
            {
              type: 'text',
              content: 'Dr. TÜRKSOY Ayşe'
            },
            {
              type: 'text',
              content: 'DURMUŞ Gamze'
            },
            {
              type: 'text',
              content: 'AY YILDIZ Yeliz'
            }
          ]
        }
      ]
    },
    communication_and_press_board: {
      name: 'İletişim, Basın ve Yayın Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'AKYEL Yusuf'
            },
            {
              type: 'text',
              content: 'TARHAN Murat'
            },
            {
              type: 'text',
              content: 'ATA Ercan'
            },
            {
              type: 'text',
              content: 'AĞCA Murat'
            },
            {
              type: 'text',
              content: 'ERKILIÇ Orhan Kemal'
            },
            {
              type: 'text',
              content: 'GAZİOĞLU Fatih'
            },
            {
              type: 'text',
              content: 'GÜNDOĞDU Ünal'
            },
            {
              type: 'text',
              content: 'ŞAHİNER Özgür'
            }
          ]
        }
      ]
    },
    organisation_board: {
      name: 'Organizasyon Kurulu',
      template: [
        {
          type: 'list',
          subtype: 'number',
          content: [
            {
              type: 'text',
              content: 'AKYEL Yakup'
            },
            {
              type: 'text',
              content: 'AKYÜZ ONUR '
            },
            {
              type: 'text',
              content: 'ASLAN Alper'
            },
            {
              type: 'text',
              content: 'ATEŞ Serkan'
            },
            {
              type: 'text',
              content: 'AYAN Sinan'
            },
            {
              type: 'text',
              content: 'AYAN Vedat'
            },
            {
              type: 'text',
              content: 'AYDOĞAN Ünal'
            },
            {
              type: 'text',
              content: 'BELLİ Emre'
            },
            {
              type: 'text',
              content: 'BİÇER Mürsel'
            },
            {
              type: 'text',
              content: 'ÇELEBİ Erdoğan'
            },
            {
              type: 'text',
              content: 'ÇELENK Çağrı'
            },
            {
              type: 'text',
              content: 'ÇELİK Burçak Okan'
            },
            {
              type: 'text',
              content: 'ÇOBAN Özlem'
            },
            {
              type: 'text',
              content: 'DEMİREL Mehmet'
            },
            {
              type: 'text',
              content: 'EKER İsmail'
            },
            {
              type: 'text',
              content: 'ERBAY Adem'
            },
            {
              type: 'text',
              content: 'ERDOĞAN Serdar Barbaros'
            },
            {
              type: 'text',
              content: 'EREN Recep'
            },
            {
              type: 'text',
              content: 'EROĞLU Hüseyin'
            },
            {
              type: 'text',
              content: 'FİDAN Mehmet'
            },
            {
              type: 'text',
              content: 'GAYRETLİ Zafer'
            },
            {
              type: 'text',
              content: 'GÖKDEMİR Mehmet'
            },
            {
              type: 'text',
              content: 'GÖMEÇ Yusuf'
            },
            {
              type: 'text',
              content: 'GÜNGÖR Nuri Berk'
            },
            {
              type: 'text',
              content: 'GÜNGÖRMÜŞ Alper Hamdi'
            },
            {
              type: 'text',
              content: 'HACICAFEROĞLU Serkan'
            },
            {
              type: 'text',
              content: 'İRİ Rüçhan'
            },
            {
              type: 'text',
              content: 'İŞCİMEN Burak'
            },
            {
              type: 'text',
              content: 'KAYA Kazım '
            },
            {
              type: 'text',
              content: 'KESKİN Kadir'
            },
            {
              type: 'text',
              content: 'KIRKBİR Fatih'
            },
            {
              type: 'text',
              content: 'KÜÇÜKYETKİN Meral'
            },
            {
              type: 'text',
              content: 'MEMUR Nurettin '
            },
            {
              type: 'text',
              content: 'ÖZALTAŞ Hüseyin Nasip '
            },
            {
              type: 'text',
              content: 'ÖZTÜRK Dilek Emine'
            },
            {
              type: 'text',
              content: 'ÖZTÜRK Onur'
            },
            {
              type: 'text',
              content: 'PARASIZ Özgün'
            },
            {
              type: 'text',
              content: 'PEPE Osman'
            },
            {
              type: 'text',
              content: 'SAMUR Serdar'
            },
            {
              type: 'text',
              content: 'SOYAL Mehmet'
            },
            {
              type: 'text',
              content: 'SOYÜNÇ Harun'
            },
            {
              type: 'text',
              content: 'ŞAHİN Neşe Fatma'
            },
            {
              type: 'text',
              content: 'ŞAHİN Zeynep'
            },
            {
              type: 'text',
              content: 'TATLISI Bülent '
            },
            {
              type: 'text',
              content: 'TOLUKAN Ersan'
            },
            {
              type: 'text',
              content: 'TURGUT Abdüsselam'
            },
            {
              type: 'text',
              content: 'TÜRKÇAPAR Ünal'
            },
            {
              type: 'text',
              content: 'UÇAN İzzet'
            },
            {
              type: 'text',
              content: 'YÖRÜR Seyit'
            },
            {
              type: 'text',
              content: 'ZENGİN Samet'
            },
            {
              type: 'text',
              content: 'DOKER Nihat'
            },
            {
              type: 'text',
              content: 'ADIGÜZEL Niyazi Sıdkı'
            },
            {
              type: 'text',
              content: 'ERKENELİ Ramazan'
            }
          ]
        }
      ]
    }
  };

  if (!content[url])
    return callback('bad_request');

  return callback(null, content[url]);
}
