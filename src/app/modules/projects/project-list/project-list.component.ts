import {Component, Input, OnInit} from '@angular/core';
import {IProject} from "../../../app-common/interface/project";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: IProject[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
