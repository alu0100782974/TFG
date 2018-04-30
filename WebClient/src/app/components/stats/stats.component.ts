import { Component, OnInit, ViewChild } from '@angular/core';
import { Truck } from '../../pojo/truck.pojo';
import { ClientsService } from '../../services/clients-service.service';
import { ServicesSerivce } from '../../services/services-service.service';
import { TrucksService } from '../../services/trucks-service.service';
import { UIChart } from 'primeng/chart';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  @ViewChild('graph')
  graph: UIChart;

  labels: string[] = [];

    data: any = {
      labels: this.labels,
      datasets: [
          {
              label: 'Desplazamiento',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: []
          },
          {
              label: 'Servicio',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: []
          }
      ]
    };
  constructor(
    private truckService: TrucksService,
    private clientService: ClientsService,
    private serviceService: ServicesSerivce) {

      this.truckService.getTrucks().subscribe( t => {
        t.forEach(e => {
          this.fillFirstDataset(e);
        });
      });
      console.log(this.data);
    }

  ngOnInit(): void {
  }

  private fillFirstDataset(e: Truck) {
    this.labels.push(`Truck ${e.id}`);
    let time = 0;
    if (!!e.endTime && !!e.startTime) {
      time = new Date(e.endTime).getTime() - new Date(e.startTime).getTime();
    } else if (!!e.startTime) {
      time = new Date().getTime() - new Date(e.startTime).getTime();
    } else if (!e.startTime) {
      time = 0;
    }
    this.serviceService.getClientsServed(e.id).subscribe( client => {
      let endedTime = 0;
      client.forEach(c => {
        endedTime += c.serviceTime;
      });

      const a = (time / 1000);
      const b = endedTime;
      const total = a + b;

      this.data.datasets[0].data.push(Math.trunc(((a - b) / total) * 100 ));
      this.data.datasets[1].data.push(Math.trunc((b / total) * 100));
      this.graph.reinit();
    });
  }

}
