import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { routerTransition } from '../../../router.animations';
import { DocService } from './doc.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css'],
  animations: [routerTransition()],
  providers: [DocService]
})
export class DocComponent implements OnInit {
  defaultSettingsMeetings: { columns: { category_id: { type: { title: string; type: string; editor: { type: string; config: { list: { value: string; title: string; }[]; }; }; }; }; dname: { title: string; }; }; mode: string; selectMode: string; hideHeader: boolean; hideSubHeader: boolean; actions: { columnTitle: string; add: boolean; edit: boolean; delete: boolean; custom: any[]; position: string; }; filter: { inputClass: string; }; edit: { inputClass: string; editButtonContent: string; saveButtonContent: string; cancelButtonContent: string; confirmSave: boolean; }; add: { inputClass: string; addButtonContent: string; createButtonContent: string; cancelButtonContent: string; confirmCreate: boolean; }; delete: { deleteButtonContent: string; confirmDelete: boolean; }; attr: { id: string; class: string; }; noDataMessage: string; pager: { display: boolean; perPage: number; }; rowClassFunction: () => string; };
  data1 = [];
  @Output() valueChange = new EventEmitter();
  counter = 0;
  itemList = [];
  docs1: any;docs2:any
  docs: any
  resMsg: string
  arr: any
  dm: string
  id1: number
  cat_id: number
  cat:any;
  wheather: any
  constructor(
    private http: HttpClient,
    private document: DocService,
    private toastr: ToastrService
  ) {
    this.http.get('http://localhost/invincible-db/select-category.php').subscribe(data => {
      console.log(data)  
      this.docs1 = data
     
    })


    this.http.get('http://localhost/invincible-db/sel-cat-document.php').subscribe(data => {
      console.log(data)
      this.docs = data
    })

  }

  ngOnInit() {
  }

  selctCat(id:number){
    this.arr = {
      "category_id": id
    }
    return this.http.post('http://localhost/invincible-db/sel-cat-document.php', this.arr, {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(data => {
      console.log(data)
      this.docs2 = data
      this.docs2.forEach(element => {
        
        this.itemList.push({'value':element.document_id,'display':element.dname})
       
      });
    })
  }

  adddoc(frm: any) {
    console.log(frm)


    this.document.savedata(frm).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => {
        this.resMsg = "Record Saved Successfully......"
        this.document.abc();
        this.toastr.success(`New Record Added Successfully`, 'Document Register')
      }
    )
  }


  Onedit(_id: string) {
    console.log(_id)
    this.arr = {
      "document_id": _id
    }
    return this.http.post('http://localhost/invincible-db/sel-cat-document.php', this.arr, {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(data => {
      console.log(data)
      this.dm = data[0].dname
      this.cat_id = data[0].category_id
      this.id1 = data[0].document_id
    })
  }


  updatedoc(dname: string, id: string, cate_id: number) {
    // updaterec(frm){
    console.log(dname)
    let abc = {
      "dname": dname,
      "category_id": cate_id,
      "document_id": id
    }
    // console.log(abc)

    this.document.updatedocument(abc).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => {
        //location.reload()
        this.resMsg = "Record Updated Successfully..."
      }
    )
  }

  Ondelete(_id: string) {
    //console.log(name)

    this.document.deletedocs(_id).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => {
        //location.reload()
        this.resMsg = "Record Deleted Successfully..."
      }
    )
  }

  register(frm:any){
    console.log(frm);
    this.document.savedata(frm).subscribe(
      res => console.log(res),
      err => console.log(err),
      () => {
       // this.resMsg = "Record Saved Successfully......"
      //  this.document.abc();
        this.toastr.success(`New Record Added Successfully`, 'Document Register')
      }
    )
  }

}
