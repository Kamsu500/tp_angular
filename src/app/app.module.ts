import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CartComponent } from './component/cart/cart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MyshopComponent } from './component/myshop/myshop.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProfileComponent,
    MyshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
