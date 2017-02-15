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
var authentication_service_1 = require("./services/authentication.service");
var AppComponent = (function () {
    function AppComponent(authService, elementRef) {
        this.authService = authService;
        this.elementRef = elementRef;
        this.title = 'Tour of Heroes';
        this.meteorologyChapters = [
            {
                name: 'אטמוספירה',
                refLink: 'lessons/meteorology/atmosphere'
            },
            {
                name: 'חום וטמפרטורה',
                refLink: 'lessons/meteorology/pressure'
            },
            {
                name: 'לחץ אוויר ומדידת גובה',
                refLink: '/heroes'
            },
            {
                name: 'צפיפות',
                refLink: '/dashboard'
            },
            {
                name: 'רוח',
                refLink: '/dashboard'
            },
            {
                name: 'מים באטמוספירה',
                refLink: '/dashboard'
            },
            {
                name: 'תהליך אדיטבטי',
                refLink: '/dashboard'
            },
            {
                name: 'יציבות באטמוספירה',
                refLink: '/dashboard'
            },
            {
                name: 'עננים',
                refLink: '/dashboard'
            },
            {
                name: 'ענני סופה',
                refLink: '/dashboard'
            },
            {
                name: "אדי ערפול וסטרטוס נמוך",
                refLink: '/dashboard'
            },
            {
                name: 'ראות',
                refLink: '/dashboard'
            },
            {
                name: 'ערבול',
                refLink: '/dashboard'
            },
            {
                name: 'התקרחות',
                refLink: '/dashboard'
            },
            {
                name: 'גושי אוויר',
                refLink: '/dashboard'
            },
            {
                name: 'חזיתות',
                refLink: '/dashboard'
            },
            {
                name: 'מזג אוויר ישראלי',
                refLink: '/dashboard'
            },
            {
                name: 'מפות מטאורולוגיות',
                refLink: '/dashboard'
            },
            {
                name: 'מברקי תצפית METAR',
                refLink: '/dashboard'
            },
            {
                name: 'מברקי תחזית TAF',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן 1',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן 2',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן 3',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן 4',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן מסכם 1',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן מסכם 2',
                refLink: '/dashboard'
            }
        ];
        this.constitutionChapters = [
            {
                name: 'מבוא לחוקה',
                refLink: 'lessons/constitution/atmosphere'
            },
            {
                name: 'הוראות כלליות',
                refLink: 'lessons/meteorology/pressure'
            },
            {
                name: 'רשיונות למטיס כטב"מ',
                refLink: '/heroes'
            },
            {
                name: 'תקנות הטיס למטיסה כטב"מ',
                refLink: '/dashboard'
            },
            {
                name: 'שדות תעופה למטיס כטב"מ',
                refLink: '/dashboard'
            },
            {
                name: 'חוקה לטייס פרטי',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן מסכם 1',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן מסכם 2',
                refLink: '/dashboard'
            }
        ];
        this.technicalChapters = [
            {
                name: 'לחץ אוויר ומדידת גובה',
                refLink: 'lessons/technical/atmosphere'
            },
            {
                name: 'אופק מלאכותי',
                refLink: 'lessons/meteorology/pressure'
            },
            {
                name: 'צפיפות',
                refLink: '/heroes'
            },
            {
                name: 'הכוחות הפועלים על המטוס',
                refLink: '/dashboard'
            },
            {
                name: 'פרופיל ויצירת עילוי',
                refLink: '/dashboard'
            },
            {
                name: 'זוות התקפה והזדקרות',
                refLink: '/dashboard'
            },
            {
                name: 'גרר טפיל וגרר מושהה',
                refLink: '/dashboard'
            },
            {
                name: 'גרר כולל ויעילות אווירודינאמית',
                refLink: '/dashboard'
            },
            {
                name: 'אפקט קרקע',
                refLink: '/dashboard'
            },
            {
                name: 'אמצעים להגברת עילוי',
                refLink: '/dashboard'
            },
            {
                name: "המדחף",
                refLink: '/dashboard'
            },
            {
                name: 'צירי מטוסים והגאים ',
                refLink: '/dashboard'
            },
            {
                name: 'יציבות',
                refLink: '/dashboard'
            },
            {
                name: 'תגובות דינמיות והשפעת הרוח',
                refLink: '/dashboard'
            },
            {
                name: 'מערכות דלק',
                refLink: '/dashboard'
            },
            {
                name: 'הקרבורטור ומערכת הדלק',
                refLink: '/dashboard'
            },
            {
                name: 'מנוע בוכנה',
                refLink: '/dashboard'
            },
            {
                name: 'קירור המנוע',
                refLink: '/dashboard'
            },
            {
                name: 'מערכת השמן',
                refLink: '/dashboard'
            },
            {
                name: 'מערכת ההצתה',
                refLink: '/dashboard'
            },
            {
                name: 'מערכת החשמל',
                refLink: '/dashboard'
            },
            {
                name: 'מערכת פיטו',
                refLink: '/dashboard'
            },
            {
                name: 'מד הגובה',
                refLink: '/dashboard'
            },
            {
                name: 'מד מהירות',
                refLink: '/dashboard'
            },
            {
                name: "מצפן ג'ירו",
                refLink: '/dashboard'
            },
            {
                name: 'כיוונים ומצפן מגנטי',
                refLink: 'lessons/technical/atmosphere'
            },
            {
                name: 'מד פנייה ונטייה',
                refLink: 'lessons/meteorology/pressure'
            },
            {
                name: 'מצבי טיסה הקדמה',
                refLink: '/heroes'
            },
            {
                name: 'טיסה ישראה ואופקית',
                refLink: '/dashboard'
            },
            {
                name: 'נסיקה',
                refLink: '/dashboard'
            },
            {
                name: 'גלישה והנמכה',
                refLink: '/dashboard'
            },
            {
                name: 'פניות',
                refLink: '/dashboard'
            },
            {
                name: 'משקל ואיזון',
                refLink: '/dashboard'
            },
            {
                name: 'MAC%',
                refLink: '/dashboard'
            },
            {
                name: 'טיסה אסימטרית',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן ידע כללי 1',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן ידע כללי 2',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן ידע כללי 3',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן ידע כללי 4',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן ידע כללי 5',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן ידע כללי 6',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן ידע כללי מסכם',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן מסכם 1',
                refLink: '/dashboard'
            },
            {
                name: 'מבחן מסכם 2',
                refLink: '/dashboard'
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        //stop the loading
        this.elementRef.nativeElement.parentElement.setAttribute('class', 'loaded');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.html',
        styleUrls: ['./app/app.component.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        core_1.ElementRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map