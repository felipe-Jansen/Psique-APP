import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Atividade } from '../../model/Atividade';
import { AdicionarAtividadePage } from '../adicionar-atividade/adicionar-atividade';

@IonicPage()
@Component({
  selector: 'page-atividades',
  templateUrl: 'atividades.html',
})
export class AtividadesPage {

  listaAtividade = [
    new Atividade('ios-heart', "Namorar"),
    new Atividade('ios-bicycle', "Pedalar"),
    new Atividade('ios-cash', "Comprar"),
    new Atividade('md-create', "Escrever"),
    new Atividade('ios-car', "Dirigir"),
    new Atividade('logo-playstation', "Jogar"),
    new Atividade('ios-pizza', "Comer"),
    new Atividade('ios-construct', "Trabalhar"),
    new Atividade('ios-desktop', "Assistir"),
    new Atividade('ios-plane', "Viajar")
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtividadesPage');
  }

  novaAtividade(){
    this.navCtrl.push(AdicionarAtividadePage);
  }

}
