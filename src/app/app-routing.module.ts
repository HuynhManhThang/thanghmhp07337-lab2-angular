import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MytableComponent } from './mytable/mytable.component';
import { SlideComponent } from './slide/slide.component';


const routes: Routes = [
  {path:"home" ,component:ProductListComponent},
  {path:"home" ,component: SlideComponent},
  {path:"manager",component:MytableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
