
import { Injectable } from '@angular/core';
import { Service } from '../../pojo/servicePojo';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Http } from '@angular/http';

/*
  Generated class for the ClientsServedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  public urlBackend;
  public truckId;

  public servicesSubject: BehaviorSubject<Service[]> = new BehaviorSubject<Service[]>(null);

  constructor(public http: Http) {
  }

  public get services(): Observable<Service[]> {
    return this.servicesSubject.filter(data => !!data);
  }


  public getClientsServed(): void {
    this.http.get(`${this.urlBackend}/services?truckId=${this.truckId}`).map(res => res.json())
      .subscribe(res => {
        this.servicesSubject.next(res);
      });
  }

  public saveClientInfo(service: Service): void {
    this.http.post(`${this.urlBackend}/services`, service).map(res => res.json()).subscribe(res => {
    });
  }

  public setUrlBackend(server: string): void {
    this.urlBackend = server;
  }

  public setTruckId(truckId: number) {
    this.truckId = truckId
  }

}