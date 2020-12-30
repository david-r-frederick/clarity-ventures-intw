import { Component } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  products = [
    {
      name: 'Soap',
      description: 'Bar of soap for hands/body',
      price: 4.5,
      quantity: 3,
      id: 0,
    },
    {
      name: 'Cereal',
      description: 'Cereal for breakfast',
      price: 3.0,
      quantity: 1,
      id: 1,
    },
  ];
  total: number;

  constructor() {
    this.updateTotal();
  }

  private updateTotal() {
    this.total = this.products
      .map((obj) => {
        return obj.price * obj.quantity;
      })
      .reduce((acc: any, cur: any) => parseFloat(acc) + parseFloat(cur));
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.updateTotal();
  }

  addProduct() {
    this.products = this.products.concat({
      name: 'Example Product',
      description: 'Example description goes here',
      price: 1.0,
      quantity: 1,
      id: this.products.length + 1,
    });
    this.updateTotal();
  }

  adjustQuantity($event, index) {
    if ($event.key === 'Enter') {
      const productsCopy = [...this.products];
      productsCopy[index].quantity = $event.target.value;
      this.products = productsCopy;
      this.updateTotal();
    }
  }
}
