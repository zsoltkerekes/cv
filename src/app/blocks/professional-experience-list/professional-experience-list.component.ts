import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

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

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {

    this.search = '';
    this.professionalExperiences = this.dataStorageService.professionalExperiences();


  }

}
