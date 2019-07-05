import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childdata: string;
  parentMethod(data) {
  this.childdata = data;
  }
  constructor() { }

  ngOnInit() {
  }

}
