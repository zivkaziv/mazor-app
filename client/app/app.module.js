"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var angular2_jwt_js_1 = require("angular2-jwt/angular2-jwt.js");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var heroes_component_1 = require("./components/heroes/heroes.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dashboardstudent_component_1 = require("./components/dashboardstudent/dashboardstudent.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var login_component_1 = require("./components/login/login.component");
var hero_service_1 = require("./services/hero.service");
var authentication_service_1 = require("./services/authentication.service");
var material_1 = require("@angular/material");
var ng2_expansion_panels_1 = require("ng2-expansion-panels");
var auth_guard_1 = require("./common/auth.guard");
var register_component_1 = require("./components/register/register.component");
var lessonslides_component_1 = require("./components/lessonslides/lessonslides.component");
var loaded_directive_1 = require("./directives/loaded/loaded.directive");
var pregnantrights_component_1 = require("./components/pregnantrights/pregnantrights.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_1.routing,
            material_1.MaterialModule,
            ng2_expansion_panels_1.ExpansionPanelsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            heroes_component_1.HeroesComponent,
            dashboard_component_1.DashboardComponent,
            hero_detail_component_1.HeroDetailComponent,
            dashboardstudent_component_1.DashboardStudentComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
            lessonslides_component_1.LessonSlidesComponent,
            pregnantrights_component_1.PregnantRightsComponent,
            loaded_directive_1.LoadedDirective
        ],
        providers: [
            hero_service_1.HeroService,
            authentication_service_1.AuthenticationService,
            angular2_jwt_js_1.AUTH_PROVIDERS,
            auth_guard_1.AuthGuard
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map