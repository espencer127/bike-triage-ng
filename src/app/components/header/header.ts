import { Component, OnInit, signal } from '@angular/core';
import { ControllerService } from '../../services/controller-service';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  constructor(private controllerService: ControllerService) {
    this.controllerService = controllerService;
  }

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
