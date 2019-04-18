import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Humor } from "../../model/Humor";
import { EstatisticaPage } from './../estatistica/estatistica';
import { AtividadesPage } from '../atividades/atividades';
import { DicasPage } from '../dicas/dicas';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the InicialUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicial-user',
  templateUrl: 'inicial-user.html',
})
export class InicialUserPage {

  result:any = [];
  data: Observable<any>;

  pontosHumor:number;
  listaHumor: Array<Humor> = [
    new Humor(1,'ios-add',"Bem"),
    new Humor(2,'ios-add',"Muito Bem"),
    new Humor(3,'ios-add',"Triste"),
    new Humor(4,'ios-add',"Muito Triste"),
    new Humor(5,'ios-add',"Mais ou Menos")
  ]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public menuCtrl: MenuController,
    private http: HttpClient) {
      this.menuCtrl.enable(true, 'myMenu');
  }

  requisicao(){
    var url = 'http://localhost:3000/cidades/';
    this.data = this.http.get(url);
    this.data.subscribe(data => {
      this.result = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicialUserPage');
  }

  novaAtividade(){
    this.navCtrl.push(AtividadesPage);
  }

  gotoDicas(){
    this.navCtrl.push(DicasPage);
  }

  paginaGrafico(){
    this.navCtrl.push(EstatisticaPage);
  }

  alertaHumor(humor:Humor) {
    console.log("Humor = "+humor);
    let alert = this.alertCtrl.create({
      title: 'Confirmação de Humor',
      message: 'Deseja confimar o humor selecionado ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelado',
          handler: () => {
            console.log('Cancelado');
          }
        }, 
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirmado');
            this.navCtrl.push(AtividadesPage);
          }
        }
      ]
    });
    alert.present();
  }
}
