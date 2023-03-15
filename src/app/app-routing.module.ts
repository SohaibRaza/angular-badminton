import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ArticleContentComponent } from './components/article-content/article-content.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { BrowseComponent } from './components/browse/browse.component';
import { CategoryComponent } from './components/category/category.component';
import { DownloadContentComponent } from './components/download-content/download-content.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { KidsAcademyContentComponent } from './components/kids-academy-content/kids-academy-content.component';
import { KidsAcademyComponent } from './components/kids-academy/kids-academy.component';
import { LoginComponent } from './components/login/login.component';
import { MentalContentComponent } from './components/mental-content/mental-content.component';
import { MentalCoursesComponent } from './components/mental-courses/mental-courses.component';
import { PhysicalContentComponent } from './components/physical-content/physical-content.component';
import { PhysicalProgramsComponent } from './components/physical-programs/physical-programs.component';
import { PlansComponent } from './components/plans/plans.component';
import { PodcastContentComponent } from './components/podcast-content/podcast-content.component';
import { PodcastsComponent } from './components/podcasts/podcasts.component';
import { SearchComponent } from './components/search/search.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TacticalLessonContentComponent } from './components/tactical-lesson-content/tactical-lesson-content.component';
import { TacticalLessonsComponent } from './components/tactical-lessons/tactical-lessons.component';
import { TrainingProgramContentComponent } from './components/training-program-content/training-program-content.component';
import { TrainingProgramsComponent } from './components/training-programs/training-programs.component';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { WhatsNewComponent } from './components/whats-new/whats-new.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'training-programs',
    component: TrainingProgramsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'training-programs/:id',
    component: TrainingProgramContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tactical-lessons',
    component: TacticalLessonsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tactical-lessons/:id',
    component: TacticalLessonContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kids-academy',
    component: KidsAcademyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kids-academy/:id',
    component: KidsAcademyContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'physical-programs',
    component: PhysicalProgramsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'physical-programs/:id',
    component: PhysicalContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mental-courses',
    component: MentalCoursesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mental-courses/:id',
    component: MentalContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'podcasts',
    component: PodcastsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'podcasts/:id',
    component: PodcastContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tutorials',
    component: TutorialsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tutorials/:id',
    component: TutorialsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'articles/:id',
    component: ArticleContentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'plans/:tab',
    component: PlansComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'browse',
    component: BrowseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category/:name',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'whats-new',
    component: WhatsNewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'downloads',
    component: DownloadsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'downloads/:id',
    component: DownloadContentComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'browse' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
