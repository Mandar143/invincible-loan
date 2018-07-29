import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ViewClientsRoutingModule } from './view-clients-routing.module';
import { ViewClientsComponent } from './view-clients/view-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ViewClientsRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [ViewClientsComponent]
})
export class ViewClientsModule { }
