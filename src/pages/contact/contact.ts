import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwapiService } from 'ng2-swapi';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit {

  public personagens = [];

  constructor(public navCtrl: NavController, public swService: SwapiService) {

  }
  ngOnInit(): void {
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
}
