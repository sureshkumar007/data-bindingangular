import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-scenario2',
  template:
  ` <input type="text" [(ngModel)]="message"/>
  {{message}}`
  ,
  styles: []
})
export class Scenario2Component implements OnInit {
  public message = '';

  constructor() { }

  ngOnInit() {
  }

}
