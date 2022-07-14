import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  template: `
    <button class="bg-white text-black font-medium px-12 py-4 rounded-sm">{{text}}</button>
  `
})
export class ButtonActionComponent implements OnInit {
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
