import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router'

import * as authActions from '../actions/auth.action';
import { AuthService } from '../../services/auth.service'

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.login),
        exhaustMap((user) => this.authService.login(user.email, user.password).pipe(
            map(user => authActions.loginSuccess({user})),
            tap(() => this.router.navigate(['video/display'])),
            catchError(error => of(authActions.loginFail({error})))
        )
    )
    ))
}
