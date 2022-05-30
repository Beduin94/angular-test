import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StorageService } from "../../app-common/services/storage/storage.service";

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
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    const data = this.form.value;
    this.storageService.setLocalStorage(data.json);
  }

}
