import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PersonagemPage } from '../pages/personagem/personagem'
import { PlanetasPage } from '../pages/planetas/planetas';
import { ModalFilmePage } from '../pages/modal-filme/modal-filme';

import { DetalhePersonagemPage } from '../pages/detalhe-personagem/detalhe-personagem'
import { DetalhePlanetaPage } from '../pages/detalhe-planeta/detalhe-planeta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SwapiService } from 'ng2-swapi';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PersonagemPage,
    PlanetasPage,
    ModalFilmePage,
    DetalhePersonagemPage,
    DetalhePlanetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PersonagemPage,
    PlanetasPage,
    ModalFilmePage,
    DetalhePersonagemPage,
    DetalhePlanetaPage
  ],
  providers: [
    StatusBar,
    SwapiService,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
