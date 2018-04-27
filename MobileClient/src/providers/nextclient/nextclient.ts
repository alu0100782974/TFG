import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../pojo/clientPojo';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PruebaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NextClientProvider {

  public urlBackend;


  constructor(public http: Http) {
  }

  public getNextClient(clientId: number): Observable<Client> {
    return this.http.get(`${this.urlBackend}/clients?id=${clientId}`).map(res => res.json());
  }

  public setUrlBackend(server: string): void {
    this.urlBackend = server;
  }


}
