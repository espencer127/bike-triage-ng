import { Component, signal } from '@angular/core';
import { ControllerService } from '../../controller';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(private controllerService: ControllerService) {}

  ngOnInit() {
    this.controllerService.getWeather().subscribe({
      next: (data) => {
        this.weather.set(data.main.temp);
      },
      error: (error) => {
        this.error = error;
        console.error('There was an error: ', error);
      }
    })
  }

  protected readonly title = signal('bike-triage-ng');

  weather = signal('hi');
  error: string = "";

}
