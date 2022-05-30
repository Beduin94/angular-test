import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'data',
        loadChildren: () => import('./modules/data/data.module').then((m) => m.DataModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./modules/projects/projects.module').then((m) => m.ProjectsModule)
      },
      {
        path: '',
        redirectTo: '/data',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
