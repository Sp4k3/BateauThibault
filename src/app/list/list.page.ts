import { JsonService } from './../services/json.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as localforage from 'localforage';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public data: {}
  public list: string
  public title: string
  public productCategories: {}

  ngOnInit() {}

  constructor(private activatedRoute: ActivatedRoute, public JsonService: JsonService) {
    this.list = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.list !== 'cart') {
      this.getJSON(this.list)
    }
    this.getInfos(this.list)
  }

  getJSON(id: string) {
    this.JsonService
      .getJSON(id)
      .subscribe(
        (response) => {
          // console.log(response)
          this.data = response
        },
        (error) => {
          console.log('error : ' + error.message)
        }
      )
  }

  async getProductCategories() {
    this.JsonService
      .getJSON('productCategories')
      .subscribe(
        (response) => {
          // console.log(response)
          this.productCategories = response
        },
        (error) => {
          console.log('error : ' + error.message)
        }
      )
  }

  async getInfos(id: string) {
    if (id === 'home') {
      this.title = 'Le Bateau de Thibault'
    } else if (id === 'cart') {
      this.title = 'Votre panier'
    } else if (id === 'products') {
      this.title = 'Choisissez vos produits'
      this.getProductCategories()
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
