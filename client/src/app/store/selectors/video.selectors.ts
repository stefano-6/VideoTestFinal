import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromStates from '../states'

export const selectVideoState = createFeatureSelector<fromStates.VideoState>('videos')

export const selectSelectedVideo = createSelector(selectVideoState, (state: fromStates.VideoState) => state.selectedVideo)
export const selectVideoError = createSelector(selectVideoState, (state: fromStates.VideoState) => state.error)
