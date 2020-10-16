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

  ngOnInit() {
    // this.title = this.activatedRoute.snapshot.data[this.list]['title'];
  }

  constructor(private activatedRoute: ActivatedRoute, public JsonService: JsonService) {
    this.list = this.activatedRoute.snapshot.paramMap.get('id');
    this.getJSON(this.list);
    this.getInfos(this.list);
  }

  getJSON(id: string) {
    this.JsonService
      .getJSON(id)
      .subscribe(
        (response) => {
          this.data = response;
          // console.log(this.data);
        },
        (error) => {
          console.log('error : ' + error.message);
        }
      )
  }

  getInfos(id: string) {
    if (id === 'home') {
      this.title = "Le Bateau de Thibault";
      this.slogan = "Vente en direct de notre bateau.Produits selon la saison, livraisons sur Paris.";
    } else if (id === 'products') {
      this.title = 'Choisissez vos produits';
      this.slogan = '';
    } else if (id === 'boats') {
      this.title = 'Bateaux Partenaires';
      this.slogan = 'Toutes les eaux mènent à Thibault.';
    } else if (id === 'restaurants') {
      this.title = 'Restaurants partenaires';
      this.slogan = 'Tous les restaurants partenaires avec le bateau de Thibault.';
    } else if (id === 'recipes') {
      this.title = 'Nos recettes'
      this.slogan = 'Toutes les recettes du bateau de Thibault.';
    }
  }


}
