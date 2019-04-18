import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { AtividadesCriadas } from '../../model/AtividadesCriadas';
import { Atividade } from '../../model/Atividade';
/**
 * Generated class for the AdicionarAtividadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-atividade',
  templateUrl: 'adicionar-atividade.html',
})
export class AdicionarAtividadePage {
  public formAtividade: any;
  tipo:string;
  erroTipo = false;
  messageTipo = "";
  descricao:string;
  erroDescricao = false
  messageDescricao = "";

  atividadeEscolhida:string;

  listaMinhasAtividades = [
    new AtividadesCriadas('ios-bicycle', "Pedalar"),
    new AtividadesCriadas('ios-pizza', "Comer"),
    new AtividadesCriadas('md-create', "Escrever")
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    formBuilder: FormBuilder,
    private alertCtrl: AlertController) {
    this.formAtividade = formBuilder.group({
      tipo: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  adicionarMedico(){
    let { tipo, descricao } = this.formAtividade.controls;

    if (!this.formAtividade.valid) {

      if (!tipo.valid) {
        this.erroTipo = true;
        this.tipo = "Ops! Informe um tipo";
        console.log(this.tipo+" | erro Tipo");
        this.presentAlert("Ops! Erro ao criar atividade",this.messageTipo);
      } else {
        this.messageTipo = "Erro na criação de atividade";
      }

      if (!descricao.valid) {
        this.messageDescricao ="Informe a descrição"
        console.log(this.erroDescricao+" | informe a descrição");
        this.presentAlert("Ops! Erro ao criar a atividade",this.messageDescricao);
      } else {
        this.messageDescricao = "Erro na criação de atividade";
      }
    }
    else {
      console.log(this.descricao+"CADASTRADO !!!");
      this.listaMinhasAtividades.push(new AtividadesCriadas(this.tipo,this.descricao));
    }
  }

  editaDado(atividade:Atividade){
    alert("Descricao: "+atividade.descricao);    
  }

  presentAlert(titulo:string, mensagem:string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: [{
        text: "OK"
      }]
    });
    alert.present();
  }ç

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarAtividadePage');
  }

}
