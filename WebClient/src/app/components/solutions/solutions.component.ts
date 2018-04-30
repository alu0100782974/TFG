import { Component, OnInit } from '@angular/core';
import { Client } from '../../pojo/client.pojo';
import { Truck } from '../../pojo/truck.pojo';
import { TrucksService } from '../../services/trucks-service.service';
import { ClientsService } from '../../services/clients-service.service';


@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.less']
})
export class SolutionsComponent implements OnInit {
  orderValue: number;
  clients: Client[] = [];
  tableClients: Client[] = [];
  trucks: Truck[] = [];
  cols = [
    { field: 'id', header: 'Client ID' },
    { field: 'lat', header: 'Latitude' },
    { field: 'lon', header: 'Longitude' }
  ];

  selectedTruck: Truck;
  selectedClient: Client;

  constructor(private trucksService: TrucksService, private clientsService: ClientsService) {
  }

  ngOnInit() {
    this.trucksService.getTrucks().subscribe(trucks => {
      this.trucks = trucks;
    });
    this.updateClients();
  }

  get comboClients() {
    return this.clients.sort((c1, c2) => c1.id - c2.id);
  }

  get firstNoServing(): number {
    if (this.tableClients.length > 0) {
      const c = this.tableClients.find(client => client.serving === false);
      if (!!c) {
        return c.order;
      } else {
        return this.tableClients.length + 1;
      }
    } else {
      return 0;
    }
  }

  addTruck(truck, client) {
    const cliente = this.tableClients.find(x => x.serving === false);
    if (!!cliente) {
      this.clientsService.getClient(cliente.id).subscribe(auxClient => {
        if (auxClient[0].serving === true) {
          alert('This client is being served');
          this.clientsService.getClientsByTruckId(this.selectedTruck.id).subscribe(c => {
            this.tableClients = c;
          });
        } else {
          const cli = this.clients.find(c => c.id === client.id);
          cli.truckId = truck.id;
          cli.order = !!this.orderValue ? this.orderValue : 1;
          this.clientsService.updateClient(cli);
          this.selectedClient = undefined;

          this.tableClients.forEach(c => {
            if (c.order >= cli.order) {
              c.order++;
              this.clientsService.updateClient(c);
            }
          });

          this.tableClients.push(cli);
          this.tableClients.sort((c1, c2) => c1.order - c2.order);
        }
      });
    } else {
      const cli = this.clients.find(c => c.id === client.id);
      cli.truckId = truck.id;
      cli.order = !!this.orderValue ? this.orderValue : 1;
      this.clientsService.updateClient(cli);
      this.selectedClient = undefined;

      this.tableClients.forEach(c => {
        if (c.order >= cli.order) {
          c.order++;
          this.clientsService.updateClient(c);
        }
      });

      this.tableClients.push(cli);
      this.tableClients.sort((c1, c2) => c1.order - c2.order);
    }
  }

  deleteClient(client) {
    let auxCli = new Client();

    const p = new Promise((resolve) => {
      this.clientsService.getClient(client.id).subscribe(c => {
        auxCli = c[0];
        resolve();
      });
    }).then(() => {
      if (auxCli.serving === false) {
        auxCli.truckId = null;
        this.clientsService.updateClient(auxCli);
        this.clients.push(auxCli);
        this.tableClients = this.tableClients.filter(c => c.id !== auxCli.id);
        this.tableClients.forEach(c => {
          if (c.order > auxCli.order) {
            c.order--;
            this.clientsService.updateClient(c);
          }
        });
      } else {
        alert('ERROR: This client is being served');
        this.clientsService.getClientsByTruckId(auxCli.truckId).subscribe(c => {
          this.tableClients = c;
        });
      }
    });
  }

  updateClients() {
    this.clientsService.getClients().subscribe(c => {
      this.clients = c.filter(client => client.truckId === null);
    });
  }

  selectTruck(t) {

    this.orderValue = undefined;

    this.clientsService.getClientsByTruckId(t.value.id).subscribe(c => {
      this.tableClients = c;
    });
  }

  selectClient(c) {
    this.orderValue = undefined;

    this.clientsService.getClientsByTruckId(this.selectedTruck.id).subscribe(cli => {
      this.tableClients = cli;
      // poner if
      if(this.tableClients.length!=0){
        const client = this.tableClients.find(aux => aux.serving === false);
        if(!client){
          this.orderValue=this.tableClients.length+1
        }else
          this.orderValue = client.order;
      }else{
        this.orderValue=1;
      }
    });

  }
}
