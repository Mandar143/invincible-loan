import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc/doc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewDocComponent } from './new-doc/new-doc.component';
import { ColorDirective } from './new-doc/color.directive';
import { HiddenDirective } from './new-doc/hidden.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';
@NgModule({
  imports: [
    CommonModule,
    DocRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  declarations: [DocComponent, NewDocComponent, ColorDirective, HiddenDirective]
})
export class DocModule { }
