import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild("videoPlayer", { static: false }) videoPlayer!: ElementRef
  @Input() fileName: string = ""
  isPlaying: boolean = false

  ngOnInit(): void {
    this.playPause()
  }
  
  playPause() {
    var myVideo: any = document.getElementById("videoPlayer");
    if (myVideo.paused) {
      myVideo.play()
      this.isPlaying = true
    } else {
      myVideo.pause()
      this.isPlaying = false
    }
  }
}