import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProject } from "../../../app-common/interface/project";
import { ProjectService } from "../../../app-common/services/project/project.service";
import { Observable } from "rxjs";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  projects: IProject[];
  projects$: Observable<IProject[]> = this.projectService.projects.asObservable();

  constructor(
    private projectService: ProjectService
  ) {
    this.projects$.pipe(untilDestroyed(this)).subscribe((projects) => {
      if (projects) this.projects = projects;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
