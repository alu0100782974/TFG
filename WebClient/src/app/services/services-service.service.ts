import { Injectable } from '@angular/core';
import { Service } from '../pojo/service.pojo';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicesSerivce {

  public urlBackend;

  constructor(public http: Http) { }

  public getClientsServed(truckId: number): Observable<Service[]> {
    return this.http.get(`${this.urlBackend}/services?truckId=${truckId}`).map(res => res.json());
  }

  public setUrlBackend(server: string): void {
    this.urlBackend = server;
  }
}
