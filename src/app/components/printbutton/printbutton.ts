import { Component } from '@angular/core';
import { NgxPrintDirective } from 'ngx-print';

@Component({
  selector: 'app-printbutton',
  imports: [NgxPrintDirective],
  templateUrl: './printbutton.html',
  styleUrl: './printbutton.css',
})
export class Printbutton {
onClick() {
throw new Error('Method not implemented.');
}

}
