import { Injectable } from '@angular/core';
import { Product } from "../product";
import { data } from "../data";
@Injectable()
export class ProductService {
  products = data;
   selected: Product;
  constructor() { }

getProducts(){
  console.log("ô tô")
  return this.products;
}
getProduct(id){
   console.log(id);
  return this.products.find(product => product.id == id)
}
removeProduct(id){
console.log('${id} đây là id của service')
 return this.products = this.products.filter(product => product.id != id);
}
addProduct(product){
console.log(product);
// let newProduct={...product, status:"hihi"}
// console.log(newProduct);
// this.products.push(newProduct);
// console.log(this.products);
this.products.push(product);
console.log(this.products)
}

}