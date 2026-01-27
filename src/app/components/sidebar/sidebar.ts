import { Component } from '@angular/core';
import { App } from '../../app';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
  constructor(private viewportScroller: ViewportScroller) {}

  scroll(el: string) {
    this.viewportScroller.scrollToAnchor(el);
  }

  areas = App.areas;
}
