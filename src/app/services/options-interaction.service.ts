import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsInteractionService {

  private _selectionSource = new BehaviorSubject<string[]>([]);
  selection = this._selectionSource.asObservable();

  constructor() { }

  changeValue(value: string[]) {
    this._selectionSource.next(value);
  }
}
