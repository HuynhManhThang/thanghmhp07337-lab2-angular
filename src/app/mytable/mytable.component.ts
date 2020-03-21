import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-mytable",
  templateUrl: "./mytable.component.html",
  styleUrls: ["./mytable.component.css"]
})
export class MytableComponent implements OnInit {
products  :Product[];//hienthi danhsach
product: Product = new Product();//[(ngmodel)]
  constructor(
    private productServices:ProductService,
  ) {}

  ngOnInit() {
    //hien thi san pham
   this.products= this.productServices.getProducts();

  }

     //hienthichitiet thuong
 selected: Product;
  hienthichitiet(product) {
    this.selected = product;
  }
  //XOA =services
  xoa(id){
   this.products = this.productServices.removeProduct(id);
  }
//thêm sản phẩm
  addProduct(){
    this.productServices.addProduct(this.product)
    // console.log(this.product)
  }
  //Hien Thi bang service
 /*
  hienthichitiet(product) {
console.log(product);
this.products=this.productServices.getProduct(product);

  }*/


  //Xoa Thuong
  /*
  xoa(id) {
    return (this.products = this.products.filter(product => product.id != id));
  }*/


}
