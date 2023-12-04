import { createAction, props } from '@ngrx/store'
import { Video } from 'src/app/models/video'

// Single Video
export const singleVideo = createAction(
      '[Video] Get Single Video',
      props<{ id: number }>()
    )
  
export const singleVideoSuccess = createAction(
    '[Video] Get Single Video Success',
    props<{ video: Video }>()
    )

export const singleVideoFail = createAction(
    '[Video] Get Single Video Fail',
    props<{ error: any }>()
    )

// Upload Video
export const uploadVideo = createAction(
      '[Video] Upload Video',
      props<{ video: Video }>()
    )
  
export const uploadVideoSuccess = createAction(
    '[Video] Upload Video Success',
    props<{ video: Video }>()
    )

export const uploadVideoFail = createAction(
    '[Video] Upload Video Fail',
    props<{ error: any }>()
    )
