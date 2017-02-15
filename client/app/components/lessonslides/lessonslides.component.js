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
/**
 * Created by ziv on 02/02/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../services/authentication.service");
var LessonSlidesComponent = (function () {
    function LessonSlidesComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    return LessonSlidesComponent;
}());
LessonSlidesComponent = __decorate([
    core_1.Component({
        selector: 'lesson-slides',
        templateUrl: './app/components/lessonslides/lessonslides.component.html',
        styleUrls: ['./app/components/lessonslides/lessonslides.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], LessonSlidesComponent);
exports.LessonSlidesComponent = LessonSlidesComponent;
//# sourceMappingURL=lessonslides.component.js.map