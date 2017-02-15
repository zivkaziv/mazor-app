import { Directive, ElementRef, Input } from '@angular/core';
@Directive({ selector: '[loaded]' })
export class LoadedDirective {
    constructor(el: ElementRef) {
        // el.nativeElement.style.backgroundColor = 'yellow';
    }
}