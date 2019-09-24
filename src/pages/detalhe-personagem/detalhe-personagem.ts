import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalhe-personagem',
  templateUrl: 'detalhe-personagem.html',
})
export class DetalhePersonagemPage implements OnInit {

  public personagem;

  ngOnInit(): void {
    this.personagem = this.navParams.get('personagem');
    console.log(this.personagem)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePersonagemPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
