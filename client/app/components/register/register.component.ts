/**
 * Created by ziv on 28/01/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'register',
    templateUrl: './app/components/register/register.component.html',
    styleUrls: ['./app/components/register/register.component.css']
})

export class RegisterComponent {
    user: User;
    constructor(
        private router: Router,
        private authService: AuthenticationService) {
        this.user = new User();
    }

    registerForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        firstName: new FormControl('', [Validators.required]),
        middleName: new FormControl('', []),
        lastName: new FormControl('', [Validators.required]),
        gender: new FormControl('male', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
        birthday: new FormControl('', [ Validators.required]),
        email: new FormControl('', [ Validators.required]),
        password: new FormControl('', [ Validators.required, Validators.minLength(6)])
    });

    register() {
        this.authService.register(this.registerForm.value);
    }

    cancel() {
        window.history.back();
    }
}