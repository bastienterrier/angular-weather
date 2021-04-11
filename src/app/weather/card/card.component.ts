import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './card.component.html',
})
export class WeatherCardComponent {
  @Input() min: string;
  @Input() max: string;
}
