import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { WishesService, wish } from './wishes.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

wish: any[];
constructor( private wis: WishesService) {

  this.wis.getWish().subscribe(data => {
   this.wish = data['wishes'][0].wish;
  });
}

}
