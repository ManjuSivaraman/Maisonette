import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css' , './header.component.scss']
})
export class HeaderComponent implements OnInit {

  blinkContent = ["Enjoy 10% OFF your first order* CODE: BONJOUR10" , "FREE GROUND SHIPPING on all orders over $75"];

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.currentIndex == this.blinkContent.length-1 ){
        this.currentIndex = 0;
      }else{
        this.currentIndex++;
      }
    }, 3000 )
    
  }


}
