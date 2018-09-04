webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".app-title{\r\n    height: 60px;\r\n    /* border: 1px solid red; */\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;    \r\n    z-index: 1;\r\n    -webkit-box-shadow: 0px 0px 10px grey;\r\n            box-shadow: 0px 0px 10px grey;\r\n    background: #1b7477;\r\n}\r\nh1{\r\n    text-align: center;    \r\n    margin: 0;\r\n    padding: 10px;\r\n    color: white;\r\n    position: absolute;\r\n    top: 13px;\r\n    left: 0;\r\n    width: 100%;\r\n    z-index: 12;\r\n    text-shadow: 4px -4px 5px black;\r\n    font-size: 40px;\r\n}\r\n.running-train img{\r\n    height: 50px;\r\n    width: 100px;\r\n    position: absolute;\r\n    z-index: 3;\r\n    right: -10%;\r\n    top: 13px;\r\n    -webkit-animation: runtrain 17s infinite linear;\r\n            animation: runtrain 17s infinite linear;\r\n}\r\n@-webkit-keyframes runtrain{\r\n    from{\r\n        right: -5%;\r\n    }\r\n    to{\r\n        right: 150%;\r\n    }\r\n    \r\n}\r\n@keyframes runtrain{\r\n    from{\r\n        right: -5%;\r\n    }\r\n    to{\r\n        right: 150%;\r\n    }\r\n    \r\n}\r\n#content{\r\n    position: relative;\r\n}\r\n.menu{\r\n    position: fixed;\r\n    top: 59px;    \r\n    width: 100%;    \r\n    z-index: 1000;\r\n}\r\n.navbar{\r\n    border-radius: 0px !important;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"app-title\">\r\n      <h1>Train's Info</h1>  \r\n  <div class=\"running-train\">\r\n    <img src=\"./assets/images/running-train-1.png\" alt=\"running train\">\r\n  </div>  \r\n</div>\r\n  <!-- menu starts -->\r\n  <div class=\"show-hide-menu\">  \r\n    <div class=\"menu\">\r\n      <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" routerLink=\"livestatus\">Train's Info</a>\r\n          </div>\r\n          <ul class=\"nav navbar-nav\">\r\n            <li class=\"active\">\r\n              <a routerLink=\"livestatus\">Live Status</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"pnrstatus\">PNR Status</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"trainroute\">Train Route</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"seatavailable\">Seat Availability</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"trainfare\">Get Fare</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"trainsbetweenstations\">Trains Between Stations</a>\r\n            </li>            \r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n  </div>\r\n  <!-- menu ends -->\r\n  \r\n  <!-- body section -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.menuOpen = false;
    }
    AppComponent.prototype.showHideMenu = function () {
        this.menuOpen = !this.menuOpen;
        console.log(this.menuOpen);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__live_status_live_status_component__ = __webpack_require__("./src/app/live-status/live-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_live_status_service__ = __webpack_require__("./src/app/services/live-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pnrstatus_pnrstatus_component__ = __webpack_require__("./src/app/pnrstatus/pnrstatus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__train_route_train_route_component__ = __webpack_require__("./src/app/train-route/train-route.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__seat_availability_seat_availability_component__ = __webpack_require__("./src/app/seat-availability/seat-availability.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__train_fare_train_fare_component__ = __webpack_require__("./src/app/train-fare/train-fare.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trains_between_stations_trains_between_stations_component__ = __webpack_require__("./src/app/trains-between-stations/trains-between-stations.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'livestatus', component: __WEBPACK_IMPORTED_MODULE_5__live_status_live_status_component__["a" /* LiveStatusComponent */] },
    { path: 'pnrstatus', component: __WEBPACK_IMPORTED_MODULE_8__pnrstatus_pnrstatus_component__["a" /* PnrstatusComponent */] },
    { path: 'trainroute', component: __WEBPACK_IMPORTED_MODULE_9__train_route_train_route_component__["a" /* TrainRouteComponent */] },
    { path: 'trainfare', component: __WEBPACK_IMPORTED_MODULE_11__train_fare_train_fare_component__["a" /* TrainFareComponent */] },
    { path: 'seatavailable', component: __WEBPACK_IMPORTED_MODULE_10__seat_availability_seat_availability_component__["a" /* SeatAvailabilityComponent */] },
    { path: 'trainsbetweenstations', component: __WEBPACK_IMPORTED_MODULE_12__trains_between_stations_trains_between_stations_component__["a" /* TrainsBetweenStationsComponent */] },
    { path: '**', redirectTo: '/livestatus', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__live_status_live_status_component__["a" /* LiveStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pnrstatus_pnrstatus_component__["a" /* PnrstatusComponent */],
                __WEBPACK_IMPORTED_MODULE_9__train_route_train_route_component__["a" /* TrainRouteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__seat_availability_seat_availability_component__["a" /* SeatAvailabilityComponent */],
                __WEBPACK_IMPORTED_MODULE_11__train_fare_train_fare_component__["a" /* TrainFareComponent */],
                __WEBPACK_IMPORTED_MODULE_12__trains_between_stations_trains_between_stations_component__["a" /* TrainsBetweenStationsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_live_status_service__["a" /* LiveStatusService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/live-status/live-status.component.css":
/***/ (function(module, exports) {

module.exports = ".live-status-content {\r\n  margin-top: 150px;\r\n}\r\n\r\n.train-status-input-form {\r\n  padding: 5%;\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0px 0px 30px grey;\r\n          box-shadow: 0px 0px 30px grey;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.train-status-input-form:hover {\r\n  -webkit-box-shadow: 0px 0px 10px grey;\r\n          box-shadow: 0px 0px 10px grey;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.train-status-input-form h2 {\r\n  text-align: center;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n.current-status {\r\n  text-align: center;\r\n  color: black;\r\n  background: #EEB902;\r\n  padding: 10px;\r\n  border: 1px solid lightgrey;\r\n  font-size: 18px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.route-info table {\r\n  border: 1px solid;\r\n}\r\n\r\n.route-info table thead {\r\n  background: cadetblue;\r\n  color: white;\r\n}\r\n\r\n.train-img {\r\n  width: 30px;\r\n  height: 30px;\r\n  -webkit-animation: blink 0.8s linear infinite;\r\n          animation: blink 0.8s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes blink {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.show-train-live-status h3 {\r\n  text-align: center;\r\n}\r\n\r\n.late-min {\r\n  color: red;\r\n}\r\n\r\n.early-min{\r\n  color: green;\r\n}"

/***/ }),

/***/ "./src/app/live-status/live-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"live-status-content\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-sm-offset-3\">\n      <!-- take input from user -->\n      <div class=\"train-status-input-form\">\n        <h2>Get Live Status of Train</h2>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Enter Train Number</label>\n          <input type=\"number\" class=\"form-control\" id=\"txt_train_number\" aria-describedby=\"emailHelp\" placeholder=\"Enter Train Number\"\n            title=\"train number\" #trainNum value=\"12302\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"date\" class=\"form-control\" id=\"txt_date\" placeholder=\"Select Date\" title=\"Date\" #date value=\"\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"getLiveStatus(trainNum.value, date.value)\">Get Live Status</button>\n      </div>\n    </div>\n  </div>\n  <!-- show result -->\n  <div class=\"show-train-live-status\" *ngIf=\"liveInfo.response_code == 200\">\n    <hr>\n    <h3>Running Status of {{liveInfo.train.name}} ({{liveInfo.train.number}}) on {{liveInfo.start_date}}</h3>\n    <!-- current status -->\n    <div class=\"current-status\">{{liveInfo.position}}</div>\n    <div class=\"route-info\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Station Name</th>\n            <th>Sch. Arrival</th>\n            <th>Sch. Departure</th>\n            <th>Actual Arrival (delay)</th>\n            <th>Actual Departure</th>\n            <th>Distance</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let index of liveInfo.route\">\n            <td>{{index.station.name}}</td>\n            <td>{{index.scharr}}</td>\n            <td>{{index.schdep}}</td>\n            <td>{{index.actarr}}\n            <span *ngIf=\"index.has_arrived\">\n                <span class=\"early-min\" *ngIf=\"index.latemin <= 0\">\n                  (+{{(-1) * index.latemin}} mins.)\n                </span>\n                <span class=\"late-min\" *ngIf=\"index.latemin > 0\">\n                  ({{(-1) * index.latemin}} mins.)\n                </span>\n              </span>\n            </td>\n            <td>{{index.actdep}}</td>\n            <td>\n              <span *ngIf=\"index.station.name == currentLocation\">\n                <img class=\"train-img\" src=\"./assets/images/train.png\" alt=\"train image not visible\">\n              </span>\n              <span *ngIf=\"index.station.name != currentLocation\">\n                {{index.distance}}\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"show-train-live-status\" *ngIf=\"liveInfo.response_code == 210\">\n    <hr>\n      <div class=\"current-status\">Train doesn't run on Given Date.</div> \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/live-status/live-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_live_status_service__ = __webpack_require__("./src/app/services/live-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_changeDateFormat__ = __webpack_require__("./src/app/utils/changeDateFormat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LiveStatusComponent = /** @class */ (function () {
    function LiveStatusComponent(controller) {
        this.controller = controller;
        this.liveInfo = '';
        this.currentLocation = '';
    }
    LiveStatusComponent.prototype.getLiveStatus = function (trainNumber, date) {
        var _this = this;
        var formatedDate = Object(__WEBPACK_IMPORTED_MODULE_2__utils_changeDateFormat__["a" /* changeFormat */])(date);
        var result = this.controller.getLiveStatus(trainNumber, formatedDate)
            .subscribe(function (response) {
            _this.liveInfo = response;
            _this.getCurrentStation();
            console.log(_this.liveInfo);
        });
        // this.liveInfo = data;
        // this.getCurrentStation();
    };
    LiveStatusComponent.prototype.getCurrentStation = function () {
        // console.log(this.liveInfo.current_station.name)
        this.currentLocation = this.liveInfo.current_station.name;
        console.log(this.currentLocation);
    };
    LiveStatusComponent.prototype.ngOnInit = function () {
    };
    LiveStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-live-status',
            template: __webpack_require__("./src/app/live-status/live-status.component.html"),
            styles: [__webpack_require__("./src/app/live-status/live-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_live_status_service__["a" /* LiveStatusService */]])
    ], LiveStatusComponent);
    return LiveStatusComponent;
}());



/***/ }),

/***/ "./src/app/pnrstatus/pnrstatus.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\r\n    margin-top: 150px;\r\n}\r\n\r\n.input-form{    \r\n    padding: 5%;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 30px grey;\r\n            box-shadow: 0px 0px 30px grey;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n\r\n.input-form:hover{\r\n    -webkit-box-shadow: 0px 0px 10px grey;\r\n            box-shadow: 0px 0px 10px grey;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n\r\n.input-form h2{\r\n    text-align: center;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.show-result{\r\n    margin-top: 100px;\r\n}\r\n\r\n.show-result h3{\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.show-result table{\r\n    border:1px solid;\r\n    text-align: center;\r\n}\r\n\r\n.show-result table thead{\r\n    background: cadetblue;\r\n    color: white;        \r\n}\r\n\r\n.show-result table thead th{\r\n    text-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pnrstatus/pnrstatus.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pnr-status-content content\">\n  <!-- take input from user -->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-sm-offset-3\">\n      <div class=\"input-form\">\n        <h2>Get PNR Status</h2>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Enter PNR Number</label>\n          <input type=\"number\" class=\"form-control\" id=\"txt_pnr_number\" placeholder=\"Enter PNR Number\" title=\"PNR number\" #PNRNum value=\"6314624833\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"getPNRStatus(PNRNum.value)\">Get PNR Status</button>\n      </div>\n    </div>\n  </div>\n  <!-- show result -->\n  <div class=\"show-result\" *ngIf=\"pnrStatus.response_code >= 200 && pnrStatus.response_code <= 299\">\n    <h3>You Queried for PNR Number: {{pnrStatus.pnr}}</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <!-- info 1 -->\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Train Number</th>\n              <th>Train Name</th>\n              <th>Boarding Date</th>\n              <th>From</th>\n              <th>To</th>\n              <th>Reserved Upto</th>\n              <th>Boarding Point</th>\n              <th>Class</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{pnrStatus.train.number}}</td>\n              <td>{{pnrStatus.train.name}}</td>\n              <td>{{pnrStatus.doj}}</td>\n              <td>{{pnrStatus.from_station.name}} ({{pnrStatus.from_station.code}})</td>\n              <td>{{pnrStatus.to_station.name}} ({{pnrStatus.to_station.code}})</td>\n              <td>{{pnrStatus.reservation_upto.name}} ({{pnrStatus.reservation_upto.code}})</td>\n              <td>{{pnrStatus.boarding_point.name}} ({{pnrStatus.boarding_point.code}})</td>\n              <td>{{pnrStatus.journey_class.code}}</td>              \n            </tr>\n          </tbody>\n        </table>\n        <!-- info 2 -->\n        <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Number of Passenger</th>\n                <th>Booking Status (Coach No/ Berth No./ Quota)</th>\n                <th>Current Status (Coach No/ Berth No.)</th>                \n                <th>Chart Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>{{pnrStatus.total_passengers}}</td>\n                <td>{{pnrStatus.passengers[0].booking_status}}</td>\n                <td>{{pnrStatus.passengers[0].current_status}}</td>          \n                <td>\n                  <span *ngIf=\"pnrStatus.chart_prepared; else notprepared\">\n                    Chart Prepared\n                  </span>\n                  <ng-template #notprepared>\n                    Chart Not Prepared\n                  </ng-template>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n\n      </div>\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/pnrstatus/pnrstatus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PnrstatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_live_status_service__ = __webpack_require__("./src/app/services/live-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_pnr__ = __webpack_require__("./src/app/utils/pnr.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PnrstatusComponent = /** @class */ (function () {
    function PnrstatusComponent(api) {
        this.api = api;
        this.pnrStatus = "";
    }
    PnrstatusComponent.prototype.getPNRStatus = function (PNRNumber) {
        // let result = this.api.getPNRStatus(PNRNumber)
        // .subscribe((response)=>{
        //   console.log(response);
        // })
        this.pnrStatus = __WEBPACK_IMPORTED_MODULE_2__utils_pnr__["a" /* data */];
        console.log(this.pnrStatus);
    };
    PnrstatusComponent.prototype.ngOnInit = function () {
    };
    PnrstatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pnrstatus',
            template: __webpack_require__("./src/app/pnrstatus/pnrstatus.component.html"),
            styles: [__webpack_require__("./src/app/pnrstatus/pnrstatus.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_live_status_service__["a" /* LiveStatusService */]])
    ], PnrstatusComponent);
    return PnrstatusComponent;
}());



/***/ }),

/***/ "./src/app/seat-availability/seat-availability.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\r\n  margin-top: 150px;\r\n}\r\n\r\n.input-form {\r\n  padding: 5%;\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: 0px 0px 30px grey;\r\n          box-shadow: 0px 0px 30px grey;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.input-form:hover {\r\n  -webkit-box-shadow: 0px 0px 10px grey;\r\n          box-shadow: 0px 0px 10px grey;\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n}\r\n\r\n.input-form h2 {\r\n  text-align: center;\r\n  border-bottom: 1px solid;\r\n}\r\n\r\n.show-result {\r\n  margin-top: 100px;\r\n}\r\n\r\n.show-result h3 {\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.show-result h4 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n\r\n.show-result table {\r\n  border: 1px solid;\r\n  text-align: center;\r\n}\r\n\r\n.show-result table thead {\r\n  background: cadetblue;\r\n  color: white;\r\n}\r\n\r\n.show-result table thead th {\r\n  text-align: center;\r\n}\r\n\r\n.rightname {\r\n  border-right: 5px solid green !important;\r\n}\r\n\r\n.wrongname {\r\n  border-right: 5px solid red !important;\r\n}\r\n\r\n.readonly-field {\r\n  background: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/seat-availability/seat-availability.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <!-- take input from user -->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-sm-offset-3\">\n      <div class=\"input-form\">\n        <h2>Seat Availability</h2>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"form-group\">\n              <label>Train Number</label>\n              <input type=\"number\" class=\"form-control\" placeholder=\"Enter Train Number\" title=\"Train number\" #TrainNumber value=\"12303\"\n                (blur)=\"findTrainName(TrainNumber.value)\" autofocus>\n            </div>\n          </div>\n          <div class=\"col-sm-8\">\n            <!-- train name -->\n            <div class=\"form-group\">\n              <label>Train Name</label>\n              <input type=\"text\" [ngClass]=\"trainNumberCheckStatus == true ? 'rightname' : 'wrongname'\" class=\"form-control readonly-field\" placeholder=\"Train Name\" title=\"Train Name\" [(ngModel)]=\"trainName\" readonly>\n            </div>\n          </div>\n        </div>\n        <!-- select station  -->\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <!-- Source station -->\n            <div class=\"form-group\">\n              <label>Source Station</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Source Station Code\" title=\"Source Station\" #Source value=\"HWH\">\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <!-- Destination station -->\n            <div class=\"form-group\">\n              <label>Destination Station</label>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter Destination\" title=\"Destination Station\" #Destination value=\"NDLS\">\n            </div>\n          </div>\n        </div>\n        <!-- other options -->\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <!-- Select Date -->\n            <div class=\"form-group\">\n              <label>Select Date</label>\n              <input type=\"date\" class=\"form-control\" placeholder=\"Select Date\" title=\"Date\" #Date value=\"2018-06-25\">\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <!-- Select Class -->\n            <div class=\"form-group\">\n              <label>Select Class</label>\n              <select class=\"form-control\" placeholder=\"Select Class\" title=\"Class\" #Class>\n                <option value=\"SL\" selected>Sleeper</option>\n                <option value=\"3A\">Third Class AC</option>\n                <option value=\"2A\">Second Class AC</option>\n                <option value=\"1A\">First Class AC</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <!-- Quota -->\n            <div class=\"form-group\">\n              <label>Quota</label>\n              <select class=\"form-control\" placeholder=\"Select Quota\" title=\"Quota\" #Quota>\n                <option value=\"GN\" selected>General</option>\n                <option value=\"LD\">Ladies Quota</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"findSeatAvailable(TrainNumber.value, Source.value, Destination.value, Date.value, Class.value, Quota.value)\">Check</button>\n      </div>\n    </div>\n  </div>\n  <!-- show result -->\n  <div class=\"show-result\" *ngIf=\"seatInfo.response_code == 200\">    \n    <h3>You Queried for Train: {{seatInfo.train.name}} ({{seatInfo.train.number}})</h3>        \n    <h4>(Qouta : {{seatInfo.quota.name}}) (Class : {{seatInfo.journey_class.name}})</h4>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>S. No.</th>\n              <th>Date</th>\n              <th>Status</th>              \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let info of seatInfo.availability;let i = index\">\n              <td>{{i+1}}</td>\n              <td>{{info.date}}</td>\n              <td>{{info.status}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/seat-availability/seat-availability.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeatAvailabilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_live_status_service__ = __webpack_require__("./src/app/services/live-status.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_changeDateFormat__ = __webpack_require__("./src/app/utils/changeDateFormat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeatAvailabilityComponent = /** @class */ (function () {
    function SeatAvailabilityComponent(api) {
        this.api = api;
        this.trainNumberCheckStatus = true;
        this.seatInfo = '';
    }
    SeatAvailabilityComponent.prototype.findTrainName = function (trainNumber) {
        var _this = this;
        this.api.getTrainNameByNumber(trainNumber)
            .subscribe(function (response) {
            if (response.response_code == 200) {
                _this.trainName = response.train.name;
                _this.trainNumberCheckStatus = true;
                console.log(response);
            }
            else {
                _this.trainName = "Wrong Train Number";
                _this.trainNumberCheckStatus = false;
            }
        });
    };
    SeatAvailabilityComponent.prototype.findSeatAvailable = function (trainNum, source, destination, date, coachClass, quota) {
        var _this = this;
        var newDate = Object(__WEBPACK_IMPORTED_MODULE_2__utils_changeDateFormat__["a" /* changeFormat */])(date);
        console.log("newdate = ", newDate);
        this.api.seatAvailable(trainNum, source, destination, newDate, coachClass, quota)
            .subscribe(function (response) {
            console.log(response);
            _this.seatInfo = response;
        });
    };
    SeatAvailabilityComponent.prototype.ngOnInit = function () {
    };
    SeatAvailabilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-seat-availability',
            template: __webpack_require__("./src/app/seat-availability/seat-availability.component.html"),
            styles: [__webpack_require__("./src/app/seat-availability/seat-availability.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_live_status_service__["a" /* LiveStatusService */]])
    ], SeatAvailabilityComponent);
    return SeatAvailabilityComponent;
}());



