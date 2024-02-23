import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() product: Product | undefined;
  @Output() passProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {
    console.log('On Init');
  }

  emitProduct() {
    this.passProduct.emit(this.product);
  }

  ngOnDestroy(): void {
    console.log('When Destroy');
  }
}
