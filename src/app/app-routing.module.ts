import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {DetailsComponent} from "./pages/details/details.component";

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'film/:id', component: DetailsComponent},
  {path: 'home', redirectTo: ''},
  {path: 'accueil', redirectTo: ''},
  {path: 'acceuil', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
