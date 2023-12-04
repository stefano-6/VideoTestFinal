import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs'
import { User } from '../models/user'
import { Store } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>

  constructor(private httpService: HttpClient, private store: Store) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable()
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.httpService.post<User>(`http://localhost:3000/users/auth`, { username, password })
        .pipe(map((user) => {
            localStorage.setItem('jwt', user.token!)

            return user;
        })
      )} 
    
    getToken(): string {

      return localStorage.getItem('jwt')!
    }

    isUserAuthenticated(): boolean {
      const token = localStorage.getItem('jwt')

      if (token) {
        return true
      }
      return false
    }
}
