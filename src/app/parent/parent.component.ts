import { Component, OnInit, ElementRef, QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';
import { Child1Component } from '../child1/child1.component';
import { AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit,AfterViewChecked {

  @ViewChildren(Child2Component) jokeViewChildren: QueryList<Child2Component>;

  ngAfterViewChecked(): void {
   console.log(this.child1Ref.test);
   console.log`$("testtt"+this.child2Ref.testtt)`;
   //console.log(this.child1);
  // console.log(this.child2Ref.whoAmI()); 
   let jokes: Child2Component[] = this.jokeViewChildren.toArray(); 
   console.log("Jokes"+jokes);
  }
  ngAfterViewInit(): void {
    console.log(this.child1Ref.test);
   console.log(this.child2Ref.testtt);
   console.log`$(this.child1)`;
   console.log`$(this.child2Ref.whoAmI())`;
   console.log(this.testtt);
   let jokes: Child2Component[] = this.jokeViewChildren.toArray(); 
    console.log("Jokes"+jokes);
  }
  @ViewChildren('testtt') testtt :ElementRef;
  constructor() { }
  @ViewChildren('Child2Component')
  private child2Ref :Child2Component;
  
  @ViewChild('child1') child1 :Child1Component;

  @ViewChildren('Child1Component')
  private child1Ref :Child1Component;

  ngOnInit() {
  }

}
