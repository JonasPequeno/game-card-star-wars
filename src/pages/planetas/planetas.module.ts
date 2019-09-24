import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetasPage } from './planetas';

@NgModule({
  declarations: [
    PlanetasPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetasPage),
  ],
})
export class PlanetasPageModule {}
