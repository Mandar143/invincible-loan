import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Doc} from './doc';
import { EventEmitter } from '@angular/core';

@Injectable()
export class DocumentService {

  constructor(
 
    private http :HttpClient
   
    
  ) { }

  savedata(dc:any){
     console.log(dc)
    return this.http.post('http://localhost/invincible-db/document-cat-db.php',dc,{

      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }

 

  selectdoc(category_id:string) {
    

  }

  updatedocument(abc){
    //console.log(abc)
   
    //doc.category_name=abc.dname
    //doc._id=abc._id
    console.log(abc)
    return  this.http.put(`http://localhost/invincible-db/document-cat-db.php`,abc,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
  }
    )

  }

  deletedocs(_id){
    console.log(_id)
    let doc={
      "category_id":_id
    }
    
   

return  this.http.post(`http://localhost/invincible-db/delete-doc.php`,doc,{
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  )
  }



}
