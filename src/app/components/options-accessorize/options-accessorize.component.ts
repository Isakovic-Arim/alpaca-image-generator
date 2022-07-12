import { Component, OnInit, Input } from '@angular/core';
import { OptionsInteractionService } from 'src/app/services/options-interaction.service';

@Component({
  selector: 'app-options-accessorize',
  template: `
    <header><h2 class="text-sm font-bold container w-96">{{ heading.toUpperCase() }}</h2></header>
    <div class="container w-96 mb-10">
      <app-button (click)="newValue(i)" *ngFor="let option of options, index as i" [text]="option"></app-button>
    </div>
  `
})
export class OptionsAccessorizeComponent implements OnInit {
  @Input() heading: string = "";

  @Input() options: string[] = [];

  selections: string[][] = [
    ["Default", "Curls", "Short", "Bang", "Elegant", "Quiff"],
    ["Default", "Tilt-Backward", "Tilt-Forward"],
    ["Default", "Angry", "Naughty", "Panda", "Smart", "Star"],
    ["Default", "Astonished", "Eating", "Laugh", "Tongue"],
    ["Default", "Bend-Backward", "Bend-Forward", "Thick"],
    ["Default", "Bubble-Tea", "Cookie", "Game-Console", "Tilt-Backward", "Tilt-Forward"],
    ["Headphone", "Earings", "Flower", "Glasses"],
    ["Blue50", "Blue60", "Blue70", "Dark Blue 30", "Dark Blue 50", "Dark Blue 70",
      "Green 50", "Green 60", "Green 70", "Grey 40", "Grey 70", "Grey 80", 
      "Red 50", "Red 60", "Red 70", "Yellow 50", "Yellow 60", "Yellow 70"]
  ]

  constructor(private data: OptionsInteractionService) { }

  ngOnInit(): void {
  }

  newValue(selection: number) {
    this.data.changeValue(this.selections[selection]);
  }

}
