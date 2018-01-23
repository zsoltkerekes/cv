import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.muted = true;
    this.picSrc = '/assets/images/soundoff.png';
    this.videoSrc = [
      '/assets/video/adventure-is-calling.mp4',
      '/assets/video/if-i-could.mp4',
      '/assets/video/szeged-2012.mp4'
    ];
    this.index = Math.floor((Math.random() * this.videoSrc.length));
  }

  soundOnOff() {
    this.muted = !this.muted;
    this.picSrc = this.muted ? '/assets/images/soundoff.png' : '/assets/images/soundon.png';
  }

}
