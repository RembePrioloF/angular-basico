import { Component } from "@angular/core";



@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>

    <h3>La base es: {{base}}</h3>

    <button (click)="contar(-base)">-{{base}}</button>

    <span>{{number}}</span>

    <button (click)="contar(base)">+{{base}}</button>

  `
})
export class ContadorComponent {
  title = 'Contador App';
  number = 0;
  base = 5;

  contar(valor: number) {
    this.number += valor;
  }

}
