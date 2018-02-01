import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'cv-reference-list',
  templateUrl: './reference-list.component.html',
  styleUrls: ['./reference-list.component.scss']
})

export class ReferenceListComponent implements OnInit {

  search: string;
  references: { image: string, link: string, name: string, priority: number }[];

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.search = '';

    this.dataStorageService.references()
      .subscribe(
      (response) => {
        this.references = response.json().sort(this.byPriority);
      },
      (error) => { console.error(error); }
      );
  }

  byPriority(a, b) {
    if (a.priority < b.priority) { return -1; }
    if (a.priority > b.priority) { return 1; }
    return 0;
  }

}
