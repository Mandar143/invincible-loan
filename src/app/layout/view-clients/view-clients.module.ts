import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewClientsRoutingModule } from './view-clients-routing.module';
import { ViewClientsComponent } from './view-clients/view-clients.component';

@NgModule({
  imports: [
    CommonModule,
    ViewClientsRoutingModule
  ],
  declarations: [ViewClientsComponent]
})
export class ViewClientsModule { }
