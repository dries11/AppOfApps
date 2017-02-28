import { Component } from '@angular/core';
import { CurrencyConverter } from '../currencyconverter/currencyconverter';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public currencyConverter: any;

  constructor(public navCtrl: NavController) {
    this.currencyConverter = CurrencyConverter;
  }

}
