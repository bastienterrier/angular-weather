import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface City {
  name: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-weather-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
})
export class WeatherCityListComponent {
  @Input() public cities: City[] = [];

  @Output() public readonly changed = new EventEmitter<string>();
}
