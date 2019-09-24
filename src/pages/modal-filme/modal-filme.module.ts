import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalFilmePage } from './modal-filme';

@NgModule({
  declarations: [
    ModalFilmePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalFilmePage),
  ],
})
export class ModalFilmePageModule {}
