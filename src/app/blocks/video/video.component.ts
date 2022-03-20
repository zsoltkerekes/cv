import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { DataStorageService } from "../../shared/services/data-storage.service";

@Component({
  selector: "cv-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  muted: boolean;
  soundPicSrc: string;
  nextPicSrc: string;
  videos: string[];
  video: string;
  videoLoading: boolean;
  index: number;
  shown: boolean;

  @ViewChild("videoPlayer", { static: false }) videoplayer: ElementRef;

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.muted = true;
    this.nextPicSrc = "assets/images/next.png";
    this.setSoundPicSrc();
    this.videos = this.dataStorageService.videoSrc();
    this.index = 0;
    this.video = this.videos[this.index];
    this.videoLoading = false;
    window.addEventListener("resize", this.whenResized);
    this.whenResized();
  }

  setNextMovie() {
    this.videoLoading = true;
    const max = this.videos.length - 1;
    this.index = this.index < max ? this.index + 1 : 0;
    this.video = this.videos[this.index];
    this.videoplayer.nativeElement.oncanplay = () =>
      (this.videoLoading = false);
    this.videoplayer.nativeElement.load();
  }

  setSoundPicSrc() {
    this.soundPicSrc = this.muted
      ? "assets/images/soundoff.png"
      : "assets/images/soundon.png";
  }

  soundOnOff() {
    this.muted = !this.muted;
    this.setSoundPicSrc();
  }

  whenResized() {
    this.shown = window.innerWidth >= 960 ? true : false;
  }
}
