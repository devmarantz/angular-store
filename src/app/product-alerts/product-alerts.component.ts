import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  constructor() { }

  ngOnInit() {
  }

  notifyMe(){
    console.log(this.product);
    alert(`I am notifying you about ${this.product.name} is $${this.product.price}`)
  }
}
