import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicialUserPage } from './inicial-user';

@NgModule({
  declarations: [
    InicialUserPage,
  ],
  imports: [
    IonicPageModule.forChild(InicialUserPage),
  ],
})
export class InicialUserPageModule {}
