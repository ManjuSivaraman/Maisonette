import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css' , './top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  @Input() topnavbarvalue : any;
  @Input() navbarDropdownData : any;

  constructor() { }

  ngOnInit(): void {

    console.log(this.navbarDropdownData[0].baby, "navbarDropdownData")
   
  }

}
