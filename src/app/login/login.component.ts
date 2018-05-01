import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private http : HttpClient
    ) {}

    ngOnInit() {}

    checkLogin(frm:any){
        console.log(frm)
        return this.http.post('http://localhost/invincible-db/get-login.php',frm,{
        
            headers:new HttpHeaders({
              'Content-Type':'application/json'
            })
          }).subscribe(data => {
           console.log(data['status']);
           if(parseInt(data['status'])==200){
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/dashboard']);
           }
           else{
            this.router.navigate(['/login']);
           }
          })
    }

   
}
