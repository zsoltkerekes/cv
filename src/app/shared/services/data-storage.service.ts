import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

  constructor() { }

  programmingSkills() {
    return [
      { name: 'HTML', progress: 95 },
      { name: 'HTML5', progress: 90 },
      { name: 'CSS', progress: 90 },
      { name: 'CSS3', progress: 85 },
      { name: 'Javascript', progress: 65 },
      { name: 'JQuery', progress: 50 },
      { name: 'PHP', progress: 25 },
      { name: 'SQL', progress: 10 },
      { name: 'Desktop dizájn kivitelezés', progress: 85 },
      { name: 'Reszpozív/folyékony dizájn kivitelezés', progress: 85 },
      { name: 'Angol nyelv ', progress: 70 },
      { name: 'Szakmai angol', progress: 65 },
      { name: 'Wordpress', progress: 25 },
      { name: 'Photoshop', progress: 10 }
    ];
  }

  professionalExperiences() {
    return [
      {
        image: '/assets/images/litologo.png',
        name: 'Web fejlesztő - Litofilm Kft.',
        date: '2015 - Jelenleg is',
        description: `Megrendelő kérései alapján a grafikus megbízása webdizájn
         elkészítésére, majd ez alapján a teljes weboldal kliens és szükség
        esetén szerver oldalon történő lefejlesztése(bizonyos bonyolultsági
          szintig), az elkészített weboldal élesítése, karbantartása,
        módostása, később további fejlesztések elvégzése igény szerint, teljes
        életciklus végigkövetése.Továbbbá hírlevél és landing oldal programozása,
         online marketing tevékenység, kampányok, hirdetések lebobonyolítása,
         illetve követő és remarketing
        kódok illesztése.`
      },
      {
        image: '/assets/images/telekom.png',
        name: 'Általános Call Center Képviselő - Magyar Telekom Nyrt.',
        date: '2012 - 2015',
        description: `A beérkező hívások során az ügyfelek szakszerű és
        udvarias kiszolgálása, a cég szolgáltatásainak és termékeinek
        értékesítése, a problémák felelősségteljes megoldása,
        az esetek nyomon követése, adminisztráció elvégzése.`
      },
      {
        image: '/assets/images/lombard.png',
        name: `Kintlévőségkezelési Ügyfélszolgálati Főmunkatárs,
         később Telefonos Ügyfélszolgálati Munkatárs - Lombard Lízing Zrt.`,
        date: '2010 - 2012 ',
        description: ` Vállalati és egyéni vállalkozó(nagyobb értékű ezközökkel
        rendelkező)  ügyfelekkel való kapcsolattartás, szükség esetén figyelemfelhívás
        a hátralék rendezésére, később a beérkező hívások fogadása, saját hatáskörben
        az ügyfelek problémáinak megoldásáról való gondoskodás, vagy annak a megfelelő
        ügyintézési  szintre történő  továbbítása, adminisztráció elvégzése.Később a
        beérkező hívások során az ügyfelek szakszerű és  udvarias kiszolgálása, a cég
        szolgáltatásainak és termékeinek értékesítése, a problémák felelősségteljes
        megoldása, az esetek nyomon követése, adminisztráció elvégzése.`
      },
      {
        image: '/assets/images/otp.png',
        name: 'Kintlévőség kezelő Ügyfélreferens - OTP Bank Nyrt.',
        date: '2009 - 2010',
        description: `Hátralékos hitelszámlával rendelkező ügyfelek telefonos tájékoztatása,
         és figyelem felhívása a hátralék rendezésére, tájékoztatása a banki eszközökről,
         azok igénybevételeinek feltételeiről,adminisztráció elvégzése.`
      }

    ];
  }

  references() {
    return [
      { image: '/assets/images/1.jpg', link: 'http://aqualift.hu', name: 'AQUALIFT.HU', priority: 10 },
      { image: '/assets/images/2.jpg', link: 'http://sybacontroll.hu', name: 'sybacontroll.hu', priority: 220 },
      { image: '/assets/images/3.jpg', link: 'http://k-fal.hu', name: 'k-fal.hu', priority: 30 },
      { image: '/assets/images/4.jpg', link: 'http://adamliptak-composer.com', name: 'adamliptak-composer.com', priority: 40 },
      { image: '/assets/images/5.jpg', link: 'http://forrasakku.hu', name: 'forrasakku.HU', priority: 50 },
      { image: '/assets/images/6.jpg', link: 'http://youngkft.hu', name: 'youngkft.HU', priority: 60 },
      { image: '/assets/images/7.jpg', link: 'http://kuriozumpizzeria.com', name: 'kuriozumpizzeria.com', priority: 70 },
      { image: '/assets/images/8.jpg', link: 'http://5dultrahangszeged.hu', name: '5dultrahangszeged.HU', priority: 80 },
      { image: '/assets/images/11.jpg', link: 'http://agroazis.hu', name: 'agroazis.HU', priority: 90 },
      { image: '/assets/images/12.jpg', link: 'http://mmggroup.hu', name: 'mmggroup.hu', priority: 100 },
      { image: '/assets/images/13.jpg', link: 'http://gaborabraham-mosaicart.com', name: 'gaborabraham-mosaicart.com', priority: 110 },
      { image: '/assets/images/14.jpg', link: 'http://kalvados.hu', name: 'kalvados.hu', priority: 120 },
      { image: '/assets/images/15.jpg', link: 'http://megalloetterem.com', name: 'megalloetterem.com', priority: 130 },
      { image: '/assets/images/16.jpg', link: 'http://megszervez.hu', name: 'megszervez.hu', priority: 140 },
      { image: '/assets/images/17.jpg', link: 'http://sudalu.hu', name: 'sudalu.hu', priority: 150 },
      { image: '/assets/images/18.jpg', link: 'http://sudbau.hu', name: 'sudbau.hu', priority: 160 },
      { image: '/assets/images/19.jpg', link: 'http://sybacontroll.hu', name: 'sybacontroll.hu', priority: 170 },
      { image: '/assets/images/20.jpg', link: 'http://szegedilmbt.hu', name: 'szegedilmbt.hu', priority: 180 },
      { image: '/assets/images/23.jpg', link: 'http://maximabeauty.hu', name: 'http://maximabeauty', priority: 190 },
      { image: '/assets/images/27.jpg', link: 'http://pmtgep.hu', name: 'pmtgep.hu', priority: 220 },
      { image: '/assets/images/28.jpg', link: 'http://szegedetterem.hu', name: 'szegedetterem.hu', priority: 20 }
    ];
  }

  aboutMe() {
    return [
      `Kommunikatív, társaságkedvelő, érdeklődő személyként az élet napos oldalát keresem.
       Munkavégzésem során arra törekszem, hogy a rám bízott feladatokat a lehető
       legjobban végezzem el, és megszerezzem a szükséges tudást ennek érdekében.
       Csapatban könnyen megtalálom a közös hangot munkatársaimmal.`,
      ` Fontos tényező, hogy emberközpontú és konstruktív szellemiségben dolgozzak,
       mert kamatoztatni és fejleszteni szeretném az
      eddig megszerzett tapasztalataimat, és értékeimmel én is hozzá szeretnék
      járulni az eredmények eléréséhez.`
    ];
  }

  coutMeOn() {
    return [
      `<span>Amiben számíthatsz rám</span>: Weboldal kliens oldalon egyedi dizájn alapján
      történő fejlesztése a kért kliens oldali funciókkal, figyelembe véve az aktuális
      UI és UX elvárásokat. Szükség esetén szerver oldalon is végzek (alacsony bonyolultsági
         szintig) munkafolyamatokat. Az elkészítést követően a weboldal teljes életciklusát
         végigkövetem az élesítéstől kezdve a karbantartáson,
      a további fejlesztések elvégzésén keresztül a weboldal későbbi esetleges cseréjéig.`,
      `<span>Amiben sajnos NEM számíthatsz rám</span>: MVC rendszerek, JAVA nyelv. Ha ezek
       bármelyikére van szükséged, sajnos nem én vagyok az embered - legalábbis egyenlőre.
       Nyitott vagyok a fejlődésre, szívesen megtanulnám az MVC rendszerek használatát,
      vagy a JAVA nyelvet.`
    ];
  }

  studies() {
    return [
      {
        title: 'Nyelvismeret',
        subTitle: 'Angol, Angol szakmai: középfokú',
        description: ` Angol nyelvű leírásokat, tutorial-ok és dokumentumokat gyakran
         olvasok, ezzel is bővítve szakmai tapasztalataimat. Szeretem
        nyomon követni az új trendeket, és megfelelni a kor elvásárainak.`
      },
      {
        title: 'Végzettség',
        subTitle: 'Kőrösy József Külkereskedelmi és Közgazdasági Szakközépiskola ',
        description: `Érettségi (2001), Számítástechnikai programozó szak, amelyet
        egyetemi tanulmányokkal folytattam, programozó matematikus
        szakon, de nem fejeztem be tanulmányaim, diplomát nem szereztem.`
      }
    ];
  }

  videoSrc() {
    return [
      '/assets/video/adventure-is-calling.mp4',
      '/assets/video/if-i-could.mp4',
      '/assets/video/a-gift-from-rome.mp4'
    ];
  }



}
