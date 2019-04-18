import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { SQLite } from '@ionic-native/sqlite';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EstatisticaPage } from '../pages/estatistica/estatistica';
import { RegistroPage } from '../pages/registro/registro';
import { InicialUserPage } from '../pages/inicial-user/inicial-user';
import { DicasPage } from './../pages/dicas/dicas';

import { DatabaseProvider } from '../providers/database/database';
import { CrudAppProvider } from '../providers/crud-app/crud-app';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { DetalheDicaPage } from './../pages/detalhe-dica/detalhe-dica';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { AtividadesPage } from '../pages/atividades/atividades';
import { AdicionarAtividadePage } from '../pages/adicionar-atividade/adicionar-atividade';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EstatisticaPage,
    RegistroPage,
    InicialUserPage,
    DicasPage,
    DetalheDicaPage,
    ConfiguracaoPage,
    AtividadesPage,
    AdicionarAtividadePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EstatisticaPage,
    RegistroPage,
    InicialUserPage,
    DicasPage,
    DetalheDicaPage,
    ConfiguracaoPage,
    AtividadesPage,
    AdicionarAtividadePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LOCALE_ID, useValue: 'Pt-BR'},
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    CrudAppProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
