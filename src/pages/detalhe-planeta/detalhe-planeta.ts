import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe-planeta',
  templateUrl: 'detalhe-planeta.html',
})
export class DetalhePlanetaPage implements OnInit {

  public planeta;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController) {
  }

  ngOnInit(): void {
    this.planeta = this.navParams.get('planeta');
    console.log(this.planeta)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePlanetaPage');
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
