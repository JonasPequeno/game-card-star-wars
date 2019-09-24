import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePlanetaPage } from './detalhe-planeta';

@NgModule({
  declarations: [
    DetalhePlanetaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePlanetaPage),
  ],
})
export class DetalhePlanetaPageModule {}
