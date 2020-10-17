import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss'],
})
export class ListHomeComponent implements OnInit {
  @Input() data: {}
  @Input() slogan: {}

  constructor() { }

  ngOnInit() {}

}
