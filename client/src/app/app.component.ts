import { Component } from '@angular/core';
import { User } from './models/user';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as authSelectors from './store/selectors/auth.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  user$: Observable<User> = this.store.select(authSelectors.selectUser)

  constructor(private store: Store) {
    
  }
}
