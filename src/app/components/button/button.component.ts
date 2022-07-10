import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="clickHandler()" class="text-blue-400  bg-white rounded-full border-primary border-2 border-blue-400 m-1 py-2 px-7">{{ text }}</button>
  `
})
export class ButtonComponent {
  @Input() text: string = "";

  constructor() { }

  clickHandler() {
    
  }
}
