import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1 class="to-blue-900 text-5xl font-bold mb-10">
        {{ title.toUpperCase() }}
      </h1>
    </header>
  `
})
export class HeaderComponent {
  title: string = "Alpaca Generator";

  constructor() { }

}
