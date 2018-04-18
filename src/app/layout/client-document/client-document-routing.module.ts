import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDocumentComponent } from './client-document/client-document.component';
const routes: Routes = [
    {path:'',component:ClientDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDocumentRoutingModule { }
