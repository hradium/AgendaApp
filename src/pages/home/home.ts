import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {DetallesPage} from "../detalles/detalles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  detallesPage=DetallesPage;
  contactos=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http)
  {this.getContactos();}

  clickDetalles(i){
    console.log(i.id);
    this.navCtrl.push(this.detallesPage, i);
  }

  getContactos() {
    this.http.get('/contactos/')
      .subscribe(data => {
        console.log(data.text());
        this.contactos = data.json();
      }, error1 => {
        console.log('error');
      });
  }
}
