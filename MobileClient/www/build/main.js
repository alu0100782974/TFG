webpackJsonp([0],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ClientsServedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicesProvider = (function () {
    function ServicesProvider(http) {
        this.http = http;
        this.servicesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](null);
    }
    Object.defineProperty(ServicesProvider.prototype, "services", {
        get: function () {
            return this.servicesSubject.filter(function (data) { return !!data; });
        },
        enumerable: true,
        configurable: true
    });
    ServicesProvider.prototype.getClientsServed = function () {
        var _this = this;
        this.http.get(this.urlBackend + "/services?truckId=" + this.truckId).map(function (res) { return res.json(); })
            .subscribe(function (res) {
            _this.servicesSubject.next(res);
        });
    };
    ServicesProvider.prototype.saveClientInfo = function (service) {
        this.http.post(this.urlBackend + "/services", service).map(function (res) { return res.json(); }).subscribe(function (res) {
        });
    };
    ServicesProvider.prototype.setUrlBackend = function (server) {
        this.urlBackend = server;
    };
    ServicesProvider.prototype.setTruckId = function (truckId) {
        this.truckId = truckId;
    };
    ServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ServicesProvider);
    return ServicesProvider;
}());

//# sourceMappingURL=clients-served.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationsProvider = (function () {
    function LocationsProvider(http) {
        this.http = http;
    }
    LocationsProvider.prototype.getLocations = function () {
        return this.http.get(this.urlBackend + "/locations?truckId=" + this.truckId).map(function (res) { return res.json(); });
    };
    LocationsProvider.prototype.saveLocation = function (location) {
        this.http.post(this.urlBackend + "/locations", location).subscribe();
    };
    LocationsProvider.prototype.setUrlBackend = function (server) {
        this.urlBackend = server;
    };
    LocationsProvider.prototype.setTruckId = function (truckId) {
        this.truckId = truckId;
    };
    LocationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LocationsProvider);
    return LocationsProvider;
}());

//# sourceMappingURL=locations.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrucksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TrucksProvider = (function () {
    function TrucksProvider(http) {
        this.http = http;
    }
    TrucksProvider.prototype.getTruck = function (truckId) {
        return this.http.get(this.urlBackend + "/trucks?id=" + truckId).map(function (res) { return res.json(); });
    };
    TrucksProvider.prototype.update = function (truck) {
        this.http.put(this.urlBackend + "/trucks", truck).subscribe();
    };
    TrucksProvider.prototype.setUrlBackend = function (server) {
        this.urlBackend = server;
    };
    TrucksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TrucksProvider);
    return TrucksProvider;
}());

//# sourceMappingURL=trucks.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ClientsServedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientsProvider = (function () {
    function ClientsProvider(http) {
        this.http = http;
    }
    ClientsProvider.prototype.getServedClientsByTruckId = function (truckId) {
        return this.http.get(this.urlBackend + "/clients?truckId=" + truckId + "&served=true").map(function (res) { return res.json(); });
    };
    ClientsProvider.prototype.getNonServedClientsByTruckId = function (truckId) {
        return this.http.get(this.urlBackend + "/clients?truckId=" + truckId + "&served=false").map(function (res) { return res.json(); });
    };
    ClientsProvider.prototype.getServingClientsByTruckId = function (truckId) {
        return this.http.get(this.urlBackend + "/clients?truckId=" + truckId + "&serving=true").map(function (res) { return res.json(); });
    };
    ClientsProvider.prototype.getNonServingClientsByTruckId = function (truckId) {
        return this.http.get(this.urlBackend + "/clients?truckId=" + truckId + "&serving=false").map(function (res) { return res.json(); });
    };
    ClientsProvider.prototype.getClientsByTruckId = function (truckId) {
        return this.http.get(this.urlBackend + "/clients?truckId=" + truckId).map(function (res) { return res.json(); });
    };
    ClientsProvider.prototype.getClient = function (id) {
        return this.http.get(this.urlBackend + "/clients?id=" + id).map(function (res) { return res.json(); });
    };
    ClientsProvider.prototype.updateClient = function (client) {
        this.http.put(this.urlBackend + "/clients", client).subscribe();
    };
    ClientsProvider.prototype.setUrlBackend = function (server) {
        this.urlBackend = server;
    };
    ClientsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ClientsProvider);
    return ClientsProvider;
}());

