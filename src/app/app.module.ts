import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
