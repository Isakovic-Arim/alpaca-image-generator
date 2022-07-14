import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/datatypes/option';
import { VisualInteractionService } from 'src/app/services/visual-interaction.service';

@Component({
  selector: 'app-button-random',
  template: `
    <button (click)="randomize()" class="bg-white text-black font-medium px-14 py-4 rounded-sm">Random</button>
  `
})
export class ButtonRandomComponent implements OnInit {

  constructor(private dataVisual: VisualInteractionService) { }

  selections: {labels: string[], identifier: Option}[] = [
    {labels: ["Default", "Curls", "Short", "Bang", "Elegant", "Quiff"], identifier: Option.HAIR},
    {labels: ["Default", "Tilt-Backward", "Tilt-Forward"], identifier: Option.EARS},
    {labels: ["Default", "Angry", "Naughty", "Panda", "Smart", "Star"], identifier: Option.EYES},
    {labels: ["Default", "Astonished", "Eating", "Laugh", "Tongue"], identifier: Option.MOUTH},
    {labels: ["Default", "Bend-Backward", "Bend-Forward", "Thick"], identifier: Option.NECK},
    {labels: ["Default", "Bubble-Tea", "Cookie", "Game-Console", "Tilt-Backward", "Tilt-Forward"], identifier: Option.LEG},
    {labels: ["Headphone", "Earings", "Flower", "Glasses"], identifier: Option.ACCESSORIES},
    {labels: ["Blue50", "Blue60", "Blue70", "DarkBlue30", "DarkBlue50", "DarkBlue70",
              "Green50", "Green60", "Green70", "Grey40", "Grey70", "Grey80", 
              "Red50", "Red60", "Red70", "Yellow50", "Yellow60", "Yellow70"], identifier: Option.BACKGROUND}
  ]

  ngOnInit(): void {
  }

  randomize() {
    this.selections.forEach(selection => {
      let randomIndex: number = Math.floor(Math.random() * selection.labels.length);
      this.dataVisual.changeVisual([selection.identifier, selection.labels[randomIndex].toLowerCase()]);
    });
  }
}
