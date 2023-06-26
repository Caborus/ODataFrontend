import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonTableComponent
  }
  //{path:'', pathMatch:'full', redirectTo:'pokemonTable'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
