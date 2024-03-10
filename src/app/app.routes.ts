import { Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  { path: '', loadComponent: () => IndexComponent },
  {
    path: '**',
    loadComponent: () => (
      import('./not-found/not-found.component')
        .then(mod => mod.NotFoundComponent)
    )
  }
];
