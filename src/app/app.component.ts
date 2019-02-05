import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googlemaps';
  lat: number = -50.708020;
  lng: number = -58.381176;
  zoom:number=16;
}