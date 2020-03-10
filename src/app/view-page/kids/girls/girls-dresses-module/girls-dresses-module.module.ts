import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GirlsDressesModuleRoutingModule } from './girls-dresses-module-routing.module';
import { GirlsDressesProductDetailviewComponent } from './girls-dresses-product-detailview/girls-dresses-product-detailview.component';
import { GirlsDressesProductOverallviewComponent } from './girls-dresses-product-overallview/girls-dresses-product-overallview.component';
import { GirlsDressesProductIndividualviewComponent } from './girls-dresses-product-overallview/girls-dresses-product-individualview/girls-dresses-product-individualview.component';


@NgModule({
  declarations: [GirlsDressesProductDetailviewComponent, GirlsDressesProductOverallviewComponent, GirlsDressesProductIndividualviewComponent],
  imports: [
    CommonModule,
    GirlsDressesModuleRoutingModule
  ]
})
export class GirlsDressesModuleModule { }
