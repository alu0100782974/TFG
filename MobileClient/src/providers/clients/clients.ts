import { Injectable } from '@angular/core';
import { Service } from '../../pojo/servicePojo';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Client } from '../../pojo/clientPojo';

/*
  Generated class for the ClientsServedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientsProvider {

    public urlBackend;

    constructor(public http: Http) {
    }

    public getServedClientsByTruckId(truckId: Number): Observable<Client[]> {
        return this.http.get(`${this.urlBackend}/clients?truckId=${truckId}&served=true`).map(res => res.json());
    }

    public getNonServedClientsByTruckId(truckId: Number): Observable<Client[]> {
        return this.http.get(`${this.urlBackend}/clients?truckId=${truckId}&served=false`).map(res => res.json());
    }

    public getServingClientsByTruckId(truckId: Number): Observable<Client[]> {
        return this.http.get(`${this.urlBackend}/clients?truckId=${truckId}&serving=true`).map(res => res.json());
    }

    public getNonServingClientsByTruckId(truckId: Number): Observable<Client[]> {
        return this.http.get(`${this.urlBackend}/clients?truckId=${truckId}&serving=false`).map(res => res.json());
    }

    public getClientsByTruckId(truckId: Number): Observable<Client[]> {
        return this.http.get(`${this.urlBackend}/clients?truckId=${truckId}`).map(res => res.json());
    }

    public getClient(id: number): Observable<Client> {
        return this.http.get(`${this.urlBackend}/clients?id=${id}`).map(res => res.json());
    }

    public updateClient(client: Client) {
        this.http.put(`${this.urlBackend}/clients`, client).subscribe();
    }

    public setUrlBackend(server: string): void {
        this.urlBackend = server;
    }
}