import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  menuOpen:boolean = false;
 
  showHideMenu(){
    this.menuOpen = !this.menuOpen;
    console.log(this.menuOpen);
  }
}
