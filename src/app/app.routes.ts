import {Routes} from '@angular/router';

export const routes: Routes = [{
  path: 'movies',
  loadComponent: () => import('./tv-shows/tv-shows-list.component').then(c => c.TvShowsListComponent)
},
  {
    path: 'movie/:id',
    loadComponent: () => import('./tv-shows/tv-show-detail.component').then(c => c.TvShowDetailComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  }
];
