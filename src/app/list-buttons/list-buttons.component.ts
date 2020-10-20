import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-buttons',
  templateUrl: './list-buttons.component.html',
  styleUrls: ['./list-buttons.component.scss']
})
export class ListButtonsComponent implements OnInit {
  @Input() list: {}
  @Input() data: []
  @Input() productCategories: []

  public filteredProducts: any[]

  constructor() { 
    this.filteredProducts = ['0', '1', '2']
  }

  ngOnInit() { }

  onChange(categories) {
    this.filteredProducts = categories
  }

  filterProducts(categoryId) {
    console.log(this.filteredProducts)
    if (this.filteredProducts.length < 1) {
      return this.filteredProducts
    } else {
      return this.filteredProducts.includes(categoryId)
    }
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
