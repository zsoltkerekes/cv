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
  shown: boolean;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.muted = true;
    this.picSrc = '/assets/images/soundoff.png';
    this.videoSrc = this.dataStorageService.videoSrc();
    this.index = Math.floor((Math.random() * this.videoSrc.length));
    window.onresize = this.whenResized;
    this.whenResized();
  }

  soundOnOff() {
    this.muted = !this.muted;
    this.picSrc = this.muted ? '/assets/images/soundoff.png' : '/assets/images/soundon.png';
  }

  whenResized() {
    this.shown = (window.innerWidth >= 960) ? true : false;
  }
}
