import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './scenario3/parent/parent.component';
import { ChildComponent } from './scenario3/child/child.component';

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
export class Scmodule3Module { }
