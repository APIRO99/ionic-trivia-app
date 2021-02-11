import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pre-game',
    loadChildren: () => import('./pages/pre-game/pre-game.module').then( m => m.PreGamePageModule)
  },
  {
    path: 'categories-modal',
    loadChildren: () => import('./pages/categories-modal/categories-modal.module').then( m => m.CategoriesModalPageModule)
  },
  {
    path: 'game-modal',
    loadChildren: () => import('./pages/game-modal/game-modal.module').then( m => m.GameModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }