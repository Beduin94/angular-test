import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IProject } from "../../../app-common/interface/project";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DateFormatService } from "../../../app-common/services/date-format/date-format.service";
import { ProjectService } from "../../../app-common/services/project/project.service";

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  project: IProject;
  isEditable: boolean;

  form: FormGroup = this.fb.group({
    startDate: [null],
    endDate: [null],
    createdBy: [null],
    description: [null],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dateFormatService: DateFormatService,
    private projectService: ProjectService
  ) {
    this.route.data.subscribe(({ project }) => {
      this.project = project;
    });
  }

  ngOnInit(): void {
  }

  changeEditable(): void {
    this.isEditable = !this.isEditable;
    if(this.isEditable && this.project) {
      this.form.patchValue(this.dateFormatService.toInputString(this.project));
    }
  }

  save(): void {
    const data: IProject = Object.assign(this.project, this.dateFormatService.toISOString(this.form.value));
    this.projectService.updateProject(data);
    this.changeEditable();
  }

}
