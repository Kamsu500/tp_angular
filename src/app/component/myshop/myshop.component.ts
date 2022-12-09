import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myshop',
  templateUrl: './myshop.component.html',
  styleUrls: ['./myshop.component.css']
})
export class MyshopComponent implements OnInit {

  products = [{
    id: 1,
    name: "iPhone 12",
    color: "black",
    weight: "250g",
    storage: "256GB",
    price: "1000$",
    picture: "https://cf4.certideal.com/24107-thickbox_default/iphone-12-64-go-blanc.jpg"
  },
  {
    id: 2,
    name: "Airpods",
    color: "white",
    weight: "50g",
    storage: "N/A",
    price: "200$",
    picture: "https://www.pngmart.com/files/13/Airpods-Transparent-Images-PNG.png"
  },
  {
    id: 3,
    name: "Samsung S22",
    color: "black",
    weight: "250g",
    storage: "512GB",
    price: "900$",
    picture: "https://fscl01.fonpit.de/devices/22/2222-w320h320.png"
  },
  {
    id: 4,
    name: "Samsung Note10",
    color: "black",
    weight: "250g",
    storage: "256GB",
    price: "950$",
    picture: "https://ae01.alicdn.com/kf/Haf57bca680a14773995bd869af40fb808.jpg"
  },
  {
    id: 5,
    name: "Phone 14",
    color: "white",
    weight: "250g",
    storage: "256GB",
    price: "1300$",
    picture: "https://www.pngmart.com/files/22/iPhone-14-PNG-Image.png"
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
