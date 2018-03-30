import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WishesService} from './wishes.service';
import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     HttpClientModule, BrowserModule
  ],
  providers: [WishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
