import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedViewModule} from '../app/view-page/shared-view/shared-view/shared-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
