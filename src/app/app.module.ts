import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedViewModule} from './view-page/shared-view/shared-view/shared-view.module';
import { GirlsDressesModuleModule } from './view-page/kids/girls/girls-dresses-module/girls-dresses-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedViewModule,
    GirlsDressesModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
