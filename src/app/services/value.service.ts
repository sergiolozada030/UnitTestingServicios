import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  private value = 'valor inicial';

  getValue() {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }

  getPromiseValue() {
    return Promise.resolve('Promise value');
  }

  getObservableValue() {
    return of('Observable value');
  }
}
