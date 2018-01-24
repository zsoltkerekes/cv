import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-professional-experience-list',
  templateUrl: './professional-experience-list.component.html',
  styleUrls: ['./professional-experience-list.component.scss']
})
export class ProfessionalExperienceListComponent implements OnInit {

  search: string;
  professionalExperiences: {
    image: string, name: string, date: string, description: string
  }[];

  constructor() { }

  ngOnInit() {
    this.search = '';
    this.professionalExperiences = [
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
        description: ` Vállalati és egyéni vállalkozó(nagyobb értékű ezközökkel rendelkező)  ügyfelekkel való kapcsolattartás,
        szükség esetén figyelemfelhívás a hátralék rendezésére, később a beérkező hívások fogadása, saját hatáskörben
  az ügyfelek problémáinak megoldásáról való gondoskodás, vagy annak a megfelelő ügyintézési szintre történő
  továbbítása, adminisztráció elvégzése.Később a beérkező hívások során az ügyfelek szakszerű és
  udvarias kiszolgálása, a cég szolgáltatásainak és termékeinek értékesítése, a problémák felelősségteljes
  megoldása, az esetek nyomon követése, adminisztráció elvégzése.`
      },
      {
        image: '/assets/images/otp.png',
        name: 'Kintlévőség kezelő Ügyfélreferens - OTP Bank Nyrt.',
        date: '2009 - 2010',
        description: `Hátralékos hitelszámlával rendelkező ügyfelek telefonos tájékoztatása, és figyelem felhívása a
        hátralék rendezésére, tájékoztatása a banki eszközökről, azok igénybevételeinek feltételeiről,
          adminisztráció elvégzése.`
      },

    ];



  }

}
