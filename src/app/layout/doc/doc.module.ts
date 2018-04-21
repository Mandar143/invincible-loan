import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc/doc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DocRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DocComponent]
})
export class DocModule { }
