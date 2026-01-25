import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSignal: boolean = false;

  public getValue() {
    return this.dataSignal;
  }

  public setValue(input: boolean) {
    this.dataSignal = input;
  }

}
