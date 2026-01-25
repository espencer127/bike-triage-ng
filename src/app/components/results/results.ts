import { Component } from '@angular/core';
import { App } from '../../app';
import { SharedDataService } from '../../sharedDataService';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  areas = App.areas;
  
  constructor(public sharedDataService: SharedDataService) {
  }


}
