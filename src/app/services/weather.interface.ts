export interface WeatherDataSerie {
  date: number;
  temp2m: { max: number; min: number };
  weather: string;
  wind10m_max: number;
}
