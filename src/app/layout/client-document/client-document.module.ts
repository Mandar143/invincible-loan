import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientDocumentRoutingModule } from './client-document-routing.module';
import { ClientDocumentComponent } from './client-document/client-document.component';
import { FormsModule, ReactiveFormsModule,FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';
@NgModule({
  imports: [
    TagInputModule,
    CommonModule,
    AngularMultiSelectModule,
    ClientDocumentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ClientDocumentComponent]
})
export class ClientDocumentModule { }
