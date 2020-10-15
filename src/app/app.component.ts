import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '',
      icon: '/assets/icon/homeLogo.png'
    },
    {
      title: 'Produits',
      url: '/list/products',
      icon: '/assets/icon/poisson.png'
    },
    {
      title: 'Bateaux',
      url: '/list/boats',
      icon: '/assets/icon/ancre.png'
    },
    {
      title: 'Restaurants',
      url: '/list/restaurants',
      icon: '/assets/icon/restaurant.png'
    },
    {
      title: 'Recettes',
      url: '/list/recipes',
      icon: '/assets/icon/recette.png'
    },
    {
      title: 'Contact',
      url: '/details/contact',
      icon: '/assets/icon/tourteau.png'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('list/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
