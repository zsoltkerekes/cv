import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'cv-about-me-text',
  templateUrl: './about-me-text.component.html',
  styleUrls: ['./about-me-text.component.scss']
})
export class AboutMeTextComponent implements OnInit {

  aboutMe: string[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.aboutMe = this.dataStorageService.aboutMe();
  }

}
