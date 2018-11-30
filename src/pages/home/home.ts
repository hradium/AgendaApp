import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {DetallesPage} from "../detalles/detalles";
import {AgregarPage} from "../agregar/agregar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  detallesPage=DetallesPage;
  agregarPage=AgregarPage;
  contactos=[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http)
  {this.getContactos();}

  clickDetalles(i){
    console.log(i.id);
    this.navCtrl.push(this.detallesPage, i);
  }
  clickAgregar(){
    this.navCtrl.setRoot(AgregarPage);
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
