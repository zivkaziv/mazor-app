import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { DashboardStudentComponent }   from './components/dashboardstudent/dashboardstudent.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { AuthGuard } from './common/auth.guard';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";
import {LessonSlidesComponent} from "./components/lessonslides/lessonslides.component";
import {PregnantRightsComponent} from "./components/pregnantrights/pregnantrights.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PregnantRightsComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
