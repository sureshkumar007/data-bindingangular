import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent2',
  templateUrl: './grandparent2.component.html',
  styleUrls: ['./grandparent2.component.css']
})
export class Grandparent2Component implements OnInit {
  public locvar = '';
  fun(text) {
    this.locvar = text;
  }
  constructor() { }

  ngOnInit() {
  }

}
