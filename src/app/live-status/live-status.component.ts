import { Component, OnInit } from '@angular/core';
import { LiveStatusService } from '../services/live-status.service';
import { data } from '../utils/data'
import {changeFormat} from '../utils/changeDateFormat'

@Component({
  selector: 'app-live-status',
  templateUrl: './live-status.component.html',
  styleUrls: ['./live-status.component.css']
})
export class LiveStatusComponent implements OnInit {
  liveInfo: any;
  currentLocation: string;
  constructor(private controller: LiveStatusService) {
    this.liveInfo = '';
    this.currentLocation = '';
  }

  getLiveStatus(trainNumber, date) {
    let formatedDate = changeFormat(date);    
    let result = this.controller.getLiveStatus(trainNumber, formatedDate)
      .subscribe((response) => {
        this.liveInfo = response;                        
        this.getCurrentStation();
        console.log(this.liveInfo);
      });
    // this.liveInfo = data;
    // this.getCurrentStation();
  }

  getCurrentStation() {
    // console.log(this.liveInfo.current_station.name)
    this.currentLocation = this.liveInfo.current_station.name;
    console.log(this.currentLocation)
  }

  ngOnInit() {
  }
}