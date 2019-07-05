import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario1',
  template:
  `<input #myInput type = "text">
    <button (click)="logMessage(myInput.value)" >Log</button>
  `,
  styles: []
})
export class Scenario1Component implements OnInit {

  constructor() { }

  logMessage(value) {
    console.log(value);
    }

  ngOnInit() {
  }

}
