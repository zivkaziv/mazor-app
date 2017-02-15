/**
 * Created by ziv on 02/02/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'lesson-slides',
    templateUrl: './app/components/lessonslides/lessonslides.component.html',
    styleUrls: ['./app/components/lessonslides/lessonslides.component.css']
})

export class LessonSlidesComponent {
    constructor(
        private router: Router,
        private authService: AuthenticationService) {
    }

}