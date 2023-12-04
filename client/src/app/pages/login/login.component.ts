import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import * as authActions from '../../store/actions/auth.action'
import * as authSelectors from '../../store/selectors/auth.selectors'
import { Router } from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error$ = this.store.select(authSelectors.selectUserError)
  
  email = new FormControl('', [Validators.required, Validators.email])
  password = new FormControl('', [Validators.required, Validators.minLength(9)])

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('jwt')

    if (token) {
      this.router.navigate(['video/display'])
    }
  }

  onSubmit(email: string, password: string) {
    this.store.dispatch(authActions.login({ email, password }))
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.email.hasError('email')) {
      return 'Not a valid email'
    }

    return ''
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.password.hasError('minlength')) {
      return 'Password must be 9 charcters'
    }

    return ''
  }
}
