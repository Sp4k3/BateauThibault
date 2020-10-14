import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss'],
})
export class ListButtonsComponent implements OnInit {
  @Input() labels: {}

  constructor() {}

  ngOnInit() {}

}
