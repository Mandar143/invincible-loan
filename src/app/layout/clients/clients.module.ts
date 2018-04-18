import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientComponent } from './add-client/add-client.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewClientComponent } from './view-client/view-client.component';
import { Routes, RouterModule } from '@angular/router';
import { ClientsRoutingModule } from './clients-routing.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
@NgModule({
  imports: [
    CommonModule,
    AngularMultiSelectModule,
    HttpClientModule,
    ClientsRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [AddClientComponent, ViewClientComponent]
})
export class ClientsModule { }
