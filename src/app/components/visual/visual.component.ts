import { Component } from '@angular/core';

@Component({
  selector: 'app-visual',
  template: `
    <figure class="w-100">
      <img src="./assets/alpaca/backgrounds/blue50.png" class="absolute" width="400px" height="400px">
      <img src="./assets/alpaca/ears/default.png" class="absolute" width="400px" height="400px">
      <img src="./assets/alpaca/neck/default.png" class="absolute" width="400px" height="400px">
      <img src="./assets/alpaca/hair/default.png" class="absolute" width="400px" height="400px">
      <img src="./assets/alpaca/eyes/default.png" class="absolute" width="400px" height="400px">
      <img src="./assets/alpaca/nose.png" class="absolute" width="400px" height="400px">
      <img src="./assets/alpaca/mouth/default.png" class="absolute" width="400px" height="400px">
      <img src="./assets/alpaca/leg/default.png" class="absolute" width="400px" height="400px">
    </figure>
  `
})
export class VisualComponent {

  constructor() { }

}
