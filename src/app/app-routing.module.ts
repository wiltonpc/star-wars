import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicial',  pathMatch: 'full'},
	{ path: 'inicial', 			loadChildren: () => import('./modules/inicial/inicial.module').then(m => m.InicialModule) },
  { path: 'game', 			loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
