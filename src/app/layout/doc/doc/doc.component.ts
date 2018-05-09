import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { routerTransition } from '../../../router.animations';
import { DocService} from './doc.service';
import  { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  animations: [routerTransition()],
  providers:[DocService]
})
export class DocComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  counter = 0;

  docs1:any
  docs:any
  resMsg: string
  arr:any
  dm:string
  id1:number
  cat_id:number
  wheather:any
  constructor(
    private http: HttpClient,
    private document:DocService,
    private toastr:ToastrService
  ) { 
    this.http.get('http://localhost/invincible-db/select-category.php').subscribe(data => {
      console.log(data)
     this.docs1=data

     
     })

     this.http.get('http://localhost/invincible-db/sel-cat-document.php').subscribe(data => {
      console.log(data)
     this.docs=data

     
     })

     this.http.get('http://samples.openweathermap.org/data/2.5/weather?q=pune&appid=b6907d289e10d714a6e88b30761fae22',{
      headers: new HttpHeaders({
       
      'Content-Type': 'application/json'
      
     
    })
    }).subscribe(data=>{  
console.log(data)
this.wheather= data
})
  }

  ngOnInit() {
  }
  

  adddoc(frm : any){
    console.log(frm)
 
  
   this.document.savedata(frm).subscribe(
     res=>console.log(res),
     err=>console.log(err),
     ()=>{
       this.resMsg="Record Saved Successfully......"
       this.document.abc();
       this.toastr.success(`New Record Added Successfully`,'Document Register')
     }
   )
  }


  Onedit(_id:string)
  {
   console.log(_id)
   this.arr={
     "document_id":_id
   }
   return this.http.post('http://localhost/invincible-db/sel-cat-document.php',this.arr,{
     
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }).subscribe(data => {
    console.log(data)
    this.dm=data[0].dname
    this.cat_id=data[0].category_id
    this.id1=data[0].document_id
  })
}


updatedoc(dname:string, id:string,cate_id:number)
  {
    // updaterec(frm){
      console.log(dname)
      let abc={
        "dname":dname,
        "category_id":cate_id,
        "document_id":id
      }
     // console.log(abc)
      
      this.document.updatedocument(abc).subscribe(
        res=>console.log(res),
        err=>console.log(err),
        ()=>{
          //location.reload()
          this.resMsg="Record Updated Successfully..."
        }
      )
  }

  Ondelete(_id:string){
    //console.log(name)
   
    this.document.deletedocs(_id).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        //location.reload()
        this.resMsg="Record Deleted Successfully..."
      }
    )
  }
}
