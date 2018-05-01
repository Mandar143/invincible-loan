import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule,FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
@NgModule({
    imports: [CommonModule, LoginRoutingModule,FormsModule,ReactiveFormsModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
