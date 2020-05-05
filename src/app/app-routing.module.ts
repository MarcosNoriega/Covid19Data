import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaisComponent } from './components/pais/pais.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'consulta', component: PaisComponent},
  {path: 'consulta/:pais', component: PaisComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
