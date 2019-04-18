import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { Medico } from '../../model/Medico';

@IonicPage()
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage{

  public formMedico: any;
  medico:string;
  erroMedico = false;
  messageMedico = "";
  hora:string;
  erroHora = false
  messageHora = "";

  public listaMedicos = [
    new Medico("felipe.jansen@outlook.com.br","12:00"),
    new Medico("doutor@medico.com.br","21:00")
  ]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    formBuilder: FormBuilder,
    private alertCtrl: AlertController) {

      this.formMedico = formBuilder.group({
        medico: ['', Validators.required],
        hora: ['', Validators.required]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }

  adicionarMedico(){
    let { medico, hora } = this.formMedico.controls;

    if (!this.formMedico.valid) {

      if (!medico.valid) {
        this.erroMedico = true;
        this.messageMedico = "Ops! Email inválido";
        console.log(this.erroMedico+" | Ops! Email inválido");
        this.presentAlert("Ops! Erro ao cadastrar médico",this.messageMedico);
      } else {
        this.messageMedico = "Erro no Cadastro do Medico";
      }

      if (!hora.valid) {
        this.messageHora ="Formato de hora inválido -HH:mm-"
        console.log(this.erroHora+" | Formato de hora inválido");
        this.presentAlert("Ops! Erro ao cadastrar médico",this.messageHora);
      } else {
        this.messageHora = "Erro no Cadastro do Horario";
      }
    }
    else {
      console.log("CADASTRADO !!!");
      this.listaMedicos.push(new Medico(this.medico,this.hora));
    }
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
  }

}
