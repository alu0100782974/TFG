declare var L: any;

export const truckIcon = L.icon({
    iconUrl: 'assets/imgs/truck.png',
    iconSize: [35, 35], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});

export const blackIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [0, 0]
});

export const flagIcon = L.icon({
    iconUrl: 'assets/imgs/flag.png',
    iconSize: [40, 25], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});

export const servedIcon = L.icon({
    iconUrl: 'assets/imgs/served.svg',
    iconSize: [35, 35], // size of the icon
    shadowSize: [0, 0], // size of the shadow
    iconAnchor: [17, 45], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
