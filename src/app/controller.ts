import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {weatherkey} from './vars.json';

@Injectable({providedIn: 'root'})
export class ControllerService {
    constructor(private httpClient: HttpClient) { }
    weatherKey = weatherkey;
    
    getWeather(): Observable<any> {
        return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?lat=40.44&lon=-80.01&appid=${this.weatherKey}&units=imperial`);
    }
}