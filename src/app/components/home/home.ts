import { Component, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { App } from '../../app';
import { SharedDataService } from '../../services/shared-data-service';

@Component({
  selector: 'app-home',
  imports: [forwardRef(() => FormsModule)],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private sharedDataService: SharedDataService){};

  onCheckboxChange($event: Event) {
    var checkedItems = 0;
    for (let area of this.areas) {
      for (let issue of area.possibleIssues) {
        if (issue.checked) {
          checkedItems++;
        }
      }
    }
    if (checkedItems >0) {
      this.sharedDataService.setValue(true);
    } else {
      this.sharedDataService.setValue(false);
    }
  }

  areas = App.areas;

}
