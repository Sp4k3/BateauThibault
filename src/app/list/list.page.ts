import { JsonService } from './../services/json.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public data: {};
  public list: string;
  public title: string;
  public slogan: string;
  public image: string;
  public elements: {};

  // constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.list = this.activatedRoute.snapshot.paramMap.get('id');
    this.getJSON()
    // this.title = this.activatedRoute.snapshot.data[this.list]['title'];
    // this.slogan = this.activatedRoute.snapshot.data[this.list]['slogan'];
    // this.elements = this.activatedRoute.snapshot.data[this.list]['elements'];
  }

  constructor(private activatedRoute: ActivatedRoute, public JsonService:JsonService) {
    // this.getJSON()
  }

  getJSON() {
    this.JsonService
      .getJSON(this.list)
      .subscribe(
        (response) => {
          console.log(response)
          this.data = response
          this.title = this.data['title']
          this.slogan = this.data['slogan']
          this.elements = this.data['elements']
        },
        (error) => {
          console.log('error : ' + error)
        }
      )
  }

}
