import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output()
  names: EventEmitter<string> = new EventEmitter<string>();
  child() {
this.names.emit('class 3 steps');
  }
  constructor() { }

  ngOnInit() {
  }

}
