import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UploadVideoComponent } from './pages/upload-video/upload-video.component';
import { DisplayVideoComponent } from './pages/display-video/display-video.component';
import { authGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/video/display', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'video/upload', component: UploadVideoComponent, canActivate: [authGuard] },
  { path: 'video/display', component: DisplayVideoComponent, canActivate: [authGuard] },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
