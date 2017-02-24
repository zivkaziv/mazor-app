import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt/angular2-jwt.js';


import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { DashboardStudentComponent }   from './components/dashboardstudent/dashboardstudent.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { LoginComponent }  from './components/login/login.component';

import { HeroService }  from './services/hero.service';
import { AuthenticationService } from './services/authentication.service';
import { MaterialModule } from '@angular/material';
import { ExpansionPanelsModule } from 'ng2-expansion-panels';

import { AuthGuard } from './common/auth.guard';
import {RegisterComponent} from "./components/register/register.component";
import {LessonSlidesComponent} from "./components/lessonslides/lessonslides.component";
import {LoadedDirective} from "./directives/loaded/loaded.directive";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MaterialModule.forRoot(),
    ExpansionPanelsModule
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    DashboardStudentComponent,
    LoginComponent,
    RegisterComponent,
    LessonSlidesComponent,
    LoadedDirective
  ],
  providers: [
    HeroService,
    AuthenticationService,
    AUTH_PROVIDERS,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
