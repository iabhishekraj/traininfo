import { Component, OnInit } from '@angular/core';
import { LiveStatusService } from '../services/live-status.service';

@Component({
  selector: 'app-train-route',
  templateUrl: './train-route.component.html',
  styleUrls: ['./train-route.component.css']
})
export class TrainRouteComponent implements OnInit {
  trainRoute:any;
  constructor(private api:LiveStatusService) {
    this.trainRoute = "";
   }

  getRoute(trainNumber){
    this.api.getTrainRoute(trainNumber)
    .subscribe((response)=>{
      this.trainRoute = response;
      console.log("hi ",this.trainRoute);
    })
  }
  ngOnInit() {
  }

}
