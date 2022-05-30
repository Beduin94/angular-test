import { Injectable } from '@angular/core';
import { IProject } from "../../interface/project";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalStorage(): IProject[] | null {
    const localData = localStorage.getItem('projects');
    return localData ? JSON.parse(localData) : null;
  }

  setLocalStorage(projects: IProject[]): void {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}
