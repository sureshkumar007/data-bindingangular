import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
  @Output() public booth = new EventEmitter();
  parentMethod(value) {
    this.booth.emit(value);
  }


  constructor() { }

  ngOnInit() {
  }

}
