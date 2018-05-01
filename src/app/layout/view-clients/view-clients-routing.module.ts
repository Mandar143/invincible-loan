import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewClientsComponent } from './view-clients/view-clients.component';

const routes: Routes = [
  { path:'', component:ViewClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewClientsRoutingModule { }
