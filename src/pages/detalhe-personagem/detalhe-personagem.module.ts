import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePersonagemPage } from './detalhe-personagem';

@NgModule({
  declarations: [
    DetalhePersonagemPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePersonagemPage),
  ],
})
export class DetalhePersonagemPageModule {}
