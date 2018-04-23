import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
  console.log(this.testtt);

  }
test;
public sat="sathya";

@ViewChildren('testtt') testtt :ElementRef;

  constructor() {  }

  ngOnInit() {
  
  }
   whoAmI()  {
    return '👶 I am a child!!';
  }

}
