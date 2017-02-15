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
 * Created by ziv on 28/01/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_model_1 = require("../../models/user.model");
var authentication_service_1 = require("../../services/authentication.service");
var forms_1 = require("@angular/forms");
var RegisterComponent = (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.registerForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl('', [forms_1.Validators.required]),
            lastName: new forms_1.FormControl('', [forms_1.Validators.required]),
            id: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(7)]),
            company: new forms_1.FormControl('', []),
            gender: new forms_1.FormControl('male', [forms_1.Validators.required]),
            phoneNumber: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(9)]),
            birthday: new forms_1.FormControl('', [forms_1.Validators.required]),
            email: new forms_1.FormControl('', [forms_1.Validators.required]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)])
        });
        this.user = new user_model_1.User();
    }
    RegisterComponent.prototype.register = function () {
        // console.log(this.registerForm.value);
        this.authService.register(this.registerForm.value);
    };
    RegisterComponent.prototype.cancel = function () {
        window.history.back();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: './app/components/register/register.component.html',
        styleUrls: ['./app/components/register/register.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map