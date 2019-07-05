import { Component, OnInit } from '@angular/core';
import { BridgeserviceService } from '../../../bridgeservice.service';
@Component({
  selector: 'app-chil5',
  templateUrl: './chil5.component.html',
  styleUrls: ['./chil5.component.css']
})
export class Chil5Component implements OnInit {
  public gotvalue: string;

  constructor(private bridgeservice: BridgeserviceService) { }
  ngOnInit() {
  }
 valuepush(value) {
    this.bridgeservice.getMethod(value);
  }
 }
