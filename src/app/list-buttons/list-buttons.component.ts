import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ModalController, PickerController, PopoverController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import * as localforage from 'localforage';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnInit {
  @Input() list: []
  @Input() data: []
  @Input() productCategories: []
  @Input() shipPoints: []

  private filteredProducts: any[]
  private cart: any[]
  private isPicker: boolean
  private quantity: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  private price: number
  private currentModal: any = null
  private shipPoint: {}

  constructor(private pickerController: PickerController, private modalController: ModalController) { }

  async ngOnInit() {
    this.filteredProducts = ['0', '1', '2']
    this.cart = await localforage.getItem('cart')
    this.isPicker = true
    this.price = await this.getTotal()
   }

  onChange(categories) {
    this.filteredProducts = categories
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: PopUpComponent,
      componentProps: {
        shipPoints: this.shipPoints
      },
      backdropDismiss: true,
      swipeToClose: true
    })
    modal.present()
    this.shipPoint = await modal.onWillDismiss()
    console.log(this.shipPoint['data'])
  }

  async setMinusQuantity(product) {
    let newCart : any[] = await localforage.getItem('cart') || []
    const indexProduct = this.cart.indexOf(product)
    if(product['quantity'] != 1){
      product['quantity'] -= 1 
    } else {
      this.deleteProduct(product)
      return
    }
    newCart.splice(indexProduct, 1, product)
    localforage.setItem("cart", newCart)
    this.price = await this.getTotal()
  }

  async setPlusQuantity(product) {
    let newCart : any[] = await localforage.getItem('cart') || []
    const indexProduct = this.cart.indexOf(product)
    product['quantity'] += 1
    newCart.splice(indexProduct, 1, product)
    localforage.setItem("cart", newCart)
    this.price = await this.getTotal()
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
    if (this.cart[0]) {
      return this.cart
                  .map(product => product['price'] * product['quantity'])
                  .reduce((acc, productPrice) => acc += productPrice)
    }
  }

  filterProducts(product) {
    let isSale = this.filteredProducts.includes(product['sale'].toString())
    if (this.filteredProducts.length < 1) {
      return this.filteredProducts
    } else if (this.filteredProducts.length < 2 && this.filteredProducts.includes('true')) {
      return this.filteredProducts && isSale
    } else if (!this.filteredProducts.includes('true')) {
      return this.filteredProducts.includes(product['category'].toString())
    } else if (this.filteredProducts.length >= 2 && this.filteredProducts.includes('true')) {
      return this.filteredProducts.includes(product['category'].toString()) && isSale
    }
  }

  // filterProducts(product) {
  //   if (this.filteredProducts.length < 1 && this.filteredProducts.includes('true')) {
  //     return this.filteredProducts
  //   } else {
  //     return this.filteredProducts.includes(product['category'].toString()) && isSale
  //   }
  // }

  async deleteProduct(product) {
    console.log(product)
    this.cart = await localforage.getItem('cart') || []
    this.cart = this.cart.filter(localProduct => localProduct['name'] !== product['name'])
    await localforage.setItem('cart', this.cart)
    this.price = await this.getTotal()
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
