import { createAction, props } from '@ngrx/store'
import { User } from '../../models/user'

// Login
export const login = createAction(
    '[Auth] Login User',
    props<{ email: string; password: string }>()
  )

export const loginSuccess = createAction(
'[Auth] Login User Success',
props<{ user: User }>()
)

export const loginFail = createAction(
'[Auth] Login User Fail',
props<{ error: any }>()
)