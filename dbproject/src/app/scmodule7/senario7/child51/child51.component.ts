import { Component, OnInit } from '@angular/core';
import { BridgeserviceService } from 'src/app/bridgeservice.service';
@Component({
  selector: 'app-child51',
  templateUrl: './child51.component.html',
  styleUrls: ['./child51.component.css']
})
export class Child51Component implements OnInit {
public messageFromSubject = '';
  constructor(private second: BridgeserviceService) { }

  ngOnInit() {
    this.second.sendMessage().subscribe(
      (messages) => {
        this.messageFromSubject = messages;
      }
    );
  }

}
