import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MytableComponent } from './mytable/mytable.component';
import { SlideComponent } from './slide/slide.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductService } from './services/product.service';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, MytableComponent, SlideComponent, ProductListComponent, CategoryComponent, Error404Component, ProductDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductService]
})
export class AppModule { }
