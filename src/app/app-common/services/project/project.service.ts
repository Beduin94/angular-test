import { Injectable } from '@angular/core';
import { StorageService } from "../storage/storage.service";
import { IProject } from "../../interface/project";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: BehaviorSubject<IProject[]> = new BehaviorSubject<IProject[]>(this.getProjectList());

  constructor(
    private storageService: StorageService
  ) { }

  getProjectList(): IProject[] | null {
    const projects = this.storageService.getLocalStorage();
    if(!projects) return null;
    return JSON.parse(projects);
  }

  getProjectById(id: string): IProject | null {
    const projects = this.getProjectList();
    if(!projects) return null;
    return projects.find((item) => item.id === id);
  }

  updateProject(project: IProject): void {
    const updatedList = this.getProjectList().map((item) => {
      if(item.id === project.id) return project;
      return item;
    });
    this.storageService.setLocalStorage(updatedList);
    this.projects.next(updatedList);
  }
}
