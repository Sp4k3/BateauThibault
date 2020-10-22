import { Component, OnInit } from '@angular/core'

import { Platform } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { JsonService } from './services/json.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0
  public data: any[]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private JsonService: JsonService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })
  }

  ngOnInit() {
    // const path = window.location.pathname.split('')[1]
    // if (path !== undefined) {
    //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase())
    // }
    this.getJSON()
  }

  getJSON() {
    this.JsonService
      .getJSON('home')
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
}
