import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-options',
  template: `
    <header><h2 class="text-sm font-bold">{{ heading.toUpperCase() }}</h2></header>
  `
})
export class OptionsComponent {
  @Input() heading: string = "";

  constructor() { }

}
