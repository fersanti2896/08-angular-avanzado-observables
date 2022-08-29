import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* Promesas */
    const promesa = new Promise( (resolve, reject) => {
      if( false ) {
        resolve('Hola mundo desde promesa!');
      } else {
        reject('Algo salió mal en la promesa!');
      }
    });

    promesa.then( (mensaje) => {
      console.log(mensaje)
    }).catch( (mensaje) => {
      console.log(mensaje);
    });

    console.log('Fin del init');
  }
}
