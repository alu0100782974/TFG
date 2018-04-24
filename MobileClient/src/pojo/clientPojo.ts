export class Client {
    public id: number;
    public lat: number;
    public lon: number;
    public name: string;
    public address: string;
    public truckId: number;
    public open: number;
    public close: number;
    public served: boolean;
    public serving: boolean;
    public closed: boolean;

    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.address = undefined;
        this.truckId = undefined;
    }
}