import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'login',
    templateUrl: './app/components/login/login.component.html',
    styleUrls: ['./app/components/login/login.component.css']
})

export class LoginComponent {
    user: User;
    constructor(
        private router: Router,
        private authService: AuthenticationService) {
            this.user = new User();
         }

    login() {
        this.authService.login(this.user);
    }
}