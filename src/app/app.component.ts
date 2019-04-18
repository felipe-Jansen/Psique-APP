import { DatabaseProvider } from './../providers/database/database';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { EstatisticaPage } from '../pages/estatistica/estatistica';
import { InicialUserPage } from '../pages/inicial-user/inicial-user';
import { DicasPage } from '../pages/dicas/dicas';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { AtividadesPage } from '../pages/atividades/atividades';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = null;

  pages: Array<{title: string, component: any}>;

  usuario: string;

  constructor(public events: Events, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,dbProvider: DatabaseProvider) {
    this.initializeApp();
    dbProvider.createDatabase()
    .then(() =>{
      this.openHomePage(splashScreen);
    }).catch(() =>{
      this.openHomePage(splashScreen);
    })
    // used for an example of ngFor and navigation
    events.subscribe('user:created', (usuario, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', usuario, 'at', time);
      this.usuario = usuario;
    });
    this.pages = [
      { title: 'Inicial', component: InicialUserPage },
      { title: 'Dicas', component: DicasPage },
      { title: 'Estatísticas', component: EstatisticaPage },
      { title: 'Configurações', component: ConfiguracaoPage },
      { title: 'Sair', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
  }

  private openHomePage(splashScreen: SplashScreen){
    splashScreen.hide();
    this.rootPage = HomePage;
  }
}
