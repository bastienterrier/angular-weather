import { Injectable } from '@angular/core';
import axios from 'axios';
import { WeatherDataSerie } from 'src/app/services/weather.interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  getCityTodayWeather(long: number, lat: number): Promise<WeatherDataSerie> {
    return axios
      .get(
        `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`
      )
      .then(({ data }) => data.dataseries)
      .then((dataseries) => dataseries[0]);
  }
}
