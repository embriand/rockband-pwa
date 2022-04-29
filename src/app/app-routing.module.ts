import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'rockband-list',
    pathMatch: 'full'
  },
  {
    path: 'rockband-list',
    loadChildren: () => import('./pages/rockband-list/rockband-list.module').then( m => m.RockbandListPageModule)
  },
  {
    path: 'rockband-update/:id',
    loadChildren: () => import('./pages/rockband-update/rockband-update.module').then( m => m.RockbandUpdatePageModule)
  },
  {
    path: 'rockband-new',
    loadChildren: () => import('./pages/rockband-new/rockband-new.module').then( m => m.RockbandNewPageModule)
  },  {
    path: 'rockband-management',
    loadChildren: () => import('./pages/rockband-management/rockband-management.module').then( m => m.RockbandManagementPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
