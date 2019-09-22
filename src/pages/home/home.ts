import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SwapiService } from 'ng2-swapi';
import 'rxjs/add/operator/map'
import { map } from 'rxjs/operators';
import 'rxjs/Rx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SwapiService]
})
export class HomePage implements OnInit {
  public filmes = [];

  constructor(
    public navCtrl: NavController,
    public swService: SwapiService) {

  }
  ngOnInit(): void {
    this.getFilmes();
    //this.getPersonagens();
  }


  /*   getPersonagens() {
      this.swService.getPeople().subscribe(res => {
        this.personagens = res.results;
        console.log(this.personagens);
      }, err => {
        console.log(err);
      });
    }
   */

  getFilmes() {
    this.swService.getFilms().subscribe(res => {
      this.filmes = res.results;
      console.log(this.filmes);
    }, err => {
      console.log(err);
    });
  }
}
