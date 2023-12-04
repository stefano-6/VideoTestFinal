import { createReducer, on } from '@ngrx/store'
import * as fromStates from '../states'
import * as fromActions from '../actions/video.action'

export const initialErrorState: fromStates.ErrorState = {
    header: null,
    status: null,
    statusText: null,
    url: null,
    name: null,
    message: null,
    error: ''
}

export const initialState: fromStates.VideoState = {
    selectedVideo: null,
    error: initialErrorState
}

// Reducer
export const videoReducer = createReducer(
    initialState,

    // Single Video
    on(fromActions.singleVideo, state => ({ 
        ...state,
        selectedVideo: null,
        // loading: true,
        error: null
    })),

    // Single Video Success
    on(fromActions.singleVideoSuccess, (state, { video }) => ({
        ...state,
        selectedVideo: video,
        // loading: false,
        error: null 
        })),

    // Single Video Fail
    on(fromActions.singleVideoFail, (state, { error }) => ({
        ...state,
        selectedVideo: null,
        // loading: false,
        error: error
        })),

    // Update Video
    on(fromActions.uploadVideo, state => ({ 
        ...state,
        selectedVideo: null,
        // loading: true,
        error: null
    })),

    // Update Video Success
    on(fromActions.uploadVideoSuccess, (state, { video }) => ({
        ...state,
        selectedVideo: video,
        // loading: false,
        error: null 
        })),

    // Update Video Fail
    on(fromActions.uploadVideoFail, (state, { error }) => ({
        ...state,
        selectedVideo: null,
        // loading: false,
        error: error
        }))
  )
