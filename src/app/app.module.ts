import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AboutComponent } from './components/about/about.component';

//Services
import { AgteamService } from './services/agteam.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseComponent } from './components/course/course.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { LoadingComponent } from './components/loading/loading.component';

import { TopicsPipe } from './pipes/topics.pipe';

import { QuestionsComponent } from './components/questions/questions.component';
import { ConditionsComponent } from './components/conditions/conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    CreateAccountComponent,
    CoursesComponent,
    AboutComponent,
    ProfileComponent,
    CourseComponent,
    LoadingComponent,

    TopicsPipe

    QuestionsComponent,
    ConditionsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AgteamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
