import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-experience-progress',
  templateUrl: './experience-progress.component.html',
  styleUrls: ['./experience-progress.component.scss']
})
export class ExperienceProgressComponent implements OnInit {

  search: string;
  programmingSkills: { name: string, progress: number }[];

  constructor() { }

  ngOnInit() {
    this.search = '';
    this.programmingSkills = [
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

    this.programmingSkills.sort(this.byProgress);

  }

  byProgress(a, b) {
    if (a.progress > b.progress) { return -1; }
    if (a.progress < b.progress) { return 1; }
    return 0;
  }

}
