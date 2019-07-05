import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scmodule1Module } from './scmodule1/scmodule1.module';
import { Scmodule2Module  } from './scmodule2/scmodule2.module';
import { Scmodule3Module } from './scmodule3/scmodule3.module';
import { Scmodule4Module } from './scmodule4/scmodule4.module';
import {Scmodule5Module } from './scmodule5/scmodule5.module';
import { Scmodule6Module } from './scmodule6/scmodule6.module';
import { Scmodule7Module } from './scmodule7/scmodule7.module';


@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Scmodule1Module,
    Scmodule2Module,
    Scmodule3Module,
    Scmodule4Module,
    Scmodule5Module,
    Scmodule6Module,
    Scmodule7Module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
