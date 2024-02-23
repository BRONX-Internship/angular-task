import { Component, OnDestroy, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock/products.data';
import { Product } from 'src/app/models/product.model';
const data = PRODUCTS;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  product: Product | undefined;

  ngOnInit(): void {
    this.products = data;
  }

  getProduct(productFromChild: Product) {
    this.product = productFromChild;
  }

  ngOnDestroy(): void {}
}
