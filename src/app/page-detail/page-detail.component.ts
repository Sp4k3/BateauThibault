import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.scss'],
})
export class PageDetailComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  addBr(str){
    return str.replace("<br>",'\n');
  }
  
  public detailspage = [
    {
      title: 'Accueil',
      picture: '/assets/icon/ancre.png',
      details: "Vente en direct de notre bateau Produits selon la saison, Livraison sur Paris",
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/Accueil'
    },
    {
      title: 'Produits',
      picture: '/assets/icon/poisson.png',
      details: 'Qu\'il est chaud le soleil <br> NEWLINE',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/Produits'
    },
    {
      title: 'Le bateau de Thibault',
      picture: '/assets/icon/TIG.png',
      details: 'Qu\'il est chaud le soleil <br> NEWLINE',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/contact'
    },
    {
      title: 'Bateau',
      picture: '/assets/icon/ancre.png',
      details: 'Toutes les eaux mênent à Thibault.',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/boats'
    },
    {
      title: 'Recettes',
      picture: '/assets/icon/recette.png',
      details: 'Toutes les eaux mênent à Thibault.',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/recipes'
    },
    {
      title: 'Restaurants',
      picture: '/assets/icon/restaurant.png',
      details: 'Toutes les eaux mênent à Thibault.',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/restaurants'
    },
    {
      title: 'De la Brise',
      picture: '/assets/icon/deLaBrise.png',
      details: 'Toutes les eaux mênent à Thibault.',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/delabrise'
    },
    {
      title: 'Saphir',
      picture: '/assets/icon/saphir.png',
      details: 'Toutes les eaux mênent à Thibault.',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/saphir'
    },
    {
      title: 'Gast Micher',
      picture: '/assets/icon/gastMicher.png',
      details: 'Toutes les eaux mênent à Thibault.',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/gastmicher'
    },
    {
      title: 'Aquilon',
      picture: '/assets/icon/aquilon.png',
      details: 'Toutes les eaux mênent à Thibault.',
      tel: '06.63.99.99.78',
      mail: 'lebateaudethibault@gmail.com',
      facebook: 'www.facebook.com/lebateaudethibault',
      url: '/details/aquilon'
    }
  ];

}
