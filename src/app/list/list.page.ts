import { JsonService } from './../services/json.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  public data: any[]
  public list: string
  public title: string
  public productCategories: any[]
  public shipPoints: any[]

  constructor(private activatedRoute: ActivatedRoute, public JsonService: JsonService) { }

  ngOnInit() {
    this.list = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.list !== 'cart') {
      this.getJSON(this.list)
    } else {
      this.getShipPoints()
    }
    this.getInfos(this.list)
  }

  getJSON(id: string) {
    this.JsonService
      .getJSON(id)
      .subscribe(
        (response) => {
          // console.log(response)
          if (this.list === 'home') {
            this.data = response.filter(element =>  element['name'] === 'Produits' || 
                                                    element['name'] === 'Panier' || 
                                                    element['name'] === 'Contact')
          } else {
            this.data = response
          }
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

  async getShipPoints() {
    this.JsonService
      .getJSON('shipPoints')
      .subscribe(
        (response) => {
          // console.log(response)
          this.shipPoints = response
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
