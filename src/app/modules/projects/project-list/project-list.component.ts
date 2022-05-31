import { Component, OnInit } from '@angular/core';
import { IProject } from "../../../app-common/interface/project";
import { ProjectService } from "../../../app-common/services/project/project.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: IProject[];
  projects$: Observable<IProject[]> = this.projectService.projects.asObservable();

  constructor(
    private projectService: ProjectService
  ) {
    this.projects$.pipe().subscribe((projects) => {
      if (projects) this.projects = projects;
    });
  }

  ngOnInit(): void {
  }

}