/***/ }),

/***/ "./src/app/services/live-status.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStatusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_api__ = __webpack_require__("./src/app/utils/api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LiveStatusService = /** @class */ (function () {
    function LiveStatusService(http) {
        this.http = http;
    }
    // get live status of train
    LiveStatusService.prototype.getLiveStatus = function (trainNumber, date) {
        var URL = "https://api.railwayapi.com/v2/live/train/" + trainNumber + "/date/" + date + "/apikey/" + __WEBPACK_IMPORTED_MODULE_4__utils_api__["a" /* API */];
        console.log(URL);
        return this.http.get(URL)
            .catch(this.handleError);
    };
    // get pnr status
    LiveStatusService.prototype.getPNRStatus = function (PNRNumber) {
        var URL = "https://api.railwayapi.com/v2/pnr-status/pnr/" + PNRNumber + "/apikey/" + __WEBPACK_IMPORTED_MODULE_4__utils_api__["a" /* API */];
        return this.http.get(URL)
            .catch(this.handleError);
    };
    // get route map of train
    LiveStatusService.prototype.getTrainRoute = function (trainNumber) {
        var URL = "https://api.railwayapi.com/v2/route/train/" + trainNumber + "/apikey/" + __WEBPACK_IMPORTED_MODULE_4__utils_api__["a" /* API */] + "/";
        return this.http.get(URL)
            .catch(this.handleError);
    };
    LiveStatusService.prototype.getTrainNameByNumber = function (trainNumber) {
        var URL = "https://api.railwayapi.com/v2/name-number/train/" + trainNumber + "/apikey/" + __WEBPACK_IMPORTED_MODULE_4__utils_api__["a" /* API */];
        return this.http.get(URL)
            .catch(this.handleError);
    };
    LiveStatusService.prototype.seatAvailable = function (trainNum, source, destination, date, coachClass, quota) {
        var URL = "https://api.railwayapi.com/v2/check-seat/train/" + trainNum + "/source/" + source + "/dest/" + destination + "/date/" + date + "/pref/" + coachClass + "/quota/" + quota + "/apikey/" + __WEBPACK_IMPORTED_MODULE_4__utils_api__["a" /* API */];
        console.log(URL);
        return this.http.get(URL)
            .catch(this.handleError);
    };
    LiveStatusService.prototype.handleError = function (err) {
        console.error(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    LiveStatusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LiveStatusService);
    return LiveStatusService;
}());



/***/ }),

