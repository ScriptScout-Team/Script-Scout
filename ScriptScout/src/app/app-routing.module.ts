import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UploadComponent } from './pages/upload/upload.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { TranscriptViewerComponent } from './pages/transcript-viewer/transcript-viewer.component';
import { MetadataEditorComponent } from './pages/metadata-editor/metadata-editor.component';
import { ChapterBreakdownComponent } from './pages/chapter-breakdown/chapter-breakdown.component';
import { SearchCatalogComponent } from './pages/search-catalog/search-catalog.component';
import { ProcessingqueueComponent } from './pages/processingqueue/processingqueue.component';
import { TagsComponent } from './tags/tags.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'video-list', component: VideoListComponent },
  { path: 'video-details', component: VideoDetailsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'video-player', component: VideoPlayerComponent },
  { path: 'transcript-viewer', component: TranscriptViewerComponent },
  { path: 'metadata-editor', component: MetadataEditorComponent },
  { path: 'chapter-breakdown', component: ChapterBreakdownComponent },
  { path: 'search-catalog', component: SearchCatalogComponent },
  { path: 'processingqueue', component: ProcessingqueueComponent },
  {path: 'tags', component: TagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
