import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirlsDressesProductOverallviewComponent } from './girls-dresses-product-overallview/girls-dresses-product-overallview.component';


const routes: Routes = [
  {
    path : '',
    component : GirlsDressesProductOverallviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GirlsDressesModuleRoutingModule { }
