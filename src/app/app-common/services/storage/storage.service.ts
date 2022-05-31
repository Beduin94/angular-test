import { Injectable } from '@angular/core';
import { IProject } from "../../interface/project";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalStorage(): string | null {
    return localStorage.getItem('projects');
  }

  setLocalStorage(projects: IProject[]): void {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}
