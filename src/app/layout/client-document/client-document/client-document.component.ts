import { Component, OnInit } from '@angular/core';
import {ClientDocumentService} from './client-document.service'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormArray
} from "@angular/forms"
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-client-document',
  templateUrl: './client-document.component.html',
  styleUrls: ['./client-document.component.scss'],
  animations: [routerTransition()],
  providers:[ClientDocumentService]
})
export class ClientDocumentComponent implements OnInit {
  clientData: any
  docs: any
  docs1: any
  docs2: any
  abc = [];
  dropdownList: any
  selectedItems: any;
  dropdownSettings: any;
  itemList = [];
  options: any;
  settings = {};
  resMsg : string
  myForm: FormGroup;
  myForm2: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private clientDoc : ClientDocumentService
  ) {
    this.http.get('http://localhost/invincible-db/select-client.php')
      .subscribe(data => {
        console.log(data)
        this.clientData = data
      })

    this.http.get('http://localhost/invincible-db/select-category.php').subscribe(data => {
      console.log(data)
      this.docs = data


      // for(var i=0;i<this.docs.length;i++){
      // this.abc.push({
      //     "category_id":this.docs[i]['category_id'],
      //     "category_name":this.docs[i]['category_name']
      //   })

      // }
      //   this.dropdownList=JSON.stringify(this.abc)
      // console.log(this.dropdownList)
    })

    this.http.get('http://localhost/invincible-db/sel-cat-document.php').subscribe(data => {
      console.log(data)
      this.docs1 = data


    })






  }


  ngOnInit() {

    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });

    this.myForm2 = this.fb.group({
      useremail1: this.fb.array([])
    });

  }
  onChange(email: string, isChecked: boolean) {
    const emailFormArray = <FormArray>this.myForm.controls.useremail;

    if (isChecked) {

      emailFormArray.push(new FormControl(email));
    } else {
      let index = emailFormArray.controls.findIndex(x => x.value == email)
      emailFormArray.removeAt(index);
    }
    console.log(emailFormArray.value)
    for (var i = 0; i < emailFormArray.value.length; i++) {
      let doc = {
        "category_id": emailFormArray.value[i]
      }
      console.log(doc);
      this.http.post(`http://localhost/invincible-db/sel-cat-document.php`, doc, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      ).subscribe(data => {
        console.log(data)
        this.docs2 = data


      })
    }




  }

  onChange1(document_id: number, isChecked: boolean) {
    const emailFormArray1 = <FormArray>this.myForm2.controls.useremail1;

    if (isChecked) {

      emailFormArray1.push(new FormControl(document_id));
    } else {
      let index = emailFormArray1.controls.findIndex(x => x.value == document_id)
      emailFormArray1.removeAt(index);
    }
    console.log(emailFormArray1.value)


  }



  register(frm: any) {

    let arr={
      "client_id":frm.client_id,
      "category_id":[this.myForm.controls.useremail.value[0]],
      "document_id":[this.myForm2.controls.useremail1.value[0]],

    }
    console.log(arr)
    this.clientDoc.savedata(arr).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resMsg="Record Saved Successfully......"
      }
    )
  }

  sendEmail(client_id:number,category_id:any,document_id:any){
    console.log(client_id)

  }

}
