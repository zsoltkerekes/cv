import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'cv-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  muted: boolean;
  picSrc: string;
  videoSrc: string[];
  index: number;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.muted = true;
    this.picSrc = '/assets/images/soundoff.png';
    this.videoSrc = this.dataStorageService.videoSrc();
    this.index = Math.floor((Math.random() * this.videoSrc.length));
  }

  soundOnOff() {
    this.muted = !this.muted;
    this.picSrc = this.muted ? '/assets/images/soundoff.png' : '/assets/images/soundon.png';
  }

}
