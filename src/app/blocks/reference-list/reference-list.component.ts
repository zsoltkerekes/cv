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
    this.references = this.dataStorageService.references().sort(this.byPriority);
  }

  byPriority(a, b) {
    if (a.priority < b.priority) { return -1; }
    if (a.priority > b.priority) { return 1; }
    return 0;
  }

}
