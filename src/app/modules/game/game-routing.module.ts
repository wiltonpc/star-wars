import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  { path: 'card', component: CardComponent},
  { path: 'characters', component: CharactersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
