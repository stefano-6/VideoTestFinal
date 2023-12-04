import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import * as videoActions from '../../store/actions/video.action'
import * as videoSelectors from '../../store/selectors/video.selectors'
import { Video } from 'src/app/models/video';
import { Router } from '@angular/router';

@Component({
  selector: 'upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {
  error$ = this.store.select(videoSelectors.selectVideoError)
  fileName = new FormControl('', [Validators.required])
  size = new FormControl('', [Validators.required])
  currentFile?: File

  constructor(private store: Store, private router: Router) {}

  onSubmit(fileName: string, size: string) {
    const newVideo: Video = {
      name: fileName,
      size: Number(size)
    }

    this.store.dispatch(videoActions.uploadVideo({video: newVideo}))
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName.setValue(this.currentFile.name)
      this.size.setValue(this.currentFile.size.toString())
    } else {
      this.fileName.setValue('')
      this.size.setValue('')
    }
  }

  getErrorMessage() {
    if (this.fileName.hasError('required') || this.size.hasError('required')) {
      return 'You must enter a value';
    }

    return ''
  }
}
