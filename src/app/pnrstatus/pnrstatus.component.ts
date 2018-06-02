import { Component, OnInit } from '@angular/core';
import { LiveStatusService } from '../services/live-status.service';
import {data} from '../utils/pnr';

@Component({
  selector: 'app-pnrstatus',
  templateUrl: './pnrstatus.component.html',
  styleUrls: ['./pnrstatus.component.css']
})
export class PnrstatusComponent implements OnInit {
  pnrStatus:any;

  constructor(private api: LiveStatusService) {
    this.pnrStatus = "";
  }
  getPNRStatus(PNRNumber){
    // let result = this.api.getPNRStatus(PNRNumber)
    // .subscribe((response)=>{
    //   console.log(response);
    // })
    this.pnrStatus = data;
    console.log(this.pnrStatus)
  }
  ngOnInit() {
  }

}
