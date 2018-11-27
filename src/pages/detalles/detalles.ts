import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
  nombre = '';
  telefono = '';
  correo = '';
  facebook = '';
  twitter = '';
  instagram = '';
  detalles = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http) {
    //let x = this.navParams.get('id');
    //console.log(x);
    this.nombre = this.navParams.get('nombre');
    this.telefono = this.navParams.get('telefono');
    this.correo = this.navParams.get('correo');
    this.facebook = this.navParams.get('facebook');
    this.twitter = this.navParams.get('twitter');
    this.instagram = this.navParams.get('instagram');
    //this.detalles=navParams.get('i');
    //this.getDetalles(id);
  }

 /* getDetalles(id){
    this.http.get('/detalles/?id=' + id.toString())
      .subscribe(data =>{
        console.log(data.text());
        this.detalles = data.json();
      },error1 =>{
        console.log('error');
      });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
  }

}
