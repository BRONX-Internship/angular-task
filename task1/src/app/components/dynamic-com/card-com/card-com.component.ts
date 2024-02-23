import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-com',
  templateUrl: './card-com.component.html',
  styleUrls: ['./card-com.component.scss'],
})
export class CardComComponent implements OnInit {
  @Input() product: any;

  ngOnInit(): void {}
}
