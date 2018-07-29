import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DocumentRoutingModule } from './document-routing.module';
import { DocumentComponent } from './document/document.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DocumentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NgbModule.forRoot()
  ],
  declarations: [DocumentComponent]
})
export class DocumentModule { }
