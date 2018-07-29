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
   
  
  defaultSettingsMeetings = {
    columns: {
      category_name: {
        title: 'Document Category'
      },
     
     
    },
    mode: 'inline', // inline|external|click-to-edit
    selectMode: 'single', // single|multi
    hideHeader: false,
   
    hideSubHeader: false,
    actions: {
      columnTitle: 'Actions',
      add: true,
      edit: true,
      delete: false,
      custom: [],
      position: 'right', // left|right
    },
    filter: {
      inputClass: '',
    },
    edit: {
      inputClass: '',
      editButtonContent: 'Edit',
      saveButtonContent: 'Update',
      cancelButtonContent: 'Cancel',
      confirmSave: true,
    },
    add: {
      inputClass: '',
      addButtonContent: 'Add New',
      createButtonContent: 'Create',
      cancelButtonContent: 'Cancel',
      confirmCreate: true,
    },
    delete: {
      deleteButtonContent: 'Delete',
      confirmDelete: false,
    },
    attr: {
      id: '',
      class: 'table table-striped table-bordered',
    },
    noDataMessage: 'No data found',
    
    pager: {
      display: true,
      perPage: 10,
    },
    rowClassFunction: () => ""
  };
  
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
    var time=this.formatAMPM(9,20);
    console.log(time)
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

  

    formatAMPM(hour,minute) {
      var hours = hour;
      var minutes = minute;
      console.log(minutes);
  
      // var ampm = hours >= 12 ? 'pm' : 'am';
      // hours = hours % 12;
      // hours = hours ? hours : 12; // the hour '0' should be '12'
      // minutes=minutes%10;
     
      // if(minutes=="00"){
      //   minutes="00"  
      // }
      // else {
      //   minutes = minutes < 10 ? '0'+minutes : minutes;
      // }
    
      hours = hours < 10 ? '0'+hours : hours;
      var dateiso=new Date('2018-05-01'+' '+hours+':'+minutes+':'+'00').toISOString();
      var dateiso2=new Date('2018-05-01  10:20:00').toISOString();


     // var diff=dateiso-dateiso2;


      var abc=this.ISODateString(dateiso)
      var d = new Date(dateiso);
      var ampm = (d.getHours() >= 12) ? "PM" : "AM";
      var hrs = (d.getHours() >= 12) ? d.getHours()-12 : d.getHours();

   console.log( hours+' : '+d.getMinutes()+' '+ampm);
      return abc;
     
     // var strTime = hours + ':' + minutes + ' ' + ampm;
      //return strTime;
    }


  ISODateString(d) {
      
  }
}
