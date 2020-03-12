import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponent} from './new/new.component';
import {EditComponent} from './edit/edit.component';
import {ProductsComponent} from './products/products.component';
import {DetailsComponent} from './details/details.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'new', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
