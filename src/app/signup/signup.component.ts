import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {SignupService} from './signup.service'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers:[SignupService]
})
export class SignupComponent implements OnInit {
    resMsg :string
    constructor(
        private signup:SignupService
    ) {}

    ngOnInit() {}

    register_user(frm:any){
        console.log(frm)
        this.signup.savedata(frm).subscribe(
            res=>console.log(res),
            err=>console.log(err),
            ()=>{
              this.resMsg="Record Saved Successfully......"
            }
          )
    }
}
