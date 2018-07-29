import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc/doc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewDocComponent } from './new-doc/new-doc.component';
import { ColorDirective } from './new-doc/color.directive';
import { HiddenDirective } from './new-doc/hidden.directive';
@NgModule({
  imports: [
    CommonModule,
    DocRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DocComponent, NewDocComponent, ColorDirective, HiddenDirective]
})
export class DocModule { }
