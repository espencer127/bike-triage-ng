import { Component } from '@angular/core';
import { App } from '../../app';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  areas = App.areas;
}
