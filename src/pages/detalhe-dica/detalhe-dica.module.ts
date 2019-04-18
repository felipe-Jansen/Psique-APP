import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheDicaPage } from './detalhe-dica';

@NgModule({
  declarations: [
    DetalheDicaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheDicaPage),
  ],
})
export class DetalheDicaPageModule {}
