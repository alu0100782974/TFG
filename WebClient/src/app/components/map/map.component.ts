import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { LocationsService } from '../../services/locations-service.service';
import 'rxjs/add/operator/map';
import { Truck } from '../../pojo/truck.pojo';
import { truckIcon, flagIcon, blackIcon, servedIcon } from '../../utils/markers';
import { TrucksService } from '../../services/trucks-service.service';
import { ClientsService } from '../../services/clients-service.service';
import { RealTimeService } from '../../services/real-time-service.service';

declare var L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {


  public markersArray = [];
  public control: number;
  public markers = [];
  public controllers = [];
  public waypoints = [];
  public marker = null;
  public center = [28.4091675, -16.5616061];
  public trucks: Truck[] = [];
  public selectedTruck: Truck;

  @ViewChild('map') mapContainer: ElementRef;
  map: any;

  constructor(
    private locationsService: LocationsService,
    private trucksService: TrucksService,
    private clientsService: ClientsService,
    private realTimeService: RealTimeService) {
    this.realTimeService.setMapComponent(this);
  }

  ngOnInit(): void {
    this.loadmap();
  }

  public selectTruck(e): void {
    this.control = undefined;
    this.cleanControllers();
    this.cleanMarkers();
    this.markersArray.forEach(element => {
      this.map.removeLayer(element[1]);
    });
    this.markersArray = [];
    this.trucksService.getTruck(e.value.id).subscribe(res => {
      this.markersArray
      .push([e.value.id, L.marker([res[0].lastLat, res[0].lastLon], { icon: truckIcon, zIndexOffset: 999999 }).addTo(this.map)]);
    });
    this.control = e.value.id;
    this.generateWayPointsFromRoute(e.value.id);
    this.waypoints = [];
  }

  public loadmap(): void {

    this.map = L.map('map', {
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

    setTimeout(() => {
      this.trucksService.getTrucks().subscribe(trucks => {
        this.trucks = trucks;
        this.trucks.forEach(t => {
          this.markersArray.push([t.id, L.marker([t.lastLat, t.lastLon], { icon: truckIcon, zIndexOffset: 999999 }).addTo(this.map)]);
          this.generateWayPointsFromRoute(t.id);
        });
      });
    }, 300);
  }

  public generateWayPointsFromRoute(truckId: number): void {

    this.clientsService.getClientsByTruckId(truckId).subscribe(clients => {

      this.markers.push(new L.marker(new L.latLng(28.4091675, -16.5616061), {
        icon: flagIcon,
        zIndexOffset: 999999
      }).addTo(this.map));

      this.waypoints.push({ lat: 28.4091675, lon: -16.5616061 });

      clients.forEach(c => {
        this.waypoints.push({ lat: c.lat, lon: c.lon });
        if (c.served === true) {
          this.markers.push(new L.marker(new L.latLng(c.lat, c.lon), {
            icon: servedIcon,
            zIndexOffset: 99999
          }).addTo(this.map));
        }
      });

      const control = L.Routing.control({
        waypoints: this.waypoints,
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

      this.waypoints = [];

      this.controllers.push(control);
    });
  }

  public moveTruck(truck: Truck): void {
    if (this.control !== undefined) {
      if (truck.id === this.control) {
        const marker = this.markersArray.find(m => m[0] === truck.id);
        this.markers.push(marker[1].setLatLng([truck.lastLat, truck.lastLon]).addTo(this.map));
      }
    } else {
      this.markersArray.forEach(arr => {
        if (arr[0] === truck.id) {
          this.markers.push(arr[1]);
          arr[1].addTo(this.map);
          arr[1].setLatLng([truck.lastLat, truck.lastLon]);
        }
      });
    }
  }

  public showAll(): void {
    this.selectedTruck = undefined;
    this.control = undefined;
    this.waypoints = [];
    this.cleanControllers();
    this.cleanMarkers();

    this.trucksService.getTrucks().subscribe(trucks => {
      this.trucks = trucks;
      this.trucks.forEach(t => {
        this.markersArray.push([t.id, L.marker([t.lastLat, t.lastLon], { icon: truckIcon, zIndexOffset: 999999 }).addTo(this.map)]);
        this.generateWayPointsFromRoute(t.id);
      });
    });

  }

  public cleanControllers(): void {
    if (!!this.controllers) {
      this.controllers.forEach(c => {
        this.map.removeControl(c);
      });
    }
  }

  public cleanMarkers(): void {
    if (!!this.markers) {
      this.markers.forEach(m => {
        this.map.removeLayer(m);
      });
    }
  }

  public setServedMarker(data) {
    this.markers.push(new L.marker([data[0], data[1]], {
      icon: servedIcon,
      zIndexOffset: 99999
    }).addTo(this.map));
  }

  public getSelectedTruckId(): number {
    if (!!this.selectedTruck) {
      return this.selectedTruck.id;
    } else {
      console.log('eee');
      return null;
    }
  }
}
