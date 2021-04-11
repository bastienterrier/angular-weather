import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather/card/card.component';
import { WeatherCityListComponent } from './weather/city-list/city-list.component';

@NgModule({
  declarations: [AppComponent, WeatherCardComponent, WeatherCityListComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
