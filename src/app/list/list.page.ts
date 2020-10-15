import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public list: string;
  public title: string;
  public slogan: string;
  public image: string;
  public elements: {};

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.list = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = this.activatedRoute.snapshot.data[this.list]['title'];
    this.slogan = this.activatedRoute.snapshot.data[this.list]['slogan'];
    this.elements = this.activatedRoute.snapshot.data[this.list]['elements'];
  }

}
