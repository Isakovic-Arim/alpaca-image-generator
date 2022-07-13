import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/datatypes/option';
import { VisualInteractionService } from 'src/app/services/visual-interaction.service';

@Component({
  selector: 'app-visual',
  template: `
    <figure class="w-100">
      <img src="./assets/alpaca/backgrounds/{{props[7]}}.png" class="absolute z-0" width="400px" height="400px">
      <img src="./assets/alpaca/ears/{{props[1]}}.png" class="absolute z-10" width="400px" height="400px">
      <img src="./assets/alpaca/neck/{{props[4]}}.png" class="absolute z-20" width="400px" height="400px">
      <img src="./assets/alpaca/nose.png" class="absolute z-30" width="400px" height="400px">
      <img src="./assets/alpaca/hair/{{props[0]}}.png" class="absolute z-60" width="400px" height="400px">
      <img src="./assets/alpaca/mouth/{{props[3]}}.png" class="absolute z-70" width="400px" height="400px">
      <img src="./assets/alpaca/eyes/{{props[2]}}.png" class="absolute z-80" width="400px" height="400px">
      <img src="./assets/alpaca/leg/{{props[5]}}.png" class="absolute z-90" width="400px" height="400px">
      <img src="./assets/alpaca/accessories/{{props[6]}}.png" class="absolute z-50" width="400px" height="400px">
    </figure>
  `
})
export class VisualComponent implements OnInit {

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

  ngOnInit(): void {
    this.dataVisual.visual.subscribe( value => this.props[value[0]] = value[1] );
  }
}
