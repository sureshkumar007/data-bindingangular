import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Senario7Component } from './senario7/senario7.component';
import { Chil5Component } from './senario7/chil5/chil5.component';
import { Child51Component } from './senario7/child51/child51.component';
import { BridgeserviceService } from 'src/app/bridgeservice.service';

@NgModule({
  declarations: [
    Senario7Component ,
    Chil5Component ,
    Child51Component

  ],
  imports: [
    CommonModule
  ],
  exports: [
    Senario7Component
  ],
  providers: [
   BridgeserviceService
]

})
export class Scmodule7Module { }
