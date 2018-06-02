import { Component, OnInit } from '@angular/core';
import { LiveStatusService } from '../services/live-status.service';
import {changeFormat} from '../utils/changeDateFormat'
@Component({
  selector: 'app-seat-availability',
  templateUrl: './seat-availability.component.html',
  styleUrls: ['./seat-availability.component.css']
})
export class SeatAvailabilityComponent implements OnInit {
  trainName: string;
  trainNumberCheckStatus: boolean;
  seatInfo:any;
  constructor(private api: LiveStatusService) {
    this.trainNumberCheckStatus = true;
    this.seatInfo = '';
  }

  findTrainName(trainNumber) {
    this.api.getTrainNameByNumber(trainNumber)
      .subscribe((response) => {
        if (response.response_code == 200) {
          this.trainName = response.train.name;
          this.trainNumberCheckStatus = true;
          console.log(response);
        }
        else {
          this.trainName = "Wrong Train Number"
          this.trainNumberCheckStatus = false;
        }
      })
  }

  findSeatAvailable(trainNum, source, destination, date, coachClass, quota) {
    let newDate =changeFormat(date);    
    console.log("newdate = ", newDate);
    this.api.seatAvailable(trainNum, source, destination, newDate, coachClass, quota)
      .subscribe((response) => {
        console.log(response);
        this.seatInfo = response;
      })
  }

  ngOnInit() {
  }

}
