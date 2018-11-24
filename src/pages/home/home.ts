import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contactos=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http)
              {this.getContactos();}
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
