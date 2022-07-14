import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-random',
  template: `
    <button (click)="randomize()" class="bg-white text-black font-medium px-14 py-4 rounded-sm">Random</button>
  `
})

export class ButtonRandomComponent implements OnInit {

  constructor() { }

  values: {current: number, max: number}[] = [
    {current: 0, max: 5},
    {current: 0, max: 2},
    {current: 0, max: 6},
    {current: 0, max: 5},
    {current: 0, max: 4},
    {current: 0, max: 6},
    {current: 0, max: 4},
    {current: 0, max: 18},
  ]

  ngOnInit(): void {
    
  }

  randomize() {
    this.values.forEach(value  => {
      value.current = Math.floor(Math.random() * value.max);
    });
  }
}
