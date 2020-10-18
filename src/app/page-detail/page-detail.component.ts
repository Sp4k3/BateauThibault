import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
})
export class PageDetailComponent implements OnInit {
  @Input() element: {}

  constructor() { }

  ngOnInit() { }

  @HostListener('window:resize') orientationState() {
    this.element=this.element
    if (screen.orientation.type == 'portrait-primary') {
      return '12'
    } else if (screen.orientation.type == 'landscape-primary') {
      return '6'
    }
  }

  addBr(str) {
    return str.replace('<br>', '\n')
  }
}
