import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { HomePage } from '../home/home';
import { Usuario } from '../../model/Usuario';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  tipoPessoa:string;
  usuarios: Array<Usuario> = [];
  public loginForm: any;
  usuario:string;
  erroUsuario = false;
  messageUsuario = "";
  senha:string;
  erroSenha = false
  messageSenha = "";
  nome:string;
  erroNome = false
  messageNome = "";
  
  result:any = [];
  data: Observable<any>;

  constructor(
    formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public menuCtrl: MenuController, 
    private alertCtrl: AlertController,
    private http: HttpClient) {
      this.menuCtrl.enable(false, 'myMenu');

        this.loginForm = formBuilder.group({
          usuario: ['', Validators.required],
          senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20),Validators.required])],
          nome: ['', Validators.required]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  /*postData(){
    var url = 'http://localhost:3000/cidades/';
    let postData = new FormData();
    postData.append('key','value');
    postData.append('Username', 'ingo@gmail.cm');

    this.data = this.http.post(url, postData);
    this.data.subscribe(
      data => {
        alert(data);
      }
    )
  }*/

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

  registrar(){
    let { usuario, senha, nome } = this.loginForm.controls;

    if (!this.loginForm.valid) {

      if (!usuario.valid) {
        this.erroUsuario = true;
        this.messageUsuario = "Ops! Email inválido";
        console.log(this.erroUsuario+" | Ops! Email inválido");
        this.presentAlert("Ops! Erro ao criar usuário",this.messageUsuario);
      } else {
        this.messageUsuario = "";
      }

      if (!senha.valid) {
        this.erroSenha = true;
        this.messageSenha ="A senha precisa ter de 6 a 20 caracteres"
        console.log(this.erroSenha+" | A senha precisa ter de 6 a 20 caracteres");
        this.presentAlert("Ops! Erro ao criar usuário",this.messageSenha);
      } else {
        this.messageSenha = "";
      }

      if (!nome.valid) {
        this.erroNome = true;
        this.messageNome ="Ops! Nome inválido"
        console.log(this.erroNome+" | Ops! Nome inválido");
        this.presentAlert("Ops! Erro ao criar usuário",this.messageNome);
      } else {
        this.messageSenha = "";
      }
    }
    else {
      let novoUsuario = new Usuario(this.usuario, this.senha);
      console.log(this.usuarios);
      this.usuarios.push(novoUsuario);
      this.presentAlert("Parabéns !!!","Usuário Cadastrado com sucesso");
      this.navCtrl.push(HomePage, {
        usuarios: this.usuarios
      });
    }
  }
}
