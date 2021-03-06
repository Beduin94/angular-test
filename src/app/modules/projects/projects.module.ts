import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectListComponent } from './project-list/project-list.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AppCommonModule } from "../../app-common/app-common.module";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    EditProjectComponent
  ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        AppCommonModule,
        ReactiveFormsModule
    ]
})
export class ProjectsModule { }
