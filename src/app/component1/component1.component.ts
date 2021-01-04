import { Component, OnInit } from '@angular/core';
import {BiotreeLink} from '../models/biotree-link';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  biotreeLinks: BiotreeLink[] = [];

  constructor() { }

  ngOnInit() {
  }

}
