import { Action, createReducer, on } from '@ngrx/store'
import * as fromStates from '../states'
import * as fromActions from '../actions/auth.action'

import { User } from '../../models/user'

export const initialErrorState: fromStates.ErrorState = {
    header: null,
    status: null,
    statusText: null,
    url: null,
    name: null,
    message: null,
    error: ''
}

export const initialState: fromStates.AuthState = {
    user: null!,
    loading: false,
    error: initialErrorState
}

// Reducer
export const authReducer = createReducer(
    initialState,

    // Login
    on(fromActions.login, state => ({ 
        ...state,
        loading: true,
        error: null
    })),

    // Login Success
    on(fromActions.loginSuccess, (state, { user }) => ({
        ...state,
        user: user,
        loading: false,
        error: null 
        })),

    // Login Fail
    on(fromActions.loginFail, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
        })),
  )
