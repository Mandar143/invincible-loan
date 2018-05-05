import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { DocumentService } from './document.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {Doc} from './doc';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  providers:[DocumentService]
})
export class DocumentComponent implements OnInit {
   resmsg:string
   dname:string
   dm:string
   msg:string
   arr:any
   docs:any
   _id: string
   id1:string
   closeResult: string
   abc1:any
   @Output() updateDocument = new EventEmitter<any>();
   
   Counter=0;
  constructor(
    private docservice: DocumentService,
    private http : HttpClient,
    private modalService: NgbModal
    
  ) { 
   
    this.http.get('http://localhost/invincible-db/select-category.php').subscribe(data => {
      // console.log(data)
      this.docs=data
      //location.reload();
    })
    
    
  }

open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

updateDocument1(abc : any){
 // this.Counter = this.Counter + 1;
 console.log("this is in event emitter")
       this.abc1=abc 
}

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     
        return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

  ngOnInit() {
    
  }

  save(dname : string){
    // console.log(dname)
    this.updateDocument.emit(this.docs);
     this.arr={
       "category_name":dname
     }
    console.log(this.arr)
    this.docservice.savedata(this.arr).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resmsg="Record Saved Successfully......"
      }
    )
  }

  Onedit(_id:string)
  {
  //  console.log(dname)
   console.log(_id)
   this.arr={
     "category_id":_id
   }
   return this.http.post('http://localhost/invincible-db/select-category.php',this.arr,{
     
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }).subscribe(data => {
    console.log(data)
    this.dm=data[0].category_name
    this.id1=data[0].category_id
   
  })
}

  updatedoc(dname:string, id:string)
  {
    // updaterec(frm){
      console.log(dname)
      let abc={
        "category_name":dname,
        "category_id":id
      }
      console.log(abc)
      
      this.docservice.updatedocument(abc).subscribe(
        res=>console.log(res),
        err=>console.log(err),
        ()=>{
          //location.reload()
          this.resmsg="Record Updated Successfully..."
        }
      )
  }


    Ondelete(_id:string){
      //console.log(name)
     
      this.docservice.deletedocs(_id).subscribe(
        res=>console.log(res),
        err=>console.log(err),
        ()=>{
          //location.reload()
          this.resmsg="Record Deleted Successfully..."
        }
      )
    }

  
}
