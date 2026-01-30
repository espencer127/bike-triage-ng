import { Component } from '@angular/core';
import { App } from '../../app';
import { SharedDataService } from '../../services/shared-data-service';
import { Printbutton } from "../printbutton/printbutton";

@Component({
  selector: 'app-results',
  imports: [Printbutton],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  areas = App.areas;
  
  constructor(public sharedDataService: SharedDataService) {
  }


}
