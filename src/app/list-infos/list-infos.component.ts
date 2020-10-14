import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-infos',
  templateUrl: './list-infos.component.html',
  styleUrls: ['./list-infos.component.scss'],
})
export class ListInfosComponent implements OnInit {
  @Input() slogan: string;

  constructor() { }

  ngOnInit() {}

}
