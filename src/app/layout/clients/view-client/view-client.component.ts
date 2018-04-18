import { Component, OnInit } from '@angular/core';
import { ClientService } from '../add-client/client.service';
import { HttpClient } from '@angular/common/http';
import {Client } from '../add-client/client';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css'],
  providers: [ClientService]
})
export class ViewClientComponent implements OnInit {
clientData:any
resMsg: string

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
