import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  public childtwo;
  parentmethod(value) {
    this.childtwo = value;
   }
  constructor() { }

  ngOnInit() {
  }
}