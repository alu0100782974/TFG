import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Client } from '../pojo/client.pojo';
import { environment } from '../../environments/environment';

@Injectable()
export class ClientsService {

  public urlBackend;

  constructor(public http: Http) { }

  public getClients(): Observable<Client[]> {
    return this.http.get(`${environment.backendUrl}/clients`).map(res => res.json());
  }

  public getClient(id: number): Observable<Client> {
    return this.http.get(`${environment.backendUrl}/clients?id=${id}`).map(res => res.json());
  }

  public getClientsByTruckId(truckId: Number): Observable<Client[]> {
    return this.http.get(`${environment.backendUrl}/clients?truckId=${truckId}`).map(res => res.json());
  }

  public getServedClientsByTruckId(truckId: Number): Observable<Client[]> {
    return this.http.get(`${environment.backendUrl}/clients?truckId=${truckId}&served=true`).map(res => res.json());
  }

  public getNonServedClientsByTruckId(truckId: Number): Observable<Client[]> {
    return this.http.get(`${environment.backendUrl}/clients?truckId=${truckId}&served=false`).map(res => res.json());
  }

  public updateClient(client: Client) {
    this.http.put(`${environment.backendUrl}/clients`, client).subscribe();
  }
}
