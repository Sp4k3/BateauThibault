import { DetailsPage } from './../details/details.page';
import { ListInfosComponent } from './../list-infos/list-infos.component';
import { ListButtonsComponent } from './../list-buttons/list-buttons.component';
import { ListHomeComponent } from '../list-home/list-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { PopUpComponent } from '../pop-up/pop-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule
  ],
  declarations: [ListPage, ListButtonsComponent, ListInfosComponent, ListHomeComponent, PopUpComponent]
})
export class ListPageModule {}
