import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Jesús Arturo';
  name2: string = 'jEsÚs aRtUrO cArmONa';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pi: number = Math.PI;
  percent: number = 0.234;
  salary: number = 1234.5;
  date:Date = new Date();
  activar: boolean = true;

  language:string = 'en';
  videoUrl:string = 'https://www.youtube.com/embed/ezoAXKk-Dw8'

  valuePromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  hero = {
    name: 'Logan',
    code: 'Wolverine',
    age: 500,
    address: {
      street: '35 x 20',
      house: 30,
    },
  };
}
