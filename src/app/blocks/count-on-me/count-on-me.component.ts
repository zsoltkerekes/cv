import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'cv-count-on-me',
  templateUrl: './count-on-me.component.html',
  styleUrls: ['./count-on-me.component.scss']
})
export class CountOnMeComponent implements OnInit {

  countOnMe: string[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.countOnMe = this.dataStorageService.coutOnMe();
  }

}
