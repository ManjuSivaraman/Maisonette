import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  topnavbarlist = ["MAISON ME" , "BABY" , "KIDS" , "PLAY"];

  navbarDropdown = [
    {
      baby : ["Girls Clothing", "Dresses" , "Outerwear" , "Rompers" , "Sleepwear" , "Basics" ]
    },
    {
      kids : ["kid1", "kid2" , "kid3" , "kid4" , "kid5" , "kid6" ]
    }
  ];

  dresseslist = [
    {
      imgsrc : "assets/d1.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    },
    {
      imgsrc : "assets/d2.jpeg",
      name : "Caramel",
      description : "Notting Hill Baby Dress, Blue flower print",
      price : "$123.00"
    },
    {
      imgsrc : "assets/d3.jpeg",
      name : "Caramel",
      description : "Portobello Knitted Baby Dress, Honey Stripe",
      price : "$194.00"
    },
    {
      imgsrc : "assets/d4.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    },
    {
      imgsrc : "assets/d5.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    },
    {
      imgsrc : "assets/d6.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    },
    {
      imgsrc : "assets/d7.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    },
    {
      imgsrc : "assets/d8.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    },
    {
      imgsrc : "assets/d9.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    },
    {
      imgsrc : "assets/d10.jpeg",
      name : "Angel Dear",
      description : "Ruffle Dress, Magnolias",
      price : "$38.00"
    }

  ];

}
