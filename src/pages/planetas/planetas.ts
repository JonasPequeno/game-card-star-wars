import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SwapiService } from 'ng2-swapi';

import { LoadingController } from 'ionic-angular';

import { DetalhePlanetaPage } from '../detalhe-planeta/detalhe-planeta'
import { ModalFilmePage } from '../modal-filme/modal-filme'


import 'rxjs/add/operator/map'
import 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-planetas',
  templateUrl: 'planetas.html',
  providers: [SwapiService]
})
export class PlanetasPage implements OnInit {

  public planetas: any = [];
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public swService: SwapiService,
    public loadingController: LoadingController, public modalController: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonagemPage');
  }
  ngOnInit(): void {
    this.presentLoading();
    this.getPlanetas();
  }


  getPlanetas() {
    console.log('asdasd')
    this.swService.getPlanets().subscribe(res => {
      this.planetas = res.results;
      console.log(this.planetas);
    }, err => {
      console.log(err);
    });
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'hide',

      content: `        
        <center> Por favor... Aguarde! </center>
        <img src="../../assets/imgs/load.gif">                      
    `,
      duration: 2000

    });
    return this.loading.present();
  }

  detalhes(planeta: any) {
    console.log(planeta);
    const modal = this.modalController.create(DetalhePlanetaPage, { planeta: planeta });
    modal.present();
  }

}
