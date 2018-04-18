import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Client } from './client';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(rg: Client){ 
    console.log(rg)
    return this.http.post('http://localhost/invincible-db/client-db.php',rg,{

  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
})
  }

  deleteOne(client_id:string){
    console.log(client_id)
    let reg={
      "client_id":client_id
    }
  
    return this.http.put('http://localhost/invincible-db/delete-client.php',reg,{

    headers:new HttpHeaders({
      'Content-Type':'application/json'
      })
    })
  }


 
}
