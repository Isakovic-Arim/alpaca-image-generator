import { Component, OnInit, Input } from '@angular/core';
import { OptionsInteractionService } from 'src/app/services/options-interaction.service';

@Component({
  selector: 'app-options-style',
  template: `
    <header><h2 class="text-sm font-bold container w-96">{{ heading.toUpperCase() }}</h2></header>
    <div class="container w-96 mb-10">
      <app-button *ngFor="let option of options" [text]="option"></app-button>
    </div>
  `
})
export class OptionsStyleComponent implements OnInit {
  @Input() heading: string = "";

  @Input() options: string[] = [];

  constructor(private data: OptionsInteractionService) { }

  ngOnInit(): void {
    this.data.selection.subscribe(value => this.options = value)
  }

}
