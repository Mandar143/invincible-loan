import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable()
export class SignupService {

  constructor(
    private http: HttpClient
  ) { }

  savedata(dc:any){
    //console.log(dc)
    let arr={
      "user_email":dc.user_email,
      "password":dc.password,
      "role":dc.role
    }
    //console.log(arr)
   return this.http.post('http://localhost/invincible-db/register-user.php',arr,{

     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   })
 }
}
