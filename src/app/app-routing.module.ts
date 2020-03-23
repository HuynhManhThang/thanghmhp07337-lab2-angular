import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MytableComponent } from './mytable/mytable.component';
import { SlideComponent } from './slide/slide.component';
import { Error404Component } from './error404/error404.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {path:"home" ,component:ProductListComponent},//1 khi mở lên mặc định là trang chủ
  {path:'',redirectTo:'home',pathMatch:'full'},//1
  {path:"manager",component:MytableComponent},//route sang manager
  {path:"product/detail/:id",component:ProductDetailComponent},
  {path:'error404',component:Error404Component},
  {path:'**',redirectTo:"error404",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
