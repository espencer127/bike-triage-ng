import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from '../../app';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  areas = App.areas;


}
