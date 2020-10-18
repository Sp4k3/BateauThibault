import { JsonService } from './../services/json.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public data: {}
  public list: string
  public title: string
  public products: {}

  ngOnInit() {}

  constructor(private activatedRoute: ActivatedRoute, public JsonService: JsonService) {
    this.list = this.activatedRoute.snapshot.paramMap.get('id')
    this.getJSON(this.list)
    this.getInfos(this.list)
  }

  getJSON(id: string) {
    this.JsonService
      .getJSON(id)
      .subscribe(
        (response) => {
          this.data = response
          console.log(this.data)
        },
        (error) => {
          console.log('error : ' + error.message)
        }
      )
  }

  getProducts() {
    this.JsonService
      .getJSON('products')
      .subscribe(
        (response) => {
          this.products = response
        },
        (error) => {
          console.log('error : ' + error.message)
        }
      )
  }

  getInfos(id: string) {
    if (id === 'home') {
      this.title = 'Le Bateau de Thibault'
    } else if (id === 'productCategories') {
      this.title = 'Choisissez vos produits'
      this.getProducts()
    } else if (id === 'boats') {
      this.title = 'Bateaux Partenaires'
    } else if (id === 'restaurants') {
      this.title = 'Restaurants partenaires'
    } else if (id === 'recipes') {
      this.title = 'Nos recettes'
    } else if (id === 'contact') {
      this.title = 'Contact'
    }
  }
}
