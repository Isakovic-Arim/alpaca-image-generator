import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Option } from '../datatypes/option';

@Injectable({
  providedIn: 'root'
})
export class VisualInteractionService {

  private _visualSource = new BehaviorSubject<[identifier: Option, specifier: string]>([ Option.BACKGROUND, "blue50"]);
  visual = this._visualSource.asObservable();

  constructor() { }

  changeVisual(values: [identifier: Option, specifier: string]) {
    this._visualSource.next(values);
  }
}
