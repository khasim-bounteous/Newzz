import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { SourceHeadlinesComponent } from './components/source-headlines/source-headlines.component';
import { WorldNewzComponent } from './components/world-newz/world-newz.component';
import { SavedArticlesComponent } from './components/saved-articles/saved-articles.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/newz',
    pathMatch: 'full'
  },
  {
    path: 'newz',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'headlines',
        component: HeadlinesComponent,
      },
      {
        path: 'source-headlines',
        component: SourceHeadlinesComponent
      },
      {
        path: 'articles',
        component: WorldNewzComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'saved-articles',
        component: SavedArticlesComponent,
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "login"
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: "login"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
