import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { provideHttpClient } from '@angular/common/http';// en vez de HttpModule
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    MatToolbarModule, 
    MatButtonModule,
    CartModule

  ],
  providers: [provideHttpClient()], // en vez de HttpModule
  bootstrap: [AppComponent]
})
export class AppModule { }
