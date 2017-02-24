import {Component, OnInit, ElementRef} from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector:'my-app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent{
    title = 'Tour of Heroes';

    constructor(
        private authService: AuthenticationService,
        protected elementRef: ElementRef) {
         }

    ngOnInit() {
        //stop the loading
        this.elementRef.nativeElement.parentElement.setAttribute('class','loaded')
    }

}