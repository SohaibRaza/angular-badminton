import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrainingProgramsComponent } from './components/training-programs/training-programs.component';
import { TrainingProgramContentComponent } from './components/training-program-content/training-program-content.component';
import { SafePipe } from './pipes/safe.pipe';
import { TacticalLessonsComponent } from './components/tactical-lessons/tactical-lessons.component';
import { PhysicalProgramsComponent } from './components/physical-programs/physical-programs.component';
import { MentalCoursesComponent } from './components/mental-courses/mental-courses.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PlansComponent } from './components/plans/plans.component';
import { PlansTabComponent } from './components/plans-tab/plans-tab.component';
import { FavoritesTabComponent } from './components/favorites-tab/favorites-tab.component';
import { VideoWrapperComponent } from './components/video-wrapper/video-wrapper.component';
import { TrainingPlansPopoverComponent } from './components/training-plans-popover/training-plans-popover.component';
import { TacticalLessonContentComponent } from './components/tactical-lesson-content/tactical-lesson-content.component';
import { PhysicalContentComponent } from './components/physical-content/physical-content.component';
import { MentalContentComponent } from './components/mental-content/mental-content.component';
import { VideoNotesComponent } from './components/video-notes/video-notes.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleContentComponent } from './components/article-content/article-content.component';
import { PodcastContentComponent } from './components/podcast-content/podcast-content.component';
import { BrowseComponent } from './components/browse/browse.component';
import { CategoryComponent } from './components/category/category.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WhatsNewComponent } from './components/whats-new/whats-new.component';
import { TouchID } from '@ionic-native/touch-id/ngx';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { KidsAcademyComponent } from './components/kids-academy/kids-academy.component';
import { KidsAcademyContentComponent } from './components/kids-academy-content/kids-academy-content.component';
import { FiltersComponent } from './shared/filters/filters.component';
import { HTTP } from '@ionic-native/http/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { DownloadContentComponent } from './components/download-content/download-content.component';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { VideoUrlPipe } from './pipes/video-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrainingProgramsComponent,
    TrainingProgramContentComponent,
    SafePipe,
    TacticalLessonsComponent,
    PhysicalProgramsComponent,
    MentalCoursesComponent,
    PodcastsComponent,
    ArticlesComponent,
    PlansComponent,
    PlansTabComponent,
    FavoritesTabComponent,
    VideoWrapperComponent,
    TrainingPlansPopoverComponent,
    TacticalLessonContentComponent,
    PhysicalContentComponent,
    MentalContentComponent,
    VideoNotesComponent,
    TutorialsComponent,
    SearchComponent,
    ArticleContentComponent,
    PodcastContentComponent,
    BrowseComponent,
    CategoryComponent,
    SettingsComponent,
    WhatsNewComponent,
    KidsAcademyComponent,
    KidsAcademyContentComponent,
    FiltersComponent,
    DownloadsComponent,
    DownloadContentComponent,
    VideoUrlPipe
  ],
  entryComponents: [],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    NgCircleProgressModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TouchID,
    AndroidFingerprintAuth,
    HTTP,
    FileTransfer,
    File,
    VideoPlayer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
