import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwapiService } from 'ng2-swapi';

import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-personagem',
  templateUrl: 'personagem.html',
  providers: [SwapiService]
})
export class PersonagemPage implements OnInit {

  public personagens: any = [];
  private loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public swService: SwapiService,
    public loadingController: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonagemPage');
  }
  ngOnInit(): void {
    this.presentLoading();
    this.getPersonagens();
  }


  getPersonagens() {
    this.swService.getPeople().subscribe(res => {
      this.personagens = res.results;
      console.log(this.personagens);
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

}
