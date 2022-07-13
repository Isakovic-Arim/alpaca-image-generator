import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/app/datatypes/option';
import { OptionsInteractionService } from 'src/app/services/options-interaction.service';
import { VisualInteractionService } from 'src/app/services/visual-interaction.service';

@Component({
  selector: 'app-options-style',
  template: `
    <header><h2 class="text-sm font-bold container w-96">{{ heading.toUpperCase() }}</h2></header>
    <div class="container w-96 mb-10">
      <app-button (click)="changeAppearance(options.identifier, option)" *ngFor="let option of options.labels, index as i" [text]="option"></app-button>
    </div>
  `
})
export class OptionsStyleComponent implements OnInit {
  @Input() heading: string = "";

  @Input() options: {labels: string[], identifier: Option, specifier: string} = {labels: [], identifier: Option.HAIR, specifier: ""};

  constructor(private data: OptionsInteractionService, private dataVisual: VisualInteractionService) { }

  ngOnInit(): void {
    this.data.selection.subscribe(value => this.options = value);
  }

  changeAppearance(identifier: Option, specifier: string) {
    this.dataVisual.changeVisual([identifier, specifier.toLowerCase()]);
  }
}
