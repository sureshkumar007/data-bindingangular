import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Parent3Component } from './scenario6/parent3/parent3.component';
import { Child4Component } from './scenario6/child4/child4.component';
import { Child3Component } from './scenario6/child3/child3.component';

@NgModule({
  declarations: [
    Parent3Component,
    Child4Component ,
    Child3Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Parent3Component
  ]
})
export class Scmodule6Module { }
