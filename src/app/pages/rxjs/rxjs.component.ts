import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {
  constructor() { 
    this.retornaObservable().pipe(
      retry()  
    )
    .subscribe(
      valor => console.log('Subs:', valor),
      (err) => console.warn('Error:', err),
      () => console.info('Obs terminado')
    );
  }

  retornaObservable() {
    /* Creando un observable */
    let i = -1;

    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval( () => {
        i++;  
        observer.next(i);

        if( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }

        if( i === 2 ) {
          observer.error('i llegó al valor de 2');
        }
        
      }, 1000 );
    });

    return obs$;
  }
}