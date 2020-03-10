import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-girls-dresses-product-overallview',
  templateUrl: './girls-dresses-product-overallview.component.html',
  styleUrls: ['./girls-dresses-product-overallview.component.css']
})
export class GirlsDressesProductOverallviewComponent implements OnInit {
  
  @Input() dresses : any;

  constructor() { }

  ngOnInit(): void {
    console.log("hi" , this.dresses)
  }

}
