import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'cv-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent implements OnInit {

  studies: {
    title: string,
    subTitle: string,
    description: string
  }[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.studies = this.dataStorageService.studies();
  }

}
