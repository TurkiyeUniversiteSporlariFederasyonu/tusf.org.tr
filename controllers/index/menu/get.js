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
          content: '2005 yılında İzmir’ de yapılan Dünya Üniversiteler Yaz Oyunları ve 2011 yılında Erzurum’da yapılan Dünya Üniversiteler Kış Oyunları ile büyük organizasyonlara ev sahipliği yapan Federasyonumuz günümüzde 55 spor branşında faaliyet göstermekte ve yılda ortalama 146 ulusal spor organizasyonu yapmaktadır.'
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
    }
  }

  if (!content[url])
    return callback('bad_request');

  return callback(null, content[url]);
}
