import { Component, OnInit } from '@angular/core';
import { IProject } from "../../app-common/interface/project";
import { ProjectService } from "../../app-common/services/project/project.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: IProject[] | null = this.projectService.getProjectList();

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

}
