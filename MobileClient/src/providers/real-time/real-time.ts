import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { Truck } from '../../pojo/truckPojo';

@Injectable()
export class RealTimeProvider {

    private socket: SocketIOClient.Socket;

    constructor() {

        // this._socket = <any>{
        //     emit: () => console.warn(this.REAL_TIME_DISABLED),
        //     on: () => console.warn(this.REAL_TIME_DISABLED)
        // };
    }

    public start(urlBackend: string) {
        this.socket = io.connect(urlBackend);
        this.socket.on('connect', () => {
            console.log('Conexion con el servidor establecida');
        });
    }

    public emitMove(data: Truck): void {
        this.socket.emit('move', data);
    }

    public emitServed(data): void {
        this.socket.emit('served', data);
    }

    public getSocket() {
        return this.socket;
    }
}