import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "../../app-common/services/storage/storage.service";
import { Router } from "@angular/router";
import { ProjectService } from "../../app-common/services/project/project.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  form: FormGroup = this.fb.group({
    json: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private router: Router,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    const data = JSON.parse(this.form.value.json).Projects;
    this.storageService.setLocalStorage(data);
    this.projectService.projects.next(data);
    this.router.navigate(['projects']);
  }

}
