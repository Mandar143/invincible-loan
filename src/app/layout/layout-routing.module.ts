import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';



const routes: Routes = [
    
    {
        path: '',
        component: LayoutComponent,

        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path:'add-clients',loadChildren:'./clients/clients.module#ClientsModule'},
            { path:'view-clients',loadChildren:'./view-clients/view-clients.module#ViewClientsModule'},
            { path:'documents',loadChildren:'./document/document.module#DocumentModule'},
            { path:'doc',loadChildren:'./doc/doc.module#DocModule'},
            { path:'client-documents',loadChildren:'./client-document/client-document.module#ClientDocumentModule'},
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            // { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
