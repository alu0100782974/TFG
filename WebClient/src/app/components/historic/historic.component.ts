import { Component, OnInit } from '@angular/core';
import { TrucksService } from '../../services/trucks-service.service';
import { Truck } from '../../pojo/truck.pojo';
import { Service } from '../../pojo/service.pojo';
import { ServicesSerivce } from '../../services/services-service.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.less']
})
export class HistoricComponent implements OnInit {

  public servicesModal = false;
  public selectedTruck: Truck = new Truck();

  public selectedTrucks: Truck[] = [];

  public trucks: Truck[] = [];
  public services: Service[] = [];

  public truckCols = [
    { field: 'id', header: 'ID' },
    { field: 'startTime', header: 'Start Time' },
    { field: 'endTime', header: 'End Time' },
    { field: 'distance', header: 'Distance(m)' },
    { field: 'clientsServed', header: 'Served Clients' },
    { field: 'lastLat', header: 'Last Latitude' },
    { field: 'lastLon', header: 'Last Longitude' },
    { field: '', header: 'Services' },
  ];

  public servicesCols = [
    { field: 'clientId', header: 'Client' },
    { field: 'start', header: 'Start Time' },
    { field: 'end', header: 'End Time' },
    { field: '', header: 'Service time(s)' }
  ];

  constructor(private trucksService: TrucksService, private servicesService: ServicesSerivce) {
  }

  ngOnInit() {
    this.updateTrucks();
  }

  public updateTrucks() {
    this.trucksService.getTrucks().subscribe(trucks => {
      this.trucks = trucks;
    });
  }

  public showServices(truck): void {
    this.selectedTruck = truck;
    this.servicesModal = true;

    this.servicesService.getClientsServed(this.selectedTruck.id).subscribe(services => {
      this.services = services;
    });
  }

}
