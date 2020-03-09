import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TopNavbarComponent } from '../top-navbar/top-navbar.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopNavbarComponent,
    SideNavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    TopNavbarComponent,
    SideNavbarComponent
  ]
})
export class SharedViewModule { }
