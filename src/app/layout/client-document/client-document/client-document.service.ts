import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ClientDocumentService {

  constructor(
    private http:HttpClient
  ) { }

  savedata(dc:any){
    console.log(dc)
    return this.http.post('http://localhost/invincible-db/client-category-doc.php',dc,{

     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   })
 }
}
