import { Component, OnInit, Input } from '@angular/core';
import { ButtonInteractionService } from 'src/app/services/button-interaction.service';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="clickHandler()" class="{{style.font}} font-medium {{style.bg}} {{style.border}} rounded-full m-1 py-2 px-7">{{ text }}</button>
  `
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "";

  constructor(private data: ButtonInteractionService) { }

  ngOnInit(): void {
    this.data.style.subscribe(value => this.style = value);
  }

  standard: {font: string; bg: string; border: string} = {
    font: "text-white",
    bg: "bg-blue-800",
    border: "border-primary border-2"
  }

  style: {font: string; bg: string; border: string} = this.standard;

  clicked: {font: string; bg: string; border: string} = {
    font: "text-blue-400 hover:text-blue-700",
    bg: "bg-white",
    border: "border-primary border-2 border-blue-400 hover:border-blue-500"
  }

  clickHandler() {
      this.data.changeStyle(this.clicked);
      this.style = this.standard;
  }
}
