import { Component, OnInit } from '@angular/core';
import {Client } from './client';

import { ClientService } from './client.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
  providers: [ClientService]
})
export class AddClientComponent implements OnInit {
  resmsg:string
  constructor(
    private http: HttpClient,
    private reg: ClientService 
  ) { }

  ngOnInit() {
  }

  register(frm){

    console.log(frm.value)
    
    this.reg.registerUser(frm.value as Client).subscribe(
      res=>console.log(res),
      err=>console.log(err),
      ()=>{
        this.resmsg="Record Saved Successfully..."
      }
    )

  }
}