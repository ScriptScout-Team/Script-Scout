import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UploadComponent } from './pages/upload/upload.component';
import { VideoListComponent } from './pages/video-list/video-list.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { VideoPlayerComponent } from './pages/video-player/video-player.component';
import { TranscriptViewerComponent } from './pages/transcript-viewer/transcript-viewer.component';
import { MetadataEditorComponent } from './pages/metadata-editor/metadata-editor.component';
import { ChapterBreakdownComponent } from './pages/chapter-breakdown/chapter-breakdown.component';
import { SearchCatalogComponent } from './pagees/search-catalog/search-catalog.component';
import { ProcessingqueueComponent } from './pages/processingqueue/processingqueue.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UploadComponent,
    VideoListComponent,
    VideoDetailsComponent,
    ProfileComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    VideoPlayerComponent,
    TranscriptViewerComponent,
    MetadataEditorComponent,
    ChapterBreakdownComponent,
    SearchCatalogComponent,
    ProcessingqueueComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
