"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dashboardstudent_component_1 = require("./components/dashboardstudent/dashboardstudent.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var auth_guard_1 = require("./common/auth.guard");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var lessonslides_component_1 = require("./components/lessonslides/lessonslides.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'dashboard',
        component: dashboardstudent_component_1.DashboardStudentComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'dashboard-studens',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'lessons/:topic/:chapter',
        component: lessonslides_component_1.LessonSlidesComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map