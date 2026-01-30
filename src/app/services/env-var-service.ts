import { Injectable } from '@angular/core';
import { weatherkey } from '../vars.json';

@Injectable({
  providedIn: 'root',
})
export class EnvVarService {
  private weatherKey: string = weatherkey;

  public getWeatherKey() {
    return this.weatherKey;
  }
  
}
