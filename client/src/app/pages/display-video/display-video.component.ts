import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Video } from 'src/app/models/video';
import * as fromStore from "../../store"

@Component({
  selector: 'display-video',
  templateUrl: './display-video.component.html',
  styleUrls: ['./display-video.component.css']
})
export class DisplayVideoComponent {

  selectedVideo$: Observable<Video | null> = this.store.select(fromStore.selectSelectedVideo)
  filename: string = ""
  
  constructor(private store: Store) {}

  selectVideo(id: number) {
    this.store.dispatch(fromStore.singleVideo({id: id}))
    this.selectedVideo$.subscribe(video => {
      this.filename = video!.name
    })
  }
}
