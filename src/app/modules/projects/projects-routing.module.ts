import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from "./projects.component";
import { EditProjectComponent } from "./edit-project/edit-project.component";
import { ProjectResolver } from "./resolvers/project.resolver";

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: ':projectId',
        component: EditProjectComponent,
        resolve: {
          project: ProjectResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
