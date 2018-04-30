import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { MapComponent } from '../components/map/map.component';
import { Truck } from '../pojo/truck.pojo';
import { environment } from '../../environments/environment';


@Injectable()
export class RealTimeService {


  private mapComponent: MapComponent;
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect(environment.realTimeUrl);
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
      } else if (this.mapComponent.getSelectedTruckId() === null) {
        this.mapComponent.setServedMarker(data);
      }
    });
  }
}
