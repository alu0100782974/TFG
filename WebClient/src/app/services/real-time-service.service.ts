import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { Truck } from '../pojo/truck.pojo';
import { MapComponent } from '../components/map/map.component';


@Injectable()
export class RealTimeService {


  private mapComponent: MapComponent;
  private socket: SocketIOClient.Socket;

  constructor() { }

  public start(urlBackend: string): void {
    this.socket = io.connect(urlBackend);
    this.socket.on('connect', () => {
      this.recieveMove();
      this.recieveServed();
    });
  }

  public recieveMove(): void {
    this.socket.on('move', (data: Truck) => {
      this.mapComponent.moveTruck(data);
    });
  }

  public setMapComponent(map: MapComponent) {
    this.mapComponent = map;
  }

  public recieveServed(): any {
    this.socket.on('served', (data) => {
      if (this.mapComponent.getSelectedTruckId() === data[2]) {
        this.mapComponent.setServedMarker(data);
      }
    });
  }
}
