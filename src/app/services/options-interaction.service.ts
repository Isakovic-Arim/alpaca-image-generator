import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Option } from '../datatypes/option';

@Injectable({
  providedIn: 'root'
})
export class OptionsInteractionService {

  private _selectionSource = new BehaviorSubject<{labels: string[], identifier: Option, specifier: string}>({labels: [], identifier: Option.HAIR, specifier: "" });
  selection = this._selectionSource.asObservable();

  constructor() { }

  changeValue(value: {labels: string[], identifier: Option, specifier: string}) {
    this._selectionSource.next(value);
  }
}
