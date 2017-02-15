import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { User } from '../models/user.model';
import { tokenNotExpired } from 'angular2-jwt/angular2-jwt.js';

@Injectable()
export class AuthenticationService {
    private user : User;

    constructor(
        private router: Router,
         private http: Http) { }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("email");
        this.router.navigate(['login']);
    }

    login(user: User) {
        let body = JSON.stringify(user);
        this.http.post('/api/auth/login', body, { headers: contentHeaders })
            .subscribe(
            response => {
                if (JSON.stringify(response.json().success) === "true") {
                    localStorage.setItem('id_token', JSON.stringify(response.json().token));
                    localStorage.setItem('email', JSON.stringify(response.json().email));
                    user = response.json().user;
                    console.log(user);
                    this.router.navigate(['dashboard']);
                }else {
                    window.alert(JSON.stringify(response.json().message));
                }
            },
            error => {
                alert(error.text());
                console.log(error.text());
                return false;
            });
        return true;
    }

    register(user: User) {
        let body = JSON.stringify(user);
        this.http.post('/api/auth/account', body, { headers: contentHeaders })
            .subscribe(
                response => {
                    if (JSON.stringify(response.json().success) === "true") {
                        localStorage.setItem('id_token', JSON.stringify(response.json().token));
                        localStorage.setItem('email', JSON.stringify(response.json().email));
                        user = response.json().user;
                        console.log(user);
                        this.router.navigate(['dashboard']);
                    }else {
                        window.alert(JSON.stringify(response.json().message));
                    }
                },
                error => {
                    alert(error.text());
                    console.log(error.text());
                    return false;
                });
        return true;
    }
    isLoggedin() {
        if (tokenNotExpired()) {
            return true;
        }else {
            return false;
        }
    }
}