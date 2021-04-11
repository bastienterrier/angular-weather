import { Component, OnInit } from '@angular/core';
import { WeatherDataSerie } from 'src/app/services/weather.interface';
import { WeatherService } from 'src/app/services/weather.service';
import { City } from 'src/app/weather/city-list/city-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'weather-app';
  public latitude: number;
  public longitude: number;
  public todayWeather: WeatherDataSerie = undefined;
  public loading = false;

  public readonly cities: City[] = [
    {
      name: 'Paris',
      latitude: 48.8566,
      longitude: 2.3522,
    },
    {
      name: 'Lille',
      latitude: 50.6292,
      longitude: 3.0573,
    },
  ];

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.setCoordinateFromCity(this.cities[0]);
  }

  private setCoordinateFromCity(city: City): void {
    const { latitude, longitude } = city;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public onSelectChange(cityName: string): void {
    const city = this.cities.find(({ name }) => name === cityName);

    this.setCoordinateFromCity(city);
  }

  public fetchWeather(): void {
    this.loading = true;

    this.weatherService
      .getCityTodayWeather(this.longitude, this.latitude)
      .then((res) => (this.todayWeather = res))
      .finally(() => (this.loading = false));
  }
}
