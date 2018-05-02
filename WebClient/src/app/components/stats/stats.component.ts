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

    @ViewChild('graph2')
    graph2: UIChart;

    @ViewChild('graph3')
    graph3: UIChart;

    labels: string[] = [];

    data: any = {
        labels: this.labels,
        datasets: [
            {
                label: 'Displacement time(%)',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: []
            },
            {
                label: 'Service time(%)',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                data: []
            }
        ]
    };

    data2 = {
        labels: [],
        datasets: []
    };

    data3 = {
        labels: ['0'],
        datasets: []
    };

    constructor(
        private truckService: TrucksService,
        private clientsService: ClientsService,
        private serviceService: ServicesSerivce) {
    }

    ngOnInit(): void {

        let max = -1;
        const p: any[] = [];

        this.truckService.getTrucks().subscribe(trucks => {
            trucks.forEach(t => {
                if (!!t.endTime && !!t.startTime) {
                    this.data3.labels.push(`${(new Date(t.endTime).getTime() - new Date(t.startTime).getTime())} m`);
                }
                p.push(new Promise((resolve) => {
                    this.serviceService.getClientsServed(t.id).subscribe(s => {
                        console.log(2);
                        if (s.length > max) {
                            max = s.length;
                            console.log('new max=' + max);
                        }
                        resolve();
                    });
                }));
            });

            Promise.all(p).then(() => {

                for (let i = 0; i <= max; i++) {
                    this.data2.labels.push(`${i} clients`);
                }
                this.truckService.getTrucks().subscribe(t => {
                    t.forEach(e => {
                        this.fillFirstDataset(e);
                        this.fillSecondDataset(e);
                        this.fillThirdDataset(e);
                    });
                });

            });
        });

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
        this.serviceService.getClientsServed(e.id).subscribe(client => {
            let totalServiceTime = 0;
            client.forEach(c => {
                totalServiceTime += c.serviceTime;
            });

            const a = (time / 1000);
            const b = totalServiceTime;

            this.data.datasets[0].data.push(Math.trunc(((a - b) / a) * 100));
            this.data.datasets[1].data.push(Math.trunc((b / a) * 100));



            this.graph.reinit();
        });
    }

    private fillSecondDataset(e: Truck) {

        const aux = [0];

        if (e.clientsServed > 0) {
            const p = new Promise((resolve) => {
                this.serviceService.getClientsServed(e.id).subscribe(services => {
                    services.forEach(s => {
                        if (!!s.end) {
                            aux.push(Math.trunc(((new Date(s.end).getTime()) - new Date(e.startTime).getTime()) / 1000));
                        }
                    });
                    resolve();
                });
            }).then(() => {
                this.data2.datasets.push({
                    label: 'Truck: ' + e.id.toString(),
                    data: aux,
                    fill: false,
                    borderColor: this.randomColor()
                });

                this.graph2.reinit();
            });
        }


    }

    private fillThirdDataset(e: Truck) {
        if (!!e.startTime) {
            this.data3.datasets.push({
                label: 'Truck: ' + e.id.toString(),
                data: [0, e.distance],
                fill: false,
                borderColor: this.randomColor()
            });
        }
        this.graph3.reinit();
    }


    randomColor(): string {
        return `#${(Math.floor(Math.random() * 1000) + 500).toString(16).toUpperCase()}`;
    }
}
