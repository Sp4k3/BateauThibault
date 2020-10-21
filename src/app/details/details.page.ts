import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
  public details: string
  public element: any

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.details = this.activatedRoute.snapshot.paramMap.get('id')
    this.element = this.router.getCurrentNavigation().extras.state
  }

}