/***/ "./src/app/train-fare/train-fare.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/train-fare/train-fare.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  train-fare works!\n</p>\n"

/***/ }),

/***/ "./src/app/train-fare/train-fare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainFareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainFareComponent = /** @class */ (function () {
    function TrainFareComponent() {
    }
    TrainFareComponent.prototype.ngOnInit = function () {
    };
    TrainFareComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-train-fare',
            template: __webpack_require__("./src/app/train-fare/train-fare.component.html"),
            styles: [__webpack_require__("./src/app/train-fare/train-fare.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainFareComponent);
    return TrainFareComponent;
}());



/***/ }),

/***/ "./src/app/train-route/train-route.component.css":
/***/ (function(module, exports) {

module.exports = ".content{\r\n    margin-top: 150px;\r\n}\r\n\r\n.input-form{    \r\n    padding: 5%;\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0px 0px 30px grey;\r\n            box-shadow: 0px 0px 30px grey;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n\r\n.input-form:hover{\r\n    -webkit-box-shadow: 0px 0px 10px grey;\r\n            box-shadow: 0px 0px 10px grey;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n}\r\n\r\n.input-form h2{\r\n    text-align: center;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.show-result{\r\n    margin-top: 100px;\r\n}\r\n\r\n.show-result h3{\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.show-result table{\r\n    border:1px solid;\r\n    text-align: center;\r\n}\r\n\r\n.show-result table thead{\r\n    background: cadetblue;\r\n    color: white;        \r\n}\r\n\r\n.show-result table thead th{\r\n    text-align: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/train-route/train-route.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <!-- take input from user -->\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-sm-offset-3\">\n      <div class=\"input-form\">\n        <h2>Train Route</h2>\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\">Enter Train Number</label>\n          <input type=\"number\" class=\"form-control\" placeholder=\"Enter Train Number\" title=\"Train number\" #TrainNumber value=\"12302\">\n        </div>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"getRoute(TrainNumber.value)\">Get Route</button>\n      </div>\n    </div>\n  </div>\n  <!-- show result -->\n  <div class=\"show-result\" *ngIf=\"trainRoute.response_code == 200\">\n    <h3>You Queried for Train: {{trainRoute.train.name}} ({{trainRoute.train.number}})</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-12\">        \n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>S. No.</th>\n              <th>Station Name (Code)</th>\n              <th>Schedule Arrival</th>\n              <th>Schedule Departure</th>              \n              <th>Halt</th>\n              <th>Day</th>              \n              <th>Distance</th>              \n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let route of trainRoute.route\">\n              <td>{{route.no}}</td>\n              <td>{{route.station.name}} ({{route.station.code}})</td>\n              <td>{{route.scharr}}</td>\n              <td>{{route.schdep}}</td>\n              <td>\n                <span *ngIf=\"route.halt == '-1'; else not_applicable\">\n                    NA\n                </span>\n                <ng-template #not_applicable>\n                    {{route.halt}} mins\n                </ng-template>\n              </td>\n              <td>{{route.day}}</td>\n              <td>{{route.distance}}</td>              \n            </tr>\n          </tbody>\n        </table>        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/train-route/train-route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainRouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_live_status_service__ = __webpack_require__("./src/app/services/live-status.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrainRouteComponent = /** @class */ (function () {
    function TrainRouteComponent(api) {
        this.api = api;
        this.trainRoute = "";
    }
    TrainRouteComponent.prototype.getRoute = function (trainNumber) {
        var _this = this;
        this.api.getTrainRoute(trainNumber)
            .subscribe(function (response) {
            _this.trainRoute = response;
            console.log("hi ", _this.trainRoute);
        });
    };
    TrainRouteComponent.prototype.ngOnInit = function () {
    };
    TrainRouteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-train-route',
            template: __webpack_require__("./src/app/train-route/train-route.component.html"),
            styles: [__webpack_require__("./src/app/train-route/train-route.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_live_status_service__["a" /* LiveStatusService */]])
    ], TrainRouteComponent);
    return TrainRouteComponent;
}());



/***/ }),

