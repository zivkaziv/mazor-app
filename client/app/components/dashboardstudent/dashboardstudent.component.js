/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("../../services/hero.service");
var DashboardStudentComponent = (function () {
    function DashboardStudentComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    DashboardStudentComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero._id];
        this.router.navigate(link);
    };
    return DashboardStudentComponent;
}());
DashboardStudentComponent = __decorate([
    core_1.Component({
        selector: 'student-dashboard',
        templateUrl: './app/components/dashboardstudent/dashboardstudent.component.html',
        styleUrls: ['./app/components/dashboardstudent/dashboardstudent.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], DashboardStudentComponent);
exports.DashboardStudentComponent = DashboardStudentComponent;
//# sourceMappingURL=dashboardstudent.component.js.map