//# sourceMappingURL=clients.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		222
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { UserDataProvider } from '../../providers/user-data/user-data';
var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"]
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_trucks_trucks__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { UserDataProvider } from '../../providers/user-data/user-data';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, truckProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.truckProvider = truckProvider;
        this.userId = 3;
        this.passwd = 'passwd';
        this.serverId = 'localhost';
        this.port1 = '8181';
        this.port2 = '3001';
        this.ok = true;
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.pushParams = function () {
        var _this = this;
        var backendUrl = "http://" + this.serverId + ":" + this.port2;
        this.truckProvider.setUrlBackend(backendUrl);
        this.truckProvider.getTruck(this.userId).subscribe(function (truck) {
            if (truck == null) {
                alert('TruckId not registered');
                _this.navCtrl.push(LoginPage_1);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                    userId: _this.userId,
                    serverId: _this.serverId,
                    port1: _this.port1,
                    port2: _this.port2
                });
            }
        }, function (err) {
            alert("Error: " + err.message + " - " + err);
        });
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login Page</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <br>\n\n  <div class="form">\n\n    <form class="ui-g-12 form-group" #bookForm="ngForm">\n\n\n\n      <div class="form-group">\n\n        <label for="usuario">Usuario/Camión</label>\n\n        <input class="form-control" type="number" [(ngModel)]="userId" name="truck" required>\n\n      </div>\n\n\n\n      <div class="form-group">\n\n        <label for="password">Contraseña</label>\n\n        <input class="form-control" type="password" [(ngModel)]="passwd" name="Password" required>\n\n\n\n      </div>\n\n      <div class="form-group">\n\n        <label for="server">Servidor</label>\n\n        <input class="form-control" type="text" [(ngModel)]="serverId" name="Server" required>\n\n      </div>\n\n\n\n      <div class="form-group">\n\n        <label for="server">Puerto Websocket</label>\n\n        <input class="form-control" type="text" [(ngModel)]="port1" name="port1" required>\n\n      </div>\n\n\n\n      <div class="form-group">\n\n        <label for="server">Puerto API REST</label>\n\n        <input class="form-control" type="text" [(ngModel)]="port2" name="port2" required>\n\n      </div>\n\n      <button class="login-button" [disabled]="!bookForm.form.valid" (click)="pushParams()">Login</button>\n\n    </form>\n\n  </div>\n\n  <br>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_trucks_trucks__["a" /* TrucksProvider */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pojo_clientPojo__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_markers__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pojo_servicePojo__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_clients_served_clients_served__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_locations_locations__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_nextclient_nextclient__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_trucks_trucks__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pojo_truckPojo__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_clients_clients__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_real_time_real_time__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var HomePage = (function () {
    function HomePage(navCtrl, navParams, clientsServedProvider, locationsProvider, nextClientProvider, truckProvider, clientsProvider, realTimeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clientsServedProvider = clientsServedProvider;
        this.locationsProvider = locationsProvider;
        this.nextClientProvider = nextClientProvider;
        this.truckProvider = truckProvider;
        this.clientsProvider = clientsProvider;
        this.realTimeProvider = realTimeProvider;
        this.connected = false;
        this.nextClient = new __WEBPACK_IMPORTED_MODULE_2__pojo_clientPojo__["a" /* Client */]();
        //JSON that contains the markers inserted into the map (except act.pos)
        this.markers = [];
        //Actual position
        this.actualPos = { lat: 0, lon: 0 };
        //Controllers
        this.controllers = [];
        //Button controls
        this.connect = false;
        this.show = true;
        this.start = true;
        this.next = true;
        this.serve = true;
        this.served = true;
        this.end = true;
        this.serveInterval = null;
        this.timer = 0;
        this.clients = [];
        this.clientsToServe = [];
        this.microPoints = [];
        this.service = new __WEBPACK_IMPORTED_MODULE_5__pojo_servicePojo__["a" /* Service */]();
        ///////////////////////////////////////////////////////////
        ////////////////////// CREATE MAP /////////////////////////
        ///////////////////////////////////////////////////////////
        this.center = [28.4091675, -16.5616061];
        this.truckId = this.navParams.get('userId');
        this.serverId = this.navParams.get('serverId');
        this.port1 = this.navParams.get('port1');
        this.port2 = this.navParams.get('port2');
        this.truck = new __WEBPACK_IMPORTED_MODULE_10__pojo_truckPojo__["a" /* Truck */]();
        this.backendUrl = "http://" + this.serverId + ":" + this.port2;
        this.truckProvider.setUrlBackend(this.backendUrl);
        this.clientsServedProvider.setUrlBackend(this.backendUrl);
        this.clientsServedProvider.setTruckId(this.truckId);
        this.locationsProvider.setUrlBackend(this.backendUrl);
        this.locationsProvider.setTruckId(this.truckId);
        this.nextClientProvider.setUrlBackend(this.backendUrl);
        this.clientsProvider.setUrlBackend(this.backendUrl);
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.loadmap();
    };
    HomePage.prototype.loadmap = function () {
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
    };
    ///////////////////////////////////////////////////////////
    ///////////////// CONNECTION BUTTON ///////////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.connectToServer = function () {
        var _this = this;
        this.realTimeProvider.start("http://" + this.serverId + ":" + this.port1);
        this.connect = true;
        new Promise(function (resolve) {
            _this.truckProvider.getTruck(_this.truckId).subscribe(function (t) {
                _this.truck = t[0];
                _this.actualPos.lat = _this.truck.lastLat;
                _this.actualPos.lon = _this.truck.lastLon;
                //console.log(this.truck)
                resolve();
            });
        }).then(function () {
            _this.truckMarker = new L.marker(new L.latLng(_this.actualPos.lat, _this.actualPos.lon), {
                icon: __WEBPACK_IMPORTED_MODULE_3__utils_markers__["c" /* truckIcon */],
                zIndexOffset: 9999999
            }).addTo(_this.map);
            _this.show = false;
        });
    };
    ///////////////////////////////////////////////////////////
    ///////////////// SHOW ROUTE BUTTON ///////////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.showMyRoute = function () {
        var _this = this;
        this.show = true;
        if (this.realTimeProvider.getSocket().connected === true) {
            new Promise(function (resolve) {
                _this.printAllPoints();
                _this.printServedClients();
                new L.marker(new L.latLng(_this.truck.startLat, _this.truck.startLon), {
                    icon: __WEBPACK_IMPORTED_MODULE_3__utils_markers__["a" /* flagIcon */],
                    zIndexOffset: 999999
                }).addTo(_this.map);
                resolve();
            }).then(function () {
                _this.start = false;
            });
        }
        else {
            alert('Server is down, please restart the app');
        }
        //console.log(this.truck)
    };
    ///////////////////////////////////////////////////////////
    ///////////////// START ROUTE BUTTON //////////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.startRoute = function () {
        var _this = this;
        new Promise(function (resolve) {
            _this.clientsProvider.getNonServedClientsByTruckId(_this.truckId).subscribe(function (c) {
                _this.clientsToServe = c;
                if (c.length > 0) {
                    new Promise(function (resolve) {
                        _this.clientsProvider.getClient(_this.clientsToServe[0].id).subscribe(function (cli) {
                            _this.nextClient = cli[0];
                            resolve();
                        });
                    }).then(function () {
                        _this.start = true;
                        _this.next = false;
                        _this.connected = true;
                        _this.timeStart = new Date();
                        _this.truck.endTime = null;
                        if (_this.truck.startTime == null) {
                            _this.truck.startTime = _this.timeStart;
                        }
                        _this.truckProvider.update(_this.truck);
                        _this.actualDistance = _this.truck.distance;
                        _this.locationInterval = setInterval(function () {
                            var aux = {
                                truckId: _this.truckId,
                                lat: _this.actualPos.lat,
                                lon: _this.actualPos.lon
                            };
                            _this.locationsProvider.saveLocation(aux);
                        }, 2000);
                        _this.timerInterval = setInterval(function () {
                            _this.timer++;
                        }, 1000);
                        _this.emitInterval = setInterval(function () {
                            _this.realTimeProvider.emitMove(_this.truck);
                        }, 1000);
                        _this.nextClientProvider.getNextClient(_this.clientsToServe[0].id).subscribe(function (client) {
                            _this.nextClient = client[0];
                        });
                        _this.cleanMap();
                        _this.printAllPoints();
                        _this.printServedClients();
                    });
                }
                else {
                    alert('No clients to serve');
                    _this.start = false;
                    _this.cleanMap();
                    _this.printAllPoints();
                    _this.printServedClients();
                }
                resolve();
            });
        });
    };
    ///////////////////////////////////////////////////////////
    ///////////////// TO NEXT CLIENT BUTTON ///////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.goToNextClient = function () {
        var _this = this;
        this.next = true;
        this.cleanMap();
        this.printServedClients();
        this.printAllPoints();
        new Promise(function (resolve) {
            _this.clientsProvider.getNonServedClientsByTruckId(_this.truckId).subscribe(function (c) {
                _this.clientsToServe = c;
                if (c.length > 0) {
                    new Promise(function (resolve) {
                        _this.clientsProvider.getClient(_this.clientsToServe[0].id).subscribe(function (cli) {
                            _this.nextClient = cli[0];
                            resolve();
                        });
                    }).then(function () {
                        //console.log(this.truck)
                        //OJOCUIDAO
                        var waypointsaux = [{ lat: _this.actualPos.lat, lon: _this.actualPos.lon },
                            { lat: _this.nextClient.lat, lon: _this.nextClient.lon }];
                        new Promise(function (resolve) {
                            _this.GetPointsBetweenWaypoints(waypointsaux, resolve);
                        }).then(function () {
                            _this.map.panTo(new L.latLng(_this.actualPos.lat, _this.actualPos.lon));
                            _this.nextClient.serving = true;
                            _this.clientsProvider.updateClient(_this.nextClient);
                            _this.moveMarker();
                        });
                    });
                }
                else {
                    _this.end = false;
                }
            });
        });
    };
    ///////////////////////////////////////////////////////////
    /////////////////////// SERVING BUTTON ///////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.startService = function () {
        this.timeStartService = new Date();
        this.service.clientId = this.nextClient.id;
        this.service.truckId = this.truck.id;
        this.service.start = new Date();
        this.service.end = null;
        this.serve = true;
        this.served = false;
    };
    ///////////////////////////////////////////////////////////
    ///////////////// CLIENT SERVED BUTTON ///////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.endService = function () {
        var _this = this;
        this.nextClient.served = true;
        new Promise(function (resolve) {
            _this.clientsProvider.updateClient(_this.nextClient);
            resolve();
        }).then(function () {
            _this.service.end = new Date();
            _this.service.serviceTime = (_this.service.end.getTime() - _this.service.start.getTime()) / 1000;
            _this.served = true;
            setTimeout(function () {
                new Promise(function (resolve) {
                    _this.clientsServedProvider.saveClientInfo(_this.service);
                    _this.printAllPoints();
                    resolve();
                }).then(function () {
                    var auxMarker = new L.marker(new L.latLng(_this.actualPos.lat, _this.actualPos.lon), {
                        icon: __WEBPACK_IMPORTED_MODULE_3__utils_markers__["b" /* servedIcon */],
                        zIndexOffset: 99999
                    }).addTo(_this.map);
                    _this.realTimeProvider.emitServed([_this.actualPos.lat, _this.actualPos.lon, _this.truckId]);
                    _this.markers.push(auxMarker);
                    _this.truck.clientsServed++;
                    _this.truckProvider.update(_this.truck);
                    new Promise(function (resolve) {
                        _this.clientsProvider.getNonServedClientsByTruckId(_this.truckId).subscribe(function (c) {
                            if (c.length == 0) {
                                _this.printAllPoints();
                                _this.end = false;
                            }
                            else {
                                new Promise(function (resolve) {
                                    _this.nextClientProvider.getNextClient(_this.clientsToServe[0].id).subscribe(function (client) {
                                        _this.nextClient = client[0];
                                        resolve();
                                    });
                                }).then(function () {
                                    _this.next = false;
                                });
                            }
                        });
                        resolve();
                    });
                });
            }, 400);
        });
    };
    ///////////////////////////////////////////////////////////
    ///////////////// END SIMULATION BUTTON ///////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.endSimulation = function () {
        this.cleanMap();
        this.printServedClients();
        this.printAllPoints();
        clearInterval(this.locationInterval);
        clearInterval(this.timerInterval);
        clearInterval(this.emitInterval);
        this.end = true;
        this.timeEnd = new Date();
        this.truck.endTime = this.timeEnd;
        this.truckProvider.update(this.truck);
        alert('Route finished');
    };
    ///////////////////////////////////////////////////////////
    //////////////// AUXILIAR FUNCTIONS ///////////////////////
    ///////////////////////////////////////////////////////////
    HomePage.prototype.cleanMap = function () {
        var _this = this;
        if (!!this.controllers) {
            this.controllers.forEach(function (c) {
                _this.map.removeControl(c);
            });
        }
        if (!!this.markers) {
            this.markers.forEach(function (m) {
                _this.map.removeLayer(m);
            });
        }
        this.markers = [];
        this.controllers = [];
    };
    HomePage.prototype.moveMarker = function () {
        var _this = this;
        this.map.removeLayer(this.truckMarker);
        this.truckMarker = new L.marker(new L.latLng(this.actualPos.lat, this.actualPos.lon), {
            icon: __WEBPACK_IMPORTED_MODULE_3__utils_markers__["c" /* truckIcon */],
            zIndexOffset: 9999999
        }).addTo(this.map);
        var time = 0;
        var control = 0;
        var _loop_1 = function (i) {
            setTimeout(function () {
                var auxLat = _this.actualPos.lat;
                var auxLon = _this.actualPos.lon;
                _this.actualPos.lat = _this.microPoints[i].lat;
                _this.actualPos.lon = _this.microPoints[i].lng;
                _this.truck.lastLat = _this.actualPos.lat;
                _this.truck.lastLon = _this.actualPos.lon;
                _this.actualDistance += Math.trunc(_this.getDistance([auxLat, auxLon], [_this.actualPos.lat, _this.actualPos.lon]));
                _this.truck.distance = _this.actualDistance;
                // this.truckProvider.update(this.truck);
                _this.truckMarker.setLatLng([_this.microPoints[i].lat, _this.microPoints[i].lng]);
                control++;
                if (control == (_this.microPoints.length - 1)) {
                    _this.serve = false;
                }
                _this.map.panTo(new L.latLng(_this.microPoints[i].lat, _this.microPoints[i].lng));
            }, time);
            time += 20;
        };
        for (var i = 0; i < this.microPoints.length; i++) {
            _loop_1(i);
        }
    };
    HomePage.prototype.getDistance = function (origin, destination) {
        var lon1 = this.toRadian(origin[1]), lat1 = this.toRadian(origin[0]), lon2 = this.toRadian(destination[1]), lat2 = this.toRadian(destination[0]);
        var deltaLat = lat2 - lat1;
        var deltaLon = lon2 - lon1;
        var a = Math.pow(Math.sin(deltaLat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
        var c = 2 * Math.asin(Math.sqrt(a));
        var EARTH_RADIUS = 6371;
        return c * EARTH_RADIUS * 1000;
    };
    HomePage.prototype.toRadian = function (degree) {
        return degree * Math.PI / 180;
    };
    HomePage.prototype.createControl = function (waypoints, calculate) {
        var _this = this;
        var control = L.Routing.control({
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
        this.controllers.push(control);
        if (calculate === true) {
            control.on('routeselected', function (e) {
                _this.totalDistance = Math.trunc(e.route.summary.totalDistance);
                _this.timeEstimation = Math.trunc(Math.trunc(e.route.summary.totalTime) / 60);
            });
        }
    };
    HomePage.prototype.GetPointsBetweenWaypoints = function (waypoints, resolve) {
        var _this = this;
        var control;
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
        control.on('routeselected', function (e) {
            _this.microPoints = e.route.coordinates;
            resolve();
            _this.map.removeControl(control);
        });
    };
    HomePage.prototype.printAllPoints = function () {
        var _this = this;
        this.clientsProvider.getClientsByTruckId(this.truckId).subscribe(function (cli) {
            _this.clients = cli;
            var start = new __WEBPACK_IMPORTED_MODULE_2__pojo_clientPojo__["a" /* Client */]();
            start.lat = _this.truck.startLat;
            start.lon = _this.truck.startLon;
            _this.clients.unshift(start);
            _this.createControl(_this.clients, true);
        });
    };
    HomePage.prototype.printServedClients = function () {
        var _this = this;
        new Promise(function () {
            _this.clientsProvider.getServedClientsByTruckId(_this.truckId).subscribe(function (clients) {
                clients.forEach(function (client) {
                    _this.markers.push(new L.marker(new L.latLng(client.lat, client.lon), {
                        icon: __WEBPACK_IMPORTED_MODULE_3__utils_markers__["b" /* servedIcon */],
                        zIndexOffset: 99999
                    }).addTo(_this.map));
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\pages\home\home.html"*/'<ion-content>\n\n  <div class="buttons-wrapper">\n\n\n\n    <div *ngIf="!connected" class="connection-buttons">\n\n      <button id="connect-button" [disabled]="connect" (click)="connectToServer()">Connect</button>\n\n      <div>\n\n        <button [disabled]="show" (click)="showMyRoute()">Show my route</button>\n\n        <button [disabled]="start" (click)="startRoute()">Start Route</button>\n\n      </div>\n\n    </div>\n\n\n\n    <div *ngIf="!!connected" class="menu-buttons">\n\n      <div>\n\n        <button [disabled]="next" (click)="goToNextClient()">To next client</button>\n\n        <button [disabled]="serve" (click)="startService()">Serve</button>\n\n        <button [disabled]="served" (click)="endService()">Client Served</button>\n\n      </div>\n\n      <button id="end-button" [disabled]="end" (click)="endSimulation()">End Route</button>\n\n      <div class="info-wrapper">\n\n        \n\n        <span> Time spent: {{ timer }} s</span>\n\n        <span> Estimated time: {{ timeEstimation }} min</span>\n\n        <span> Truck distance: {{ actualDistance }} m</span>\n\n        <span> Estimated distance: {{ totalDistance }} m</span>\n\n        <span> Start: {{ timeStart | date: \'mediumTime\' }}</span>\n\n        <!-- <span> Finish: {{ !!timeEnd ? (timeEnd| date: \'mediumTime\') : --- }}</span>  -->\n\n        <span> Finish: {{ !!timeEnd ? (timeEnd | date: \'mediumTime\') : \'---\' }}</span> \n\n\n\n      </div>\n\n    </div>\n\n\n\n  </div>\n\n  <div id="map">\n\n    <next-client [nextClient]="nextClient" *ngIf="!!connected"></next-client>\n\n  </div>\n\n\n\n  <div *ngIf="!!connected">\n\n    <menu></menu>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_clients_served_clients_served__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_locations_locations__["a" /* LocationsProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_nextclient_nextclient__["a" /* NextClientProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_trucks_trucks__["a" /* TrucksProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_clients_clients__["a" /* ClientsProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_real_time_real_time__["a" /* RealTimeProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
        this.id = undefined;
        this.name = undefined;
        this.address = undefined;
        this.truckId = undefined;
    }
    return Client;
}());

//# sourceMappingURL=clientPojo.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextClientProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PruebaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NextClientProvider = (function () {
    function NextClientProvider(http) {
        this.http = http;
    }
    NextClientProvider.prototype.getNextClient = function (clientId) {
        return this.http.get(this.urlBackend + "/clients?id=" + clientId).map(function (res) { return res.json(); });
    };
    NextClientProvider.prototype.setUrlBackend = function (server) {
        this.urlBackend = server;
    };
    NextClientProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NextClientProvider);
    return NextClientProvider;
}());

//# sourceMappingURL=nextclient.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RealTimeProvider = (function () {
    function RealTimeProvider() {
        // this._socket = <any>{
        //     emit: () => console.warn(this.REAL_TIME_DISABLED),
        //     on: () => console.warn(this.REAL_TIME_DISABLED)
        // };
    }
    RealTimeProvider.prototype.start = function (urlBackend) {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](urlBackend);
        this.socket.on('connect', function () {
            console.log('Conexion con el servidor establecida');
        });
    };
    RealTimeProvider.prototype.emitMove = function (data) {
        this.socket.emit('move', data);
    };
    RealTimeProvider.prototype.emitServed = function (data) {
        this.socket.emit('served', data);
    };
    RealTimeProvider.prototype.getSocket = function () {
        return this.socket;
    };
    RealTimeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RealTimeProvider);
    return RealTimeProvider;
}());

//# sourceMappingURL=real-time.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_clients_served_clients_served__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_locations_locations__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_nextclient_nextclient__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_trucks_trucks__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_clients_clients__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_real_time_real_time__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_clients_served_clients_served__["a" /* ServicesProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_locations_locations__["a" /* LocationsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_nextclient_nextclient__["a" /* NextClientProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_trucks_trucks__["a" /* TrucksProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_clients_clients__["a" /* ClientsProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_real_time_real_time__["a" /* RealTimeProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return truckIcon; });
/* unused harmony export blackIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flagIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return servedIcon; });
/* unused harmony export redIcon */
var truckIcon = L.icon({
    iconUrl: 'assets/imgs/truck.png',
    iconSize: [35, 35],
    shadowSize: [0, 0],
    iconAnchor: [20, 20],
    shadowAnchor: [4, 62],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
var blackIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [0, 0]
});
var flagIcon = L.icon({
    iconUrl: 'assets/imgs/flag.png',
    iconSize: [40, 25],
    shadowSize: [0, 0],
    iconAnchor: [20, 40],
    shadowAnchor: [0, 0],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
var servedIcon = L.icon({
    iconUrl: 'assets/imgs/served.svg',
    iconSize: [35, 35],
    shadowSize: [0, 0],
    iconAnchor: [17, 45],
    shadowAnchor: [4, 62],
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
});
var redIcon = L.icon({
    iconUrl: 'assets/imgs/redicon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [0, 0]
});
//# sourceMappingURL=markers.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
var Service = (function () {
    function Service() {
    }
    return Service;
}());

//# sourceMappingURL=servicePojo.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Truck; });
var Truck = (function () {
    function Truck() {
    }
    return Truck;
}());

//# sourceMappingURL=truckPojo.js.map

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this.init();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\app\app.html"*/'<!-- <ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Sistema de gestión de transporte\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header> -->\n\n<ion-content>\n\n    <ion-nav [root]="rootPage"></ion-nav>\n\n</ion-content>'/*ion-inline-end:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__next_client_next_client__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_dialog__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_scrollpanel__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_scrollpanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_scrollpanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_table__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__next_client_next_client__["a" /* NextClientComponent */],
                __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_scrollpanel__["ScrollPanelModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_table__["TableModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__next_client_next_client__["a" /* NextClientComponent */],
                __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuComponent */]
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pojo_clientPojo__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NextClientComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NextClientComponent = (function () {
    function NextClientComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__pojo_clientPojo__["a" /* Client */])
    ], NextClientComponent.prototype, "nextClient", void 0);
    NextClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'next-client',template:/*ion-inline-start:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\components\next-client\next-client.html"*/'<!-- Generated template for the NextClientComponent component -->\n\n<div class="banner">\n\n  <span class="header">Next client to visit</span>\n\n  <div class="body">\n\n    <label for="name">\n\n      Name: {{nextClient?.name}}\n\n    </label>\n\n    <label for="adress">\n\n      Address: {{nextClient?.address}}\n\n    </label>\n\n    <label for="open">\n\n      Open-Close: {{nextClient?.open }} - {{nextClient?.close}}\n\n    </label>\n\n  </div>\n\n</div>'/*ion-inline-end:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\components\next-client\next-client.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NextClientComponent);
    return NextClientComponent;
}());

//# sourceMappingURL=next-client.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_clients_served_clients_served__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_locations_locations__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clients_clients__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MenuComponent component.‽
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuComponent = (function () {
    function MenuComponent(navParams, servicesProvider, locationProvider, clientsProvider) {
        this.navParams = navParams;
        this.servicesProvider = servicesProvider;
        this.locationProvider = locationProvider;
        this.clientsProvider = clientsProvider;
        this.services = [];
        this.locations = [];
        this.clientsToServe = [];
        this.display = false;
        this.display2 = false;
        this.display3 = false;
        this.truckId = this.navParams.get('userId');
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicesProvider.services.subscribe(function (res) {
            _this.services = res;
        });
    };
    MenuComponent.prototype.getClientsServed = function (truckId) {
        this.display2 = false;
        this.display3 = false;
        this.display = !this.display;
        this.servicesProvider.getClientsServed();
    };
    MenuComponent.prototype.getLocations = function (truckId) {
        var _this = this;
        this.display = false;
        this.display3 = false;
        this.display2 = !this.display2;
        this.locationProvider.getLocations().subscribe(function (loc) {
            _this.locations = loc;
        });
    };
    MenuComponent.prototype.getClientsToServe = function () {
        var _this = this;
        this.display = false;
        this.display2 = false;
        this.display3 = !this.display3;
        this.clientsProvider.getNonServedClientsByTruckId(this.truckId).subscribe(function (c) {
            _this.clientsToServe = c;
        });
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu',template:/*ion-inline-start:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\components\menu\menu.html"*/'<div>\n\n  <div class="buttons-wrapper menu-buttons">\n\n    <button (click)="getClientsServed()">Clients served</button>\n\n    <button (click)="getClientsToServe()">Clients to serve</button>\n\n    <button (click)="getLocations()">My tracking</button>\n\n  </div>\n\n</div>\n\n\n\n<p-dialog header="Services" [draggable]="false" [(visible)]="display">\n\n  <p-scrollPanel [style]="{height: \'200px\'}">\n\n    <table class="table" border="1">\n\n      <thead>\n\n        <th>Client</th>\n\n        <th>Start</th>\n\n        <th>Finish</th>\n\n        <th>Service time(s)</th>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let s of services">\n\n          <td>{{ s.clientId }}</td>\n\n          <td>{{ s.start | date: \'HH:mm:ss\' }}</td>\n\n          <td>{{ s.end | date: \'HH:mm:ss\' }}</td>\n\n          <td>{{ s.serviceTime }}</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </p-scrollPanel>\n\n</p-dialog>\n\n\n\n<p-dialog header="Tracking" [draggable]="false" [(visible)]="display2">\n\n  <p-scrollPanel [style]="{height: \'200px\'}">\n\n    <table class="table" border="1">\n\n      <thead>\n\n        <th>Latitude</th>\n\n        <th>Longitude</th>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let l of locations ">\n\n          <td>{{ l.lat }}</td>\n\n          <td>{{ l.lon }}</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </p-scrollPanel>\n\n</p-dialog>\n\n\n\n<p-dialog header="Clients to serve" [draggable]="false" [(visible)]="display3">\n\n  <p-scrollPanel [style]="{height: \'200px\'}">\n\n    <table class="table" border="1">\n\n      <thead>\n\n        <th>Order</th>\n\n        <th>ClientId</th>\n\n        <th>Latitude</th>\n\n        <th>Longitude</th>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let c of clientsToServe ">\n\n          <td>{{ c.order }}</td>\n\n          <td>{{ c.id }}</td>\n\n          <td>{{ c.lat }}</td>\n\n          <td>{{ c.lon }}</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </p-scrollPanel>\n\n</p-dialog>'/*ion-inline-end:"C:\Users\A680127\Desktop\TFG2.0\MobileClient\src\components\menu\menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_clients_served_clients_served__["a" /* ServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_locations_locations__["a" /* LocationsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clients_clients__["a" /* ClientsProvider */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ })

},[380]);
//# sourceMappingURL=main.js.map