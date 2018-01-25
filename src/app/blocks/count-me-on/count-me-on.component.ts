import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'cv-count-me-on',
  templateUrl: './count-me-on.component.html',
  styleUrls: ['./count-me-on.component.scss']
})
export class CountMeOnComponent implements OnInit {

  countMeOn: string[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.countMeOn = this.dataStorageService.coutMeOn();
  }

}
