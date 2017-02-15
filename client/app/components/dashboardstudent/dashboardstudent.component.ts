/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'student-dashboard',
    templateUrl: './app/components/dashboardstudent/dashboardstudent.component.html',
    styleUrls: ['./app/components/dashboardstudent/dashboardstudent.component.css']
})

export class DashboardStudentComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero._id];
        this.router.navigate(link);
    }
}