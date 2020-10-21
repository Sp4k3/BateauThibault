import { Component, HostListener, Input, OnInit } from '@angular/core';
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import * as localforage from 'localforage';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnInit {
  @Input() list: []
  @Input() data: []
  @Input() productCategories: []

  public filteredProducts: any[]
  public cart: any[]
  public isPicker: boolean
  public quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  public price: number

  constructor(private pickerController: PickerController) { }

  async ngOnInit() {
    this.filteredProducts = ['0', '1', '2']
    this.cart = await localforage.getItem('cart')
    this.isPicker = true
    this.price = await this.getTotal()
   }

  onChange(categories) {
    this.filteredProducts = categories
  }

  async setCart(product, quantity) {
    product.quantity = await quantity
    this.cart = await localforage.getItem('cart') || []
    if (this.cart !== [] && this.cart.filter(localProduct => localProduct['name'] === product['name']).length > 0) {
      const localQuantity = this.cart.filter(localProduct => localProduct['name'] === product['name'])[0]['quantity']
      this.cart = this.cart.filter(localProduct => localProduct['name'] !== product['name'])
      product.quantity += localQuantity
    }
    this.cart.push(product)
    await localforage.setItem('cart', this.cart)
  }

  async getTotal() {
    this.cart = await localforage.getItem('cart') || []
    return this.cart
                .map(product => product['price'] * product['quantity'])
                .reduce((acc, productPrice) => acc += productPrice)
  }

  filterProducts(categoryId) {
    if (this.filteredProducts.length < 1) {
      return this.filteredProducts
    } else {
      return this.filteredProducts.includes(categoryId)
    }
  }

  async showPicker(element) {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.setCart(element, value['Quantity']['value'])
          }
        }
      ],
      columns:[{
        name: 'Quantity',
        options: this.getColumnOptions()
      }]
    }
    let picker = await this.pickerController.create(options)
    picker.present()
  }

  getColumnOptions() {
    let options = []
    this.quantity.forEach(x => {
      options.push({text:x,value:x})
    })
    return options
  }

  @HostListener('window:resize') orientationState() {
    this.list = this.list
    this.data = this.data
    
    
    if (screen.orientation.type == 'portrait-primary') {
      return '12'
    } else if (screen.orientation.type == 'landscape-primary') {
      return '6'
    }
  }
}
