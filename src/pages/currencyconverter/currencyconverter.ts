import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
    selector: 'page-currencyconverter',
    templateUrl: 'currencyconverter.html'
})

export class CurrencyConverter {

    public value: any;
    public currencies: any;
    private currencyJSONUrl: "https://currency.json";

    constructor(public navCtrl: NavController, private http: Http) {
        this.http.get(this.currencyJSONUrl).subscribe(response => <Currency[]>response.json().data);
        console.log(Currency);
    }
}

export class Currency {

    private currencyName: string;
    private currencyRate: number;

    constructor(public name: string, public rate: number) {
        this.currencyName = name;
        this.currencyRate = rate;
    }

    public getRate() {
        return this.currencyRate;
    }

    public getName() {
        return this.currencyName;
    }
}