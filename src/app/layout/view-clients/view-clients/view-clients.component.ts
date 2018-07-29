import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../clients/add-client/client.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.css'],
  providers: [ClientService]
})
export class ViewClientsComponent implements OnInit {
 clientData:any
resMsg: string

defaultSettingsMeetings = {
  columns: {
    cname: {
      title: 'Client Name'
    },
    mnumber: {
      title: 'Mobile Number'
    },
    email: {
      title: 'Email Address'
    },
    client_date: {
      title: 'Client Date'
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




  constructor(
    private http: HttpClient,
    private cliSer: ClientService
  ) {
    this.http.get('http://localhost/invincible-db/select-client.php').subscribe(data =>
    {
      console.log(data)
      this.clientData= data
    })
   }

  ngOnInit() {
  }

  onDelete(_id:string){
    //console.log(_id)
   
    this.cliSer.deleteOne(_id).subscribe(
       res=>console.log(res),
       err=>console.log(err),
       ()=>{
         this.resMsg =" Record Deleted..!"
       })
      
  }
}
