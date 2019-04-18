import { Component } from '@angular/core';

/**
 * Generated class for the DetalheDicaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detalhe-dica',
  templateUrl: 'detalhe-dica.html'
})
export class DetalheDicaComponent {

  text: string;

  constructor() {
    console.log('Hello DetalheDicaComponent Component');
    this.text = 'Hello World';
  }

}
