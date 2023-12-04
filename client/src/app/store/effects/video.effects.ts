import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';


import * as videoActions from '../actions/video.action';
import { VideoService } from '../../services/video.service'
import { Router } from '@angular/router';

@Injectable()
export class VideoEffects {
    constructor(private actions$: Actions, private videoService: VideoService, private router: Router) { }

    loadSingleVideo$ = createEffect(() => this.actions$.pipe(
        ofType(videoActions.singleVideo),
        exhaustMap((videoId) => this.videoService.getSingleVideo(videoId.id).pipe(
            map(video => videoActions.singleVideoSuccess({video})),
            catchError(error => of(videoActions.singleVideoFail({error})))
        )
    )
    ))

    uploadVideo$ = createEffect(() => this.actions$.pipe(
        ofType(videoActions.uploadVideo),
        exhaustMap((video) => this.videoService.uploadVideo(video.video).pipe(
            map(video => videoActions.uploadVideoSuccess({video})),
            tap(() => this.router.navigate(['video/display'])),
            catchError(error => of(videoActions.singleVideoFail({error})))  
        )
    )
    ))
}
