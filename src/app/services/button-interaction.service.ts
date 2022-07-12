import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ButtonInteractionService {
  private _styleSource = new BehaviorSubject<{font: string; bg: string; border: string}>
  ({font: "text-blue-400 hover:text-blue-700", bg: "bg-white", border: "border-primary border-2 border-blue-400 hover:border-blue-600"});
  style = this._styleSource.asObservable();

  constructor() { }

  changeStyle(value: {font: string; bg: string; border: string}) {
    this._styleSource.next(value);
  }
}
