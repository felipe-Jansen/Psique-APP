import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalheDicaPage } from './../detalhe-dica/detalhe-dica';

/**
 * Generated class for the DicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  descricaoDica: string;
  sobreDica: string;

  dicas = [
    new Dica(0, "Pratique atividades físicas", "A atividade física pode ser uma aliada importante no combate ao estresse."),
    new Dica(1, "Controle a respiração", "A respiração está muito ligada à redução da ansiedade."),
    new Dica(2, "Encontre um hobby", "Hobbies são interesses e habilidades explorados fora do domínio profissional."),
    new Dica(3, "Coma Bem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo leo eu tincidunt sagittis. Pellentesque laoreet vitae tellus sed scelerisque. Nulla facilisi. Praesent nec orci in sapien rhoncus vulputate. "),
    new Dica(4, "Pensamentos Positivos", "Enxergar as coisas de maneira positiva, procurando sempre o lado bom de tudo com pensamentos positivos e conhecendo o poder da mente."),
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  displayDica(idDica:number){
    for(let i=0; i<this.dicas.length; i++){
      this.dicas[i].mostrar = false;
    }
    this.dicas[idDica].mostrar = !this.dicas[idDica].mostrar;
    this.descricaoDica = this.dicas[idDica].descricao;
    this.sobreDica = this.dicas[idDica].sobre;
    return this.dicas[idDica].mostrar;
  }

  detalheDica(){
    this.navCtrl.setRoot(DetalheDicaPage, {
      descricao: this.descricaoDica,
      sobre: this.sobreDica
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

}

export class Dica{

  id:number;
  descricao:string;
  sobre:string;
  mostrar: boolean = false;

  constructor(id:number, descricao:string, sobre:string){
    this.id = id;
    this.descricao = descricao;
    this.sobre = sobre;
  }
}
