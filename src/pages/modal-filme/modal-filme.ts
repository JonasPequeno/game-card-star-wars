import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-filme',
  templateUrl: 'modal-filme.html',
})
export class ModalFilmePage implements OnInit {

  public filme: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFilmePage');
  }

  ngOnInit(): void {
    this.filme = this.navParams.get('filme');

    console.log(this.filme);
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
