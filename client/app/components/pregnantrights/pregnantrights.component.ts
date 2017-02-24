
import {Component} from "@angular/core";

@Component({
  selector: 'pregnant-rights',
    templateUrl: './app/components/pregnantrights/pregnantrights.component.html',
    styleUrls: ['./app/components/pregnantrights/pregnantrights.component.css']
})
export class PregnantRightsComponent {
  autoTicks = true;
  showTicks = true;
  thumbLabel = true;

  age=25;
  maxAge = 100;
  minAge = 0;
  stepAge = 1;

  onAgeChange(event: any) {
    this.age = event.value;
  }

  measureType = 'Pound';
  weight=120;
  maxWeight = 300;
  minWeight = 60;
  stepWeight = 1;

  onWeightChange(event: any) {
    this.weight = event.value;
  }

}