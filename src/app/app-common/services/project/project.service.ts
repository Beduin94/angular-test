import { Injectable } from '@angular/core';
import {StorageService} from "../storage/storage.service";
import {IProject} from "../../interface/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private storageService: StorageService
  ) { }

  getProjectList(): IProject[] | null {
    const projects = this.storageService.getLocalStorage();
    if(!projects) return null;
    else return JSON.parse(JSON.parse(projects)).Projects;
  }
}
