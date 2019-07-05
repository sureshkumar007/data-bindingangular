import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './scenario4/parent1/parent.component';
import { ChildComponent } from './scenario4/child1/child.component';

@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponent
  ]
})
export class Scmodule4Module { }
