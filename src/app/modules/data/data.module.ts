import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { DataRoutingModule } from "./data-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DataComponent,
  ],
    imports: [
        CommonModule,
        DataRoutingModule,
        ReactiveFormsModule
    ]
})
export class DataModule { }
