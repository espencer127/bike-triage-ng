import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvVarService } from './env-var-service';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
    weatherKey: string = "";
    apiUrl: string = "";

    constructor(private httpClient: HttpClient,
        private envVarService: EnvVarService) { 
        this.envVarService = envVarService;
        this.weatherKey = this.envVarService.getWeatherKey();
        this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=40.44&lon=-80.01&appid=${this.weatherKey}&units=imperial`;
    }

    getWeather(): Observable<any> {
        return this.httpClient.get(this.apiUrl);
    }
  
}
