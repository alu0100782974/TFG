import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Client } from '../../pojo/clientPojo';
import { Location } from '../../pojo/locationPojo'
import { Observable } from 'rxjs/Rx';
import { truckIcon, flagIcon, blackIcon, servedIcon } from '../utils/markers';
import 'rxjs/add/operator/map';
import { Service } from '../../pojo/servicePojo';
import { ServicesProvider } from '../../providers/clients-served/clients-served';
import { LocationsProvider } from '../../providers/locations/locations';
import { NextClientProvider } from '../../providers/nextclient/nextclient';
import { TrucksProvider } from '../../providers/trucks/trucks';
import { Truck } from '../../pojo/truckPojo';
import { ClientsProvider } from '../../providers/clients/clients';
import { RealTimeProvider } from '../../providers/real-time/real-time';

declare var L: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Map
  @ViewChild('map') mapContainer: ElementRef;
  map: any;


  public connected = false;

  public nextClient: Client = new Client();

  //JSON that contains the markers inserted into the map (except act.pos)
  markers = [];

  //Actual position
  public actualPos = { lat: 0, lon: 0 };

  //Controllers
  controllers = [];

  //Markers
  public truckMarker: any;

  public truck: Truck;

  //Button controls
  public connect: boolean = false;
  public show: boolean = true;
  public start: boolean = true;
  public next: boolean = true;
  public serve: boolean = true;
  public served: boolean = true;
  public end: boolean = true;

  private truckId: number;
  private serverId: string;
  private port1: string;
  private port2: string;

  private backendUrl: string;

  public timeEnd;
  public totalDistance: number;
  public actualDistance: number;
  public timeEndService;
  public serveInterval = null;
  public timeStartService;

  public timeStart;

  public locationInterval;
  public timerInterval;
  public emitInterval;
  public timer = 0;

  private clients: Client[] = [];
  private clientsToServe: Client[] = [];

  public microPoints = [];

  public service: Service = new Service();

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private clientsServedProvider: ServicesProvider,
    private locationsProvider: LocationsProvider,
    private nextClientProvider: NextClientProvider,
    private truckProvider: TrucksProvider,
    private clientsProvider: ClientsProvider,
    private realTimeProvider: RealTimeProvider
  ) {

    this.truckId = this.navParams.get('userId');
    this.serverId = this.navParams.get('serverId');
    this.port1 = this.navParams.get('port1');
    this.port2 = this.navParams.get('port2');

    this.truck = new Truck();


    this.backendUrl = `http://${this.serverId}:${this.port2}`;

    this.truckProvider.setUrlBackend(this.backendUrl);
    this.clientsServedProvider.setUrlBackend(this.backendUrl);
    this.clientsServedProvider.setTruckId(this.truckId);
    this.locationsProvider.setUrlBackend(this.backendUrl);
    this.locationsProvider.setTruckId(this.truckId);
    this.nextClientProvider.setUrlBackend(this.backendUrl);
    this.clientsProvider.setUrlBackend(this.backendUrl);

  }

  ionViewDidEnter() {
    this.loadmap();
  }

  ///////////////////////////////////////////////////////////
  ////////////////////// CREATE MAP /////////////////////////
  ///////////////////////////////////////////////////////////

  center: [number, number] = [28.4091675, -16.5616061]

  public loadmap() {

    this.map = L.map("map", {
      center: this.center,
      zoom: 10,
      maxZoom: 11,
      minZoom: 11,
      zoomAnimationThreshold: 10,
      zoomControl: false
    });

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'MyMap',
    }).addTo(this.map);
  }

  ///////////////////////////////////////////////////////////
  ///////////////////// PARSE JSON //////////////////////////
  ///////////////////////////////////////////////////////////

  public generatePointsFromJson(truckId, resolve?) {

    this.clientsProvider.getNonServedClientsByTruckId(truckId).subscribe(clients => {

      const firstPoint: Client = new Client();

      firstPoint.lat = this.actualPos.lat;
      firstPoint.lon = this.actualPos.lon;

      this.clientsToServe = clients;

      this.clientsToServe.unshift(firstPoint);

      this.createRoute();

      resolve();
    });
  }

  async createRoute() {
    let waypointaux = [];

    for (let i = 0; i < this.clientsToServe.length; i++) {
      waypointaux.push({ lat: this.clientsToServe[i].lat, lon: this.clientsToServe[i].lon });
    }
    this.createControl(waypointaux, false);
  }

  ///////////////////////////////////////////////////////////
  ///////////////// CONNECTION BUTTON ///////////////////////
  ///////////////////////////////////////////////////////////

  public connectToServer() {

    this.realTimeProvider.start(`http://${this.serverId}:${this.port1}`);
    this.connect = true;

    new Promise((resolve) => {
      this.truckProvider.getTruck(this.truckId).subscribe(t => {
        this.truck = t;
        this.actualPos.lat = this.truck.lastLat;
        this.actualPos.lon = this.truck.lastLon;
        resolve();
      })
    }).then(() => {
      this.truckMarker = new L.marker(new L.latLng(this.actualPos.lat, this.actualPos.lon), {
        icon: truckIcon,
        zIndexOffset: 9999999
      }).addTo(this.map);
      this.show = false;
    })
  }

  ///////////////////////////////////////////////////////////
  ///////////////// SHOW ROUTE BUTTON ///////////////////////
  ///////////////////////////////////////////////////////////

  public showMyRoute() {
    this.show = true;
    if (this.realTimeProvider.getSocket().connected === true) {
      new Promise((resolve) => {
        this.printAllPoints();
        this.generatePointsFromJson(this.truckId, resolve);
      }).then(() => {
        if (this.clientsToServe.length < 1) {
          alert('No clients assigned');
        } else {
          this.start = false;
        }
      });
    } else {
      alert('Server is down, please restart the app');
    }
  }

  ///////////////////////////////////////////////////////////
  ///////////////// START ROUTE BUTTON //////////////////////
  ///////////////////////////////////////////////////////////


  public startRoute() {

    this.printServedClients();
    this.printAllPoints();
    new Promise((resolve) => {
      this.generatePointsFromJson(this.truckId, resolve);
    }).then(() => {

      if (this.clientsToServe.length != 1) {
        new Promise((resolve) => {
          this.clientsProvider.getClient(this.clientsToServe[1].id).subscribe(cli => {
            this.nextClient = cli;
            resolve();
          })
        }).then(() => {

          let waypointsaux = [{ lat: this.clientsToServe[0].lat, lon: this.clientsToServe[0].lon },
          { lat: this.nextClient.lat, lon: this.nextClient.lon }];

          new Promise((resolve) => {
            this.GetPointsBetweenWaypoints(waypointsaux, resolve);
          }).then(() => {
            this.start = true;
            this.next = false;
            this.connected = true;
            this.timeStart = new Date();
            this.timeEnd = null;

            if (this.truck.startTime == null) {
              this.truck.startTime = this.timeStart;
            }
            this.truckProvider.update(this.truck);

            this.actualDistance = this.truck.distance;

            this.locationInterval = setInterval(() => {

              let aux: Location = {
                truckId: this.truckId,
                lat: this.actualPos.lat,
                lon: this.actualPos.lon
              }

              this.locationsProvider.saveLocation(aux);

            }, 2000);

            this.timerInterval = setInterval(() => {

              this.timer++;

            }, 1000);

            this.emitInterval = setInterval(() => {
              this.realTimeProvider.emitMove(this.truck);
            }, 1000);

            this.nextClientProvider.getNextClient(this.clientsToServe[1].id).subscribe(client => {
              this.nextClient = client;
            });
          })
        });
      } else {
        alert('No clients to serve');
        this.start = false;

      }
    })
  }

  ///////////////////////////////////////////////////////////
  ///////////////// TO NEXT CLIENT BUTTON ///////////////////
  ///////////////////////////////////////////////////////////

  public goToNextClient() {

    this.next = true;
    this.cleanMap();
    this.printServedClients();
    this.printAllPoints();

    new Promise((resolve) => {
      this.generatePointsFromJson(this.truckId, resolve);
    }).then(() => {

      if (!!this.clientsToServe[1]) {
        new Promise((resolve) => {
          this.nextClientProvider.getNextClient(this.clientsToServe[1].id).subscribe(client => {
            this.nextClient = client;
            resolve();
          });
        }).then(() => {
          let waypointsaux = [{ lat: this.clientsToServe[0].lat, lon: this.clientsToServe[0].lon },
          { lat: this.nextClient.lat, lon: this.nextClient.lon }];
          new Promise((resolve) => {
            this.GetPointsBetweenWaypoints(waypointsaux, resolve);
          }).then(() => {
            this.map.panTo(new L.latLng(this.actualPos.lat, this.actualPos.lon));
            this.nextClient.serving = true;
            this.clientsProvider.updateClient(this.nextClient);
            this.moveMarker();
          })
        })
      } else {
        this.end = false;
      }
    })
  }

  ///////////////////////////////////////////////////////////
  /////////////////////// SERVING BUTTON ///////////////////
  ///////////////////////////////////////////////////////////


  public startService() {

    this.timeStartService = new Date();
    this.service.clientId = this.nextClient.id;
    this.service.truckId = this.truck.id;
    this.service.start = new Date();
    this.service.end = null;
    this.serve = true;
    this.served = false;

    /* if ((this.clientsToServe[this.actualCli + 1].open > this.timeStartService.getHours()) || (this.clientsToServe[this.actualCli + 1].close < this.timeStartService.getHours())) {
      alert('Client is closed, please wait until it opens');

      clearInterval(this.serveInterval);
      this.serveInterval = setInterval(() => {

        this.generatePointsFromJson(this.truckId);
        this.map.panTo(new L.latLng(this.actualPos.lat, this.actualPos.lon));

      }, 5000)
    } else {
      if (this.serveInterval != null) {
        clearInterval(this.serveInterval);
      }
      
    } */
  }

  ///////////////////////////////////////////////////////////
  ///////////////// CLIENT SERVED BUTTON ///////////////////
  ///////////////////////////////////////////////////////////

  public endService() {

    this.printAllPoints();

    this.nextClient.served = true;
    new Promise((resolve) => {
      this.clientsProvider.updateClient(this.nextClient);
      resolve();
    }).then(() => {

      this.service.end = new Date();
      this.service.serviceTime = (this.service.end.getTime() - this.service.start.getTime()) / 1000;
      this.served = true;

      setTimeout(() => {
        new Promise((resolve) => {
          this.clientsServedProvider.saveClientInfo(this.service);
          this.generatePointsFromJson(this.truckId, resolve);
        }).then(() => {

          let auxMarker = new L.marker(new L.latLng(this.actualPos.lat, this.actualPos.lon), {
            icon: servedIcon,
            zIndexOffset: 99999
          }).addTo(this.map);

          this.realTimeProvider.emitServed([this.actualPos.lat, this.actualPos.lon, this.truckId]);

          this.markers.push(auxMarker);

          this.truck.clientsServed++;
          this.truckProvider.update(this.truck);

          if (this.clientsToServe.length == 1) {
            new Promise((resolve) => {
              this.generatePointsFromJson(this.truckId, resolve);
            }).then(() => {
              this.cleanMap();
              this.printServedClients();
              this.printAllPoints();
              this.end = false;
            })
          } else {
            new Promise((resolve) => {
              this.nextClientProvider.getNextClient(this.clientsToServe[1].id).subscribe(client => {
                this.nextClient = client;
                resolve();
              })
            }).then(() => {
              this.next = false;
            });
          }
        });
      }, 300);
    })
  }

  ///////////////////////////////////////////////////////////
  ///////////////// END SIMULATION BUTTON ///////////////////
  ///////////////////////////////////////////////////////////

  public endSimulation() {

    clearInterval(this.locationInterval);
    clearInterval(this.timerInterval);
    clearInterval(this.emitInterval);

    this.end = true;

    this.timeEnd = new Date();

    this.truck.endTime = this.timeEnd;
    this.truckProvider.update(this.truck);

    alert('Route finished');
  }


  ///////////////////////////////////////////////////////////
  //////////////// AUXILIAR FUNCTIONS ///////////////////////
  ///////////////////////////////////////////////////////////

  public cleanMap() {
    if (this.markers != null) {
      for (var i = 0; i < this.markers.length; i++) {
        this.map.removeLayer(this.markers[i]);
      }
    }

    if (this.controllers != null) {
      for (var j = 0; j < this.controllers.length; j++) {
        this.map.removeControl(this.controllers[j]);
      }
    }
  }

  public moveMarker() {
    this.map.removeLayer(this.truckMarker);
    this.truckMarker = new L.marker(new L.latLng(this.actualPos.lat, this.actualPos.lon), {
      icon: truckIcon,
      zIndexOffset: 9999999
    }).addTo(this.map);

    let time = 0;
    let control = 0;

    for (let i = 0; i < this.microPoints.length; i++) {
      setTimeout(() => {

        let auxLat = this.actualPos.lat;
        let auxLon = this.actualPos.lon;

        this.actualPos.lat = this.microPoints[i].lat;
        this.actualPos.lon = this.microPoints[i].lng;
        this.truck.lastLat = this.actualPos.lat;
        this.truck.lastLon = this.actualPos.lon;


        this.actualDistance += Math.trunc(this.getDistance(
          [auxLat, auxLon],
          [this.actualPos.lat, this.actualPos.lon]
        ));

        //UPDATE
        this.truck.distance = this.actualDistance;
        // this.truckProvider.update(this.truck);

        this.truckMarker.setLatLng([this.microPoints[i].lat, this.microPoints[i].lng]);

        control++;
        if (control == (this.microPoints.length - 1)) {
          this.serve = false;
        }
        this.map.panTo(new L.latLng(this.microPoints[i].lat, this.microPoints[i].lng));
      }, time);
      time += 20;
    }
  }

  /* public checkPoints() {

    let dateAux = new Date();

    for (let i = 1; i < this.clientsToServe.length; i++) {

      if ((this.clientsToServe[i].open > dateAux.getHours()) || (this.clientsToServe[i].close < dateAux.getHours())) {
        var aux = new L.marker(new L.latLng(this.clientsToServe[i].lat, this.clientsToServe[i].lon), {
          icon: blackIcon
        }).addTo(this.map);
        this.markers.push(aux);
      }
    }
  } */

  private getDistance(origin, destination) {

    var lon1 = this.toRadian(origin[1]),
      lat1 = this.toRadian(origin[0]),
      lon2 = this.toRadian(destination[1]),
      lat2 = this.toRadian(destination[0]);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
  }

  private toRadian(degree) {
    return degree * Math.PI / 180;
  }

  public createControl(waypoints, calculate: boolean) {

    let control = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: false,
      autoRoute: true,
      useZoomParameter: false,
      draggableWaypoints: false,
      show: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: 'blue', opacity: 1, weight: 5 }],
      }
    }).addTo(this.map);

    if (calculate === true) {
      control.on('routeselected', (e) => {
        this.totalDistance = e.route.summary.totalDistance;
      });
    }
    this.controllers.push(control);
  }

  public GetPointsBetweenWaypoints(waypoints, resolve?) {

    let control;

    control = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: false,
      autoRoute: true,
      useZoomParameter: false,
      draggableWaypoints: false,
      show: false,
      addWaypoints: false,
      lineOptions: {
        styles: [{ color: 'blue', opacity: 1, weight: 5 }],
      }
    }).addTo(this.map);

    control.on('routeselected', (e) => {
      this.microPoints = e.route.coordinates;
      resolve();
      this.map.removeControl(control);
    });
  }

  public printAllPoints() {
    this.clientsProvider.getClientsByTruckId(this.truckId).subscribe(cli => {
      this.clients = cli;
      console.log(this.clients);
      const firstPoint: Client = new Client();
      firstPoint.lat = this.actualPos.lat;
      firstPoint.lon = this.actualPos.lon;
      this.clients.unshift(firstPoint);
      this.createControl(this.clients, true);
      this.clients.shift();
    })
  }

  public printServedClients() {
    new Promise(() => {
      this.clientsProvider.getServedClientsByTruckId(this.truckId).subscribe(clients => {
        clients.forEach(client => {
          this.markers.push(new L.marker(new L.latLng(client.lat, client.lon), {
            icon: servedIcon,
            zIndexOffset: 99999
          }).addTo(this.map));
        });
      })
    })
  }
}