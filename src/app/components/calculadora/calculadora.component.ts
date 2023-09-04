import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent {
  multiply(numberOne: number, numberTwo: number) {
    return numberOne * numberTwo;
  }

  dobleClick() {
    console.log('es un doble click');
  }
}
