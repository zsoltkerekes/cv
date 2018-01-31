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
      { name: 'Javascript', progress: 75 },
      { name: 'JQuery', progress: 50 },
      { name: 'PHP', progress: 25 },
      { name: 'SQL', progress: 10 },
      { name: 'Static site building', progress: 85 },
      { name: 'English language', progress: 70 },
      { name: 'Wordpress', progress: 25 },
      { name: 'Photoshop', progress: 10 },
      { name: 'Yii', progress: 10 },
      { name: 'Google Analytics', progress: 30 },
      { name: 'Git', progress: 40 },
      { name: 'GitHub', progress: 40 },
      { name: 'TortoiseSVN', progress: 35 },
      { name: 'AJAX', progress: 60 },
      { name: 'AngularJS', progress: 70 },
      { name: 'Bootstrap', progress: 50 },
      { name: 'Jasmine', progress: 50 },
      { name: 'Jest ', progress: 50 },
      { name: 'Redux', progress: 70 },
      { name: 'Webpack ', progress: 70 },
      { name: 'ramda.js', progress: 45 },
      { name: 'Clean Code', progress: 70 },
      { name: 'Functional testing', progress: 80 },
      { name: 'Karma', progress: 50 },
      { name: 'Crossbrowser Coding', progress: 75 },
      { name: 'Responsive Site Building', progress: 80 },
      { name: 'GruntJs', progress: 40 },
      { name: 'NPM', progress: 80 },
      { name: 'Visual Studio Code', progress: 80 },
      { name: 'Less CSS', progress: 75 },
      { name: 'Sass', progress: 75 }
    ];
  }

  professionalExperiences() {
    return [
      {
        image: 'assets/images/epam.png',
        name: 'Junior Software Developer - Epam Systems',
        date: 'Since 2017',
        description: `Learning and using new programming patterns and techniques,
        new technologies, and programming client side MVC single page applications,
        working with Git. Also daily use of the core technologies, like JavaScript,
        Css and HTML.`
      },
      {
        image: 'assets/images/litologo.png',
        name: 'Web Developer - Litofilm',
        date: '2015 - 2017',
        description: `From scratch I developed web sites for over two years, mostly
        clint side. We had a web designer who made the design by the wishes of the
        thclient, but I was the person, who hold together each project, contact the
        client, manage the work process, write the code (mostly client side),
        find a freelancer to write the back-end part of the code (if necessary),
        performed manual functional testing then finalize the deal with the client,
        when the product was ready.`
      },
      {
        image: 'assets/images/telekom.png',
        name: 'Customer service representative - Magyar Telekom',
        date: '2012 - 2015',
        description: `Supporting company sales and/or customer services efforts by
        solving clints problems, help to get answers, and manage conflicts. Later I
        involved in working with the receivables management team.`
      },
      {
        image: 'assets/images/lombard.png',
        name: `Customer service representative - Lombard Lízing`,
        date: '2010 - 2012 ',
        description: `Supporting company sales and/or customer services efforts by taking cafe
        of the clients problems, help them with their issues with the contrats,
        give information when the clients needed.`
      },
      {
        image: 'assets/images/otp.png',
        name: 'Customer service representative - OTP Bank',
        date: '2009 - 2010',
        description: `Supporting company sales and/or customer services efforts by dealing
        with a breach of contract, accepting a payment agreement with non-paying customers,
        initiating a recovery if necessary.`
      }

    ];
  }

  references() {
    return [
      { image: 'assets/images/1.jpg', link: 'http://aqualift.hu', name: 'AQUALIFT.HU', priority: 10 },
      { image: 'assets/images/2.jpg', link: 'http://sybacontroll.hu', name: 'sybacontroll.hu', priority: 220 },
      { image: 'assets/images/3.jpg', link: 'http://k-fal.hu', name: 'k-fal.hu', priority: 30 },
      { image: 'assets/images/4.jpg', link: 'http://adamliptak-composer.com', name: 'adamliptak-composer.com', priority: 40 },
      { image: 'assets/images/5.jpg', link: 'http://forrasakku.hu', name: 'forrasakku.HU', priority: 50 },
      { image: 'assets/images/6.jpg', link: 'http://youngkft.hu', name: 'youngkft.HU', priority: 60 },
      { image: 'assets/images/7.jpg', link: 'http://kuriozumpizzeria.com', name: 'kuriozumpizzeria.com', priority: 70 },
      { image: 'assets/images/8.jpg', link: 'http://5dultrahangszeged.hu', name: '5dultrahangszeged.HU', priority: 80 },
      { image: 'assets/images/11.jpg', link: 'http://agroazis.hu', name: 'agroazis.HU', priority: 90 },
      { image: 'assets/images/12.jpg', link: 'http://mmggroup.hu', name: 'mmggroup.hu', priority: 100 },
      { image: 'assets/images/13.jpg', link: 'http://gaborabraham-mosaicart.com', name: 'gaborabraham-mosaicart.com', priority: 110 },
      { image: 'assets/images/14.jpg', link: 'http://kalvados.hu', name: 'kalvados.hu', priority: 120 },
      { image: 'assets/images/15.jpg', link: 'http://megalloetterem.com', name: 'megalloetterem.com', priority: 130 },
      { image: 'assets/images/16.jpg', link: 'http://megszervez.hu', name: 'megszervez.hu', priority: 140 },
      { image: 'assets/images/17.jpg', link: 'http://sudalu.hu', name: 'sudalu.hu', priority: 150 },
      { image: 'assets/images/18.jpg', link: 'http://sudbau.hu', name: 'sudbau.hu', priority: 160 },
      { image: 'assets/images/19.jpg', link: 'http://sybacontroll.hu', name: 'sybacontroll.hu', priority: 170 },
      { image: 'assets/images/20.jpg', link: 'http://szegedilmbt.hu', name: 'szegedilmbt.hu', priority: 180 },
      { image: 'assets/images/23.jpg', link: 'http://maximabeauty.hu', name: 'http://maximabeauty', priority: 190 },
      { image: 'assets/images/27.jpg', link: 'http://pmtgep.hu', name: 'pmtgep.hu', priority: 220 },
      { image: 'assets/images/28.jpg', link: 'http://szegedetterem.hu', name: 'szegedetterem.hu', priority: 20 }
    ];
  }

  aboutMe() {
    return [
      `I have been working with customers since 2006. I spent 10 years in the role of
      call center operator, solving various kinds of problems on a daily basis. But what
      I wanted to do, is my original profession, which is programming.`,
      ` In the summer of 2016 there was an opportunity to start to work as a front-end developer. Since
       then I have been coding, my goal is to be a full web developer in time.`
    ];
  }

  coutOnMe() {
    return [
      `<span>What you can expect from me:</span>
      Website development based on client's custom design, with the requested client-side
      functions, considering the current UI and UX expectations. If needed, I also write
      scripts on server side (to a low complexity level). After completing the tasks,
      I manage the entire life cycle of the website from deploying to maintenance,
      through further improvements, finally to the later exchange of the website.`,
      `<span>Unfortunately, you can not count on me with:</span> Server side MVC systems,
      and JAVA language. If that you need, unfortunately I cannot help you - at least yet.
      I am open to new technologies, I would like to learn how to use MVC systems,
      or JAVA language. `
    ];
  }

  studies() {
    return [
      {
        title: 'Language',
        subTitle: 'English, English professional: intermediate',
        description: `I often read English descriptions, tutorials and documents,
        by doing so, I have expanded my professional knowledge in order to follow new trends
        and to meet the expectations of the age.`
      },
      {
        title: 'High School',
        subTitle: 'József Kőrösy Foreign Trade and Economic Secondary School',
        description: `Computer Programming Degree`
      },
      {
        title: 'University',
        subTitle: 'University of Szeged',
        description: `Computer Programming Degree, I studied Programmer Mathematics
         but I did not graduate.`
      }
    ];
  }

  videoSrc() {
    return [
      'assets/video/adventure-is-calling.mp4',
      'assets/video/if-i-could.mp4',
      'assets/video/a-gift-from-rome.mp4'
    ];
  }



}
