import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheDicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-dica',
  templateUrl: 'detalhe-dica.html',
})
export class DetalheDicaPage {

  descricaoDica:string;
  sobreDica: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.descricaoDica = navParams.get('descricao');
    this.sobreDica = navParams.get('sobre');
    console.log(this.descricaoDica+" | "+this.sobreDica);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheDicaPage');
  }

}
