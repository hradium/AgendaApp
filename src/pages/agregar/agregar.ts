import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import {HomePage} from "../home/home";

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {
  homePage = HomePage;
  nombre = '';
  telefono = '';
  correo = '';
  facebook = '';
  twitter = '';
  instagram = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }
  clickHome(){
    this.navCtrl.setRoot(this.homePage);
  }
  clickAdd(){
    console.log(this.nombre);
    console.log(this.telefono);
    console.log(this.correo);
    console.log(this.facebook);
    console.log(this.twitter);
    console.log(this.instagram);
    this.http.get("/agregar/?nombre="+this.nombre+"&telefono="+this.telefono+"&correo="+this.correo+"&facebook="
      +this.facebook+"&twitter="+this.twitter+"&instagram="+this.instagram).subscribe(data => {
      console.log(data.text());
      const alerta = this.alertCtrl.create(
        {
          title: 'Listo!',
          subTitle: 'Contacto Agregado',
          buttons: ['ok']
        }
      );
      this.navCtrl.setRoot(this.homePage);
      alerta.present();
      //this.navCtrl.
    },error1 => {
        console.log("error");
    });
  }

}
