import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// tslint:disable-next-line:class-name
 export interface wish {
   wish: string;
 }
  @Injectable()
  export class WishesService {
    private wishUrl = 'http://localhost:8080/api/getWish';
    constructor(private http: HttpClient) { }

    getWish(): Observable<any> {
    return this.http.get('http://localhost:8080/api/getWish');
    }
}
