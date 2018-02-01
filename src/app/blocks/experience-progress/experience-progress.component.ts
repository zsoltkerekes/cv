import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'cv-experience-progress',
  templateUrl: './experience-progress.component.html',
  styleUrls: ['./experience-progress.component.scss']
})
export class ExperienceProgressComponent implements OnInit {

  search: string;
  programmingSkills: { name: string, progress: number }[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.search = '';

    this.dataStorageService.programmingSkills()
      .subscribe(
      (response) => {
        this.programmingSkills = response.json().sort(this.byProgress);
      },
      (error) => { console.error(error); }
      );

  }

  byProgress(a, b) {
    if (a.progress > b.progress) { return -1; }
    if (a.progress < b.progress) { return 1; }
    return 0;
  }

}
