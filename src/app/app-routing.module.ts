import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./view-page/kids/girls/girls-dresses-module/girls-dresses-module.module').then(m => m.GirlsDressesModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
