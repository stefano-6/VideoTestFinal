import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromStates from '../states'

export const selectAuthState = createFeatureSelector<fromStates.AuthState>('auth')

export const selectUser = createSelector(selectAuthState, (state: fromStates.AuthState) => state.user)
export const selectLoadingUser = createSelector(selectAuthState,(state: fromStates.AuthState) => state.loading)
export const selectUserError = createSelector(selectAuthState, (state: fromStates.AuthState) => state.error)

