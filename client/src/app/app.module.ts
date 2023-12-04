import { NgModule, isDevMode } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'

// NgRx Store
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { reducers, effects } from './store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

//Components
import { AppComponent } from './app.component'
import { LoginComponent } from './pages/login/login.component'
import { UploadVideoComponent } from './pages/upload-video/upload-video.component'
import { DisplayVideoComponent } from './pages/display-video/display-video.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'

import { JwtInterceptor } from './helpers/jwt.interceptor';
import { VideoPlayerComponent } from './components/video-player/video-player.component';



@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    UploadVideoComponent,
    DisplayVideoComponent,
    PageNotFoundComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
