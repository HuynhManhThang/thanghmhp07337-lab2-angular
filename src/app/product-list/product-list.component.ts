import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";//buoc1
import { Product } from "../product";


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products :Product[];//buoc4
  constructor(
    private productService: ProductService //buoc2
  ) {}

  ngOnInit() {
    //dung services
  this.products =  this.productService.getProducts();
  //buoc4 gọi sag product list.ts              buoc3
  }
//dung thuong 
  // products;
  // selected: Product;
  // hienthi(product) {
  //   this.selected = product;
  // }
  xoa(id) {
    console.log('${id} đây là id của compoment')
    this.products =this.productService.removeProduct(id);
   
  }
}
