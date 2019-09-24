import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController, ModalController } from 'ionic-angular';

import { SwapiService } from 'ng2-swapi';

import 'rxjs/add/operator/map'
import 'rxjs/Rx';

import { ModalFilmePage } from '../modal-filme//modal-filme';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SwapiService]
})
export class HomePage implements OnInit {

  public filmes: any = [];
  private loading: any;

  constructor(public navCtrl: NavController,
    public swService: SwapiService,
    public loadingController: LoadingController,
    public modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.presentLoading();
    this.getFilmes();
  }


  getFilmes() {
    this.swService.getFilms().subscribe(res => {
      this.filmes = res.results;
      //this.loading.dismiss();
      console.log(this.filmes);
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

  detalhes(filme: any) {
    const modal = this.modalController.create(ModalFilmePage, { filme: filme });
    modal.present();
  }

}
