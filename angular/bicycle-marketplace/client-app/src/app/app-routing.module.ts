import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BrowseComponent} from './browse/browse.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListingsComponent} from './listings/listings.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'listings', component: ListingsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
