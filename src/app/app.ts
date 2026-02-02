import { Component, forwardRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, forwardRef(() => Header), forwardRef(() => Sidebar)],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public static areas = [
    {
      title: "Front Wheel", 
      possibleIssues: [
        { id: 1, name: "front hub loose", checked: false},
        { id: 2, name: "front wheel untrue", checked: false},
        { id: 3, name: "front wheel spoke missing", checked: false}
      ]
    },
    {
      title: "Headset",
      possibleIssues: [
        {id: 1, name: "headset loose", checked: false}
      ]
    },
    {
      title: "Handlebars",
      possibleIssues: [
        {id: 1, name: "handlebars loose", checked: false},
        {id: 2, name: "handlebars crooked", checked: false}
      ]
    },
    {
      title: "Bottom Bracket",
      possibleIssues: [
        {id: 1, name: "Bottom bracket loose", checked: false}
      ]
    },
    {
      title: "Crankset",
      possibleIssues: [
        {id: 1, name: "crankset damaged", checked: false}
      ]
    },
    {
      title: "Front Derailleur",
      possibleIssues: [
        {id: 1, name: "front derailleur damaged/frozen", checked: false},
        {id: 2, name: "front derailleur misadjusted", checked: false}
      ]
    },
    {
      title: "Rear Wheel",
      possibleIssues: [
        {id: 1, name: "rear hub loose", checked: false},
        {id: 2, name: "rear wheel untrue", checked: false},
        {id: 3, name: "rear wheel spoke missing", checked: false}
      ]
    },
    {
      title: "Rear Derailleur",
      possibleIssues: [
        {id: 1, name: "rear derailleur damaged/frozen", checked: false},
        {id: 2, name: "rear derailleur misadjusted", checked: false}
      ]
    },
    {
      title: "Chain",
      possibleIssues: [
        {id: 1, name: "chain rusted", checked: false},
        {id: 2, name: "chain missing", checked: false},
        {id: 3, name: "chain twisted/damaged", checked: false}
      ]
    },
    {
      title: "Cassette",
      possibleIssues: [
        {id: 1, name: "cassette rusted", checked: false},
        {id: 2, name: "cassette damaged", checked: false}
      ]
    },
    {
      title: "Seatpost/Saddle",
      possibleIssues: [
        {id: 1, name: "seatpost loose", checked: false},
        {id: 2, name: "seatpost stuck", checked: false},
        {id: 3, name: "saddle loose", checked: false}
      ]
    }
  ];
}
