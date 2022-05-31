import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from "@angular/router";
import { DateFormatPipe } from "./pipes/date-format.pipe";



@NgModule({
    declarations: [
      NavBarComponent,
      DateFormatPipe
    ],
    exports: [
      NavBarComponent,
      DateFormatPipe
    ],
    imports: [
      CommonModule,
      RouterModule
    ]
})
export class AppCommonModule { }
