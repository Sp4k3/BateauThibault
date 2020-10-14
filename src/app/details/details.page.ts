import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public details: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.details = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
