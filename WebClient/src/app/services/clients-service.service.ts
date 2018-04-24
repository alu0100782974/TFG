import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from '../pojo/client.pojo';

@Injectable()
export class ClientsService {

  public urlBackend;

  constructor(public http: Http) { }

  public getClientsByTruckId(truckId: Number): Observable<Client[]> {
    return this.http.get(`${this.urlBackend}/clients/truckId=${truckId}`).map(res => res.json());
  }

  public getClients(): Observable<Client[]> {
    return this.http.get(`${this.urlBackend}/clients`).map(res => res.json());
  }

  public getServedClientsByTruckId(truckId: Number): Observable<Client[]> {
    return this.http.get(`${this.urlBackend}/clients/truckId=${truckId}/served=true`).map(res => res.json());
  }

  public getNonServedClientsByTruckId(truckId: Number): Observable<Client[]> {
    return this.http.get(`${this.urlBackend}/clients/truckId=${truckId}/served=false`).map(res => res.json());
  }

  public updateClient(client: Client) {
    this.http.put(`${this.urlBackend}/clients`, client).subscribe();
  }

  public setUrlBackend(server: string): void {
    this.urlBackend = server;
  }

  public getClient(id: number): Observable<Client> {
    return this.http.get(`${this.urlBackend}/clients/id=${id}`).map(res => res.json());
  }
}
