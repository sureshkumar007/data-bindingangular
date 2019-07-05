import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grandparent2Component } from './scenario5/grandparent2/grandparent2.component';
import { Child2Component } from './scenario5/child2/child2.component';
import { Parent2Component } from './scenario5/parent2/parent2.component';
@NgModule({
  declarations: [
    Grandparent2Component ,
    Child2Component ,
    Parent2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Grandparent2Component
  ]
})
export class Scmodule5Module { }
