import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UploadComponent } from './pages/upload/upload.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'video-list', component: VideoListComponent },
  { path: 'video-details', component: VideoDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'video-player', component: VideoPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
