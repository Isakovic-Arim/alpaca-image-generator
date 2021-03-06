import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/datatypes/option';
import { VisualInteractionService } from 'src/app/services/visual-interaction.service';

@Component({
  selector: 'app-visual',
  template: `
    <figure id="preview" class="relative h-96 w-96">
      <img src="./assets/alpaca/backgrounds/{{props[7]}}.png" class="absolute z-0 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/ears/{{props[1]}}.png" class="absolute z-10 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/neck/{{props[4]}}.png" class="absolute z-20 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/nose.png" class="absolute z-30 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/hair/{{props[0]}}.png" class="absolute z-60 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/mouth/{{props[3]}}.png" class="absolute z-70 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/eyes/{{props[2]}}.png" class="absolute z-80 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/leg/{{props[5]}}.png" class="absolute z-90 h-96 w-96" draggable="false">
      <img src="./assets/alpaca/accessories/{{props[6]}}.png" [ngClass]="zIndex" class="absolute h-96 w-96" draggable="false">
    </figure>
  `
})
export class VisualComponent implements OnInit {

  zIndex: string = "z-50"; // is only used for accessories

  links: string[] = [];

  props: string[] = [
    "default",
    "default",
    "default",
    "default",
    "default",
    "default",
    "headphone",
    "blue50"
  ]

  constructor(private dataVisual: VisualInteractionService) { }

  moveToFront(value: [Option, string]) {
    if (value[0] === Option.ACCESSORIES) {
      if ((value[1] == "glasses" || value[1] == "flower")) {
        this.zIndex = "z-100";
      } else  {
        this.zIndex = "z-50";
      }
    }
  }

  ngOnInit(): void {
    this.dataVisual.visual.subscribe(value => {
        this.props[value[0]] = value[1];
        this.moveToFront(value);
      }
    );
  }
}
