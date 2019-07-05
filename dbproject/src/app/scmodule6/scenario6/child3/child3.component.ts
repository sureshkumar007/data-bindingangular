import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  @Output()
  public child1 = new EventEmitter();
  public myid;
  public user;
  login(value) {
    this.child1.emit(value);
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
