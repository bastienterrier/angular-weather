import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCityListComponent } from './city-list.component';

describe('WeatherCityListComponent', () => {
  let component: WeatherCityListComponent;
  let fixture: ComponentFixture<WeatherCityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherCityListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
