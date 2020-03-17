import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { data } from "../data";
@Component({
  selector: "app-mytable",
  templateUrl: "./mytable.component.html",
  styleUrls: ["./mytable.component.css"]
})
export class MytableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products = data;
  selected: Product;
  hienthichitiet(product) {
    this.selected = product;
  }
  xoa(id) {
    return (this.products = this.products.filter(product => product.id != id));
  }
}
