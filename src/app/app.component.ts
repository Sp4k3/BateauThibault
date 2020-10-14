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
      title: 'Produits',
      url: '/folder/Produits',
      icon: '/assets/icon/poisson.png'
    },
    {
      title: 'Bateaux',
      url: '/folder/Bateaux',
      icon: '/assets/icon/ancre.png'
    },
    {
      title: 'Restaurants',
      url: '/folder/Restaurants',
      icon: '/assets/icon/restaurant.png'
    },
    {
      title: 'Recettes',
      url: '/folder/Recettes',
      icon: '/assets/icon/recette.png'
    },
    {
      title: 'Contact',
      url: '/folder/Contact',
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
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
