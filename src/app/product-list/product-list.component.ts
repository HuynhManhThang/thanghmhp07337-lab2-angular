import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { data } from "../data";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products = data;
  selected: Product;
  hienthi(product) {
    this.selected = product;
  }
  xoa(id) {
    return (this.products = this.products.filter(product => product.id != id));
  }
}
