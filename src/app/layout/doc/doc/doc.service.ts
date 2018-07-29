import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable()
export class DocService {
  docs :any
  constructor(
    private http: HttpClient
  ) { }


  savedata(dc:any){
    console.log(dc)
    let arr={
      "category_id":dc.category_id,
      "dname":dc.tags[0].display,
      "document_id":dc.document_id
    }
    console.log(arr)
   return this.http.post('http://localhost/invincible-db/cat-document.php',arr,{

     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   })
 }
 updatedocument(abc){
  //console.log(abc)
 
  //doc.category_name=abc.dname
  //doc._id=abc._id
  console.log(abc)
  return  this.http.put(`http://localhost/invincible-db/cat-document.php`,abc,{
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
}
  )

}
deletedocs(_id){
  console.log(_id)
  let doc={
    "document_id":_id
  }
  
 

return  this.http.post(`http://localhost/invincible-db/del-document.php`,doc,{
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
)
}

abc(){
 return this.http.get('http://localhost/invincible-db/sel-cat-document.php')
  .map((data:Response)=>{
    return data
  }).toPromise().then(x=>{
    this.docs=x;
  })
}

}
