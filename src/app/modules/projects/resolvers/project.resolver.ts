import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import {IProject} from "../../../app-common/interface/project";
import {ProjectService} from "../../../app-common/services/project/project.service";

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<IProject> {

  constructor(private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProject {
    if (route.paramMap.get('projectId')) {
      return this.projectService.getProjectById(route.paramMap.get('projectId'));
    }
    return null;
  }
}
