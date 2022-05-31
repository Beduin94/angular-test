import { Injectable } from '@angular/core';
import { IProject } from "../../interface/project";
import { format, parseISO } from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {

  constructor() { }

  toInputString(project: IProject): IProject {
    return {
      ...project,
      startDate: format(parseISO(project.startDate), 'yyyy-MM-dd'),
      endDate: format(parseISO(project.endDate), 'yyyy-MM-dd')
    }
  }

  toISOString(project: IProject): IProject {
    return {
      ...project,
      startDate: parseISO(project.startDate).toISOString(),
      endDate: parseISO(project.startDate).toISOString()
    }
  }
}
