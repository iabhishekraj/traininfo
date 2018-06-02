import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/catch";
import { API } from '../utils/api'


@Injectable()
export class LiveStatusService {
  constructor(private http: HttpClient) { }
  // get live status of train
  getLiveStatus(trainNumber, date) {
    let URL = `https://api.railwayapi.com/v2/live/train/${trainNumber}/date/${date}/apikey/${API}`;

    console.log(URL);
    return this.http.get<any>(URL)
      .catch(this.handleError);
  }
  // get pnr status
  getPNRStatus(PNRNumber) {
    let URL = `https://api.railwayapi.com/v2/pnr-status/pnr/${PNRNumber}/apikey/${API}`;
    return this.http.get<any>(URL)
      .catch(this.handleError);
  }

  // get route map of train
  getTrainRoute(trainNumber){
    let URL = `https://api.railwayapi.com/v2/route/train/${trainNumber}/apikey/${API}/`;
    return this.http.get<any>(URL)
    .catch(this.handleError);
  }

  getTrainNameByNumber(trainNumber){
    let URL = `https://api.railwayapi.com/v2/name-number/train/${trainNumber}/apikey/${API}`;
    return this.http.get<any>(URL)
    .catch(this.handleError);
  }


  seatAvailable(trainNum, source, destination, date, coachClass, quota){
    let URL = `https://api.railwayapi.com/v2/check-seat/train/${trainNum}/source/${source}/dest/${destination}/date/${date}/pref/${coachClass}/quota/${quota}/apikey/${API}`;

    

    console.log(URL)
    return this.http.get<any>(URL)
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}