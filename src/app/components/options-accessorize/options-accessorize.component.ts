import { Component, Input } from '@angular/core';
import { Option } from 'src/app/datatypes/option';
import { OptionsInteractionService } from 'src/app/services/options-interaction.service';

@Component({
  selector: 'app-options-accessorize',
  template: `
    <header><h2 class="text-sm font-bold container">{{ heading.toUpperCase() }}</h2></header>
    <div class="container w-96 mb-20">
      <app-button (click)="newValue(i)" *ngFor="let option of options, index as i" [text]="option"></app-button>
    </div>
  `
})
export class OptionsAccessorizeComponent {
  @Input() heading: string = "";

  @Input() options: string[] = [];

  selections: {labels: string[], identifier: Option, specifier: string}[] = [
    {labels: ["Default", "Curls", "Short", "Bang", "Elegant", "Quiff"], identifier: Option.HAIR, specifier: ""},
    {labels: ["Default", "Tilt-Backward", "Tilt-Forward"], identifier: Option.EARS, specifier: ""},
    {labels: ["Default", "Angry", "Naughty", "Panda", "Smart", "Star"], identifier: Option.EYES, specifier: ""},
    {labels: ["Default", "Astonished", "Eating", "Laugh", "Tongue"], identifier: Option.MOUTH, specifier: ""},
    {labels: ["Default", "Bend-Backward", "Bend-Forward", "Thick"], identifier: Option.NECK, specifier: ""},
    {labels: ["Default", "Bubble-Tea", "Cookie", "Game-Console", "Tilt-Backward", "Tilt-Forward"], identifier: Option.LEG, specifier: ""},
    {labels: ["Headphone", "Earings", "Flower", "Glasses"], identifier: Option.ACCESSORIES, specifier: ""},
    {labels: ["Blue50", "Blue60", "Blue70", "DarkBlue30", "DarkBlue50", "DarkBlue70",
              "Green50", "Green60", "Green70", "Grey40", "Grey70", "Grey80", 
              "Red50", "Red60", "Red70", "Yellow50", "Yellow60", "Yellow70"], identifier: Option.BACKGROUND, specifier: ""}
  ]

  constructor(private data: OptionsInteractionService) { }

  newValue(index: number) {
    this.data.changeValue(this.selections[index]);
  }
}
