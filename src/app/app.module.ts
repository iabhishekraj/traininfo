import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LiveStatusComponent } from './live-status/live-status.component';
import { LiveStatusService } from './services/live-status.service';
import { RouterModule, Routes } from '@angular/router';
import { PnrstatusComponent } from './pnrstatus/pnrstatus.component';
import { TrainRouteComponent } from './train-route/train-route.component';
import { SeatAvailabilityComponent } from './seat-availability/seat-availability.component';
import { TrainFareComponent } from './train-fare/train-fare.component';
import { TrainsBetweenStationsComponent } from './trains-between-stations/trains-between-stations.component';

const appRoutes: Routes = [
  
  { path: 'livestatus', component: LiveStatusComponent },
  { path: 'pnrstatus', component: PnrstatusComponent },
  { path: 'trainroute', component: TrainRouteComponent },
  { path: 'trainfare', component: TrainFareComponent },
  { path: 'seatavailable', component: SeatAvailabilityComponent },
  { path: 'trainsbetweenstations', component: TrainsBetweenStationsComponent },
  
  { path: '**', redirectTo: '/livestatus', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LiveStatusComponent,
    PnrstatusComponent,
    TrainRouteComponent,
    SeatAvailabilityComponent,
    TrainFareComponent,
    TrainsBetweenStationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LiveStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
