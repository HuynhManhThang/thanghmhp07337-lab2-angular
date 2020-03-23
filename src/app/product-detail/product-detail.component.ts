import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product : Product;
  constructor(
    private productService: ProductService,
   private activatedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
this.getProduct();
  }
getProduct(){
this.activatedRouter.params.subscribe(param =>{
this.product = this.productService.getProduct(param.id);
});
}
}