/***/ "./src/app/trains-between-stations/trains-between-stations.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trains-between-stations/trains-between-stations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  trains-between-stations works!\n</p>\n"

/***/ }),

/***/ "./src/app/trains-between-stations/trains-between-stations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainsBetweenStationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainsBetweenStationsComponent = /** @class */ (function () {
    function TrainsBetweenStationsComponent() {
    }
    TrainsBetweenStationsComponent.prototype.ngOnInit = function () {
    };
    TrainsBetweenStationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trains-between-stations',
            template: __webpack_require__("./src/app/trains-between-stations/trains-between-stations.component.html"),
            styles: [__webpack_require__("./src/app/trains-between-stations/trains-between-stations.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainsBetweenStationsComponent);
    return TrainsBetweenStationsComponent;
}());



/***/ }),

/***/ "./src/app/utils/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
//new api key - d9pk6io6im 5pf163qdia
var API = "ilitomf8j8";


/***/ }),

/***/ "./src/app/utils/changeDateFormat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = changeFormat;
function changeFormat(date) {
    var dates = date.split('-');
    var formatedDate = dates[2] + "-" + dates[1] + "-" + dates[0];
    return formatedDate;
}


/***/ }),

/***/ "./src/app/utils/pnr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = {
    "debit": 3,
    "to_station": {
        "name": "ANAND VIHAR TERMINAL",
        "code": "ANVT",
        "lat": 28.6118176,
        "lng": 77.2888291
    },
    "doj": "28-05-2018",
    "response_code": 200,
    "total_passengers": 1,
    "reservation_upto": {
        "name": "ANAND VIHAR TERMINAL",
        "code": "ANVT",
        "lat": 28.6118176,
        "lng": 77.2888291
    },
    "train": {
        "name": "RDP-KIR EXPRESS",
        "days": [
            {
                "code": "MON",
                "runs": "Y"
            },
            {
                "code": "TUE",
                "runs": "Y"
            },
            {
                "code": "WED",
                "runs": "Y"
            },
            {
                "code": "THU",
                "runs": "Y"
            },
            {
                "code": "FRI",
                "runs": "Y"
            },
            {
                "code": "SAT",
                "runs": "Y"
            },
            {
                "code": "SUN",
                "runs": "Y"
            }
        ],
        "number": "22487",
        "classes": [
            {
                "name": "FIRST CLASS",
                "code": "FC",
                "available": "N"
            },
            {
                "name": "3rd AC ECONOMY",
                "code": "3E",
                "available": "N"
            },
            {
                "name": "AC CHAIR CAR",
                "code": "CC",
                "available": "N"
            },
            {
                "name": "SECOND SEATING",
                "code": "2S",
                "available": "N"
            },
            {
                "name": "THIRD AC",
                "code": "3A",
                "available": "Y"
            },
            {
                "name": "FIRST AC",
                "code": "1A",
                "available": "N"
            },
            {
                "name": "SECOND AC",
                "code": "2A",
                "available": "N"
            },
            {
                "name": "SLEEPER CLASS",
                "code": "SL",
                "available": "Y"
            }
        ]
    },
    "journey_class": {
        "name": null,
        "code": "3A"
    },
    "from_station": {
        "name": "NAUGACHIA",
        "code": "NNA",
        "lat": 25.3857731,
        "lng": 87.0997616
    },
    "passengers": [
        {
            "current_status": "CNF/B3/32/GN",
            "no": 1,
            "booking_status": "CNF/B3/32/GN"
        }
    ],
    "boarding_point": {
        "name": "NAUGACHIA",
        "code": "NNA",
        "lat": 25.3857731,
        "lng": 87.0997616
    },
    "pnr": "6314624833",
    "chart_prepared": true
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map