import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
})
export class PageDetailComponent implements OnInit {
  @Input() element: {};


  @HostListener("window:resize") orientationState() {
    if (screen.orientation.type == "portrait-primary") {
      return "12"
    } else if (screen.orientation.type == "landscape-primary") {
      return "6"
    }
  }

  constructor(public router: Router) { }

  ngOnInit() { }

  addBr(str) {
    return str.replace("<br>", '\n');
  }

  // public detailspage = [
  //   {
  //     title: 'Accueil',
  //     picture: '/assets/icon/ancre.png',
  //     details: "Vente en direct de notre bateau Produits selon la saison, Livraison sur Paris",
  //     url: '/details/Accueil'
  //   },
  //   {
  //     title: 'Produits',
  //     picture: '/assets/icon/poisson.png',
  //     details: 'Qu\'il est chaud le soleil <br> NEWLINE',
  //     url: '/details/Produits'
  //   },
  //   {
  //     title: 'Le bateau de Thibault',
  //     picture: '/assets/icon/TIG.png',
  //     details: 'Qu\'il est chaud le soleil <br> NEWLINE',
  //     url: '/details/contact'
  //   },
  //   {
  //     title: 'Bateau',
  //     picture: '/assets/icon/ancre.png',
  //     details: 'Toutes les eaux mênent à Thibault.',
  //     url: '/details/boats'
  //   },
  //   {
  //     title: 'Recettes',
  //     picture: '/assets/icon/recette.png',
  //     details: 'Toutes les eaux mênent à Thibault.',
  //     url: '/details/recipes'
  //   },
  //   {
  //     title: 'Restaurants',
  //     picture: '/assets/icon/restaurant.png',
  //     details: 'Toutes les eaux mênent à Thibault.',
  //     url: '/details/restaurants'
  //   },
  //   {
  //     title: 'De la Brise',
  //     picture: '/assets/icon/deLaBrise.png',
  //     details: 'Toutes les eaux mênent à Thibault.',
  //     url: '/boats/delabrise'
  //   },
  //   {
  //     title: 'Saphir',
  //     picture: '/assets/icon/saphir.png',
  //     details: 'Toutes les eaux mênent à Thibault.',
  //     url: '/boats/saphir'
  //   },
  //   {
  //     title: 'Gast Micher',
  //     picture: '/assets/icon/gastMicher.png',
  //     details: 'Toutes les eaux mênent à Thibault.',
  //     url: '/boats/gastmicher'
  //   },
  //   {
  //     title: 'Aquilon',
  //     picture: '/assets/icon/aquilon.png',
  //     details: 'Toutes les eaux mênent à Thibault.',
  //     url: '/boats/aquilon'
  //   }
  // ];

}
