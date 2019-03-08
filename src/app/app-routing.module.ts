import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { SigninComponent } from './components/signin/signin.component';
import { AboutComponent } from './components/about/about.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'about', component: AboutComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
