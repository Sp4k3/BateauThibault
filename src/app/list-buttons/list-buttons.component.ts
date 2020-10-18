import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnInit {
  @Input() list: {}
  @Input() data: {}
  @Input() products: {}

  constructor() { }

  ngOnInit() { }

  @HostListener('window:resize') orientationState() {
    this.list = this.list
    this.data = this.data
    
    if (screen.orientation.type == 'portrait-primary') {
      return '12'
    } else if (screen.orientation.type == 'landscape-primary') {
      return '6'
    }
  }
}
