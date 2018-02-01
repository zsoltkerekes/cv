import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataStorageService {

  constructor(
    private http: Http
  ) { }

  programmingSkills() {
    return this.http.get('assets/json/progskills.json');
  }

  professionalExperiences() {
    return this.http.get('assets/json/profexp.json');
  }

  references() {
    return this.http.get('assets/json/reference.json');
  }

  aboutMe() {
    return this.http.get('assets/json/aboutme.json');
  }

  coutOnMe() {
    return this.http.get('assets/json/countonme.json');
  }

  studies() {
    return this.http.get('assets/json/studies.json');
  }

  videoSrc() {
    return [
      'assets/video/adventure-is-calling.mp4',
      'assets/video/if-i-could.mp4',
      'assets/video/a-gift-from-rome.mp4'
    ];
  }



}
