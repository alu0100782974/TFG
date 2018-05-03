import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MapComponent } from './components/map/map.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { StatsComponent } from './components/stats/stats.component';
import { HistoricComponent } from './components/historic/historic.component';
import { LocationsService } from './services/locations-service.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { TrucksService } from './services/trucks-service.service';
import { ClientsService } from './services/clients-service.service';
import { RealTimeService } from './services/real-time-service.service';
import { ServicesSerivce } from './services/services-service.service';
import { ChartModule } from 'primeng/chart';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    MapComponent,
    SolutionsComponent,
    StatsComponent,
    HistoricComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: MapComponent },
      { path: 'route', component: SolutionsComponent },
      { path: 'map', component: MapComponent },
      { path: 'historic', component: HistoricComponent },
      { path: 'stats', component: StatsComponent },
      { path: 'edit-routes', component: StatsComponent }
    ]),
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    SpinnerModule,
    ChartModule,
    TabViewModule
  ],
  providers: [LocationsService, TrucksService, ClientsService, RealTimeService, ServicesSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
