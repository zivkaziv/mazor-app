import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { DashboardStudentComponent }   from './components/dashboardstudent/dashboardstudent.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { AuthGuard } from './common/auth.guard';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";
import {LessonSlidesComponent} from "./components/lessonslides/lessonslides.component";


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-studens',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lessons/:topic/:chapter',
    component: LessonSlidesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
