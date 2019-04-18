
import { Component } from '@angular/core';
import { NavController, MenuController, Events, AlertController, NavParams  } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';

import { InicialUserPage } from './../inicial-user/inicial-user';
import { Usuario } from '../../model/Usuario';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm: any;
  usuario:string;
  erroUsuario = false;
  messageUsuario = "";
  senha:string;
  erroSenha = false
  messageSenha = "";

  usuarios: Array<Usuario> = [];
  //senha:string;
  //usuario:string;

  constructor(public navCtrl: NavController
    , public menuCtrl: MenuController
    , public events: Events
    , private alertCtrl: AlertController
    , public navParams: NavParams,
    formBuilder: FormBuilder) {
      this.menuCtrl.enable(false, 'myMenu');
      let usuarios = navParams.get('usuarios');
      this.usuarios = usuarios;

      this.loginForm = formBuilder.group({
        usuario: ['', Validators.required],
        senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),Validators.required])]
      });

  }

  createUser(user) {
    console.log('User created!');
  }

  onSubmit(){

  }

  presentAlert(titulo:string, mensagem:string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: [{
        text: "OK",
      },
      {
        text: "Cancelar",
        handler: () => {
          this.navCtrl.push(HomePage);
        }
      }]
    });
    alert.present();
  }

  login(){
    let { usuario, senha, nome } = this.loginForm.controls;

    if (!this.loginForm.valid) {

      if (!usuario.valid) {
        this.erroUsuario = true;
        this.messageUsuario = "Ops! Email inválido";
        console.log(this.erroUsuario+" | Ops! Email inválido");
        this.presentAlert("Ops! Erro ao acessar",this.messageUsuario);
      } else {
        this.messageUsuario = "";
      }

      if (!senha.valid) {
        this.erroSenha = true;
        this.messageSenha ="A senha precisa ter de 6 a 20 caracteres"
        console.log(this.erroSenha+" | A senha precisa ter de 6 a 20 caracteres");
        this.presentAlert("Ops! Erro ao acessar",this.messageSenha);
      } else {
        this.messageSenha = "";
      }
    }
    else {
      console.log("LOGADO !!!");
      this.events.publish('user:created', this.usuario, Date.now());
      this.navCtrl.setRoot(InicialUserPage);
    }
  }

  registrar(){
    this.navCtrl.push(RegistroPage);
  }

  registrarFacebook() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'usuario',
          placeholder: 'Nome de Usuário'
        },
        {
          name: 'senha',
          placeholder: 'Digite sua senha',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Acessar',
          handler: data => {
            this.login()
          }
        }
      ]
    });
    alert.present();
  }
}
