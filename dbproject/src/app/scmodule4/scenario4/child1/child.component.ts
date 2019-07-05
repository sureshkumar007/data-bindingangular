import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output()
  public booth = new EventEmitter();
 passdata() {
 this.booth.emit('this is from Child componenet message');
 }
  constructor() { }

  ngOnInit() {
  }

}
