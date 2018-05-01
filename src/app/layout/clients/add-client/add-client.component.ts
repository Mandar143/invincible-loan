import { Component, OnInit } from '@angular/core';
import {Client } from './client';
import  { ToastrService } from 'ngx-toastr'
import { ClientService } from './client.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router,Params,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
  providers: [ClientService]
})
export class AddClientComponent implements OnInit {
  docs:any
  resmsg:string
  nm:string;
  date:Date;
  mno:number;email1:string;praddress:string;pnumber:number;secaddress:string;aeaddress:string;
  webaddr:string;citi:string;
  zip:number;clientid:number
  constructor(
    private http: HttpClient,
    private reg: ClientService ,
    private toastr:ToastrService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { 

    this.activatedRoute.params.subscribe((params: Params) => {
      
      let clientId = params['client_id'];
      
      if(clientId!=null){
        let client={
          "client_id":clientId
        }
        this.http.post('http://localhost/invincible-db/select-client.php',client,{

          headers:new HttpHeaders({
            'Content-Type':'application/json'
            })
          }).subscribe(data => {
        
          this.docs=data[0]
          console.log(this.docs)
          this.nm=this.docs['cname']
          this.clientid=this.docs['client_id']
          this.date=this.docs['client_date']
          this.mno=this.docs['mnumber']
          this.email1=this.docs['email'];
          this.praddress=this.docs['paddress']
          this.pnumber=this.docs['phonenumber']
          this.secaddress=this.docs['saddress']
          this.aeaddress=this.docs['aemail']
          this.webaddr=this.docs['waddr']
          this.citi=this.docs['city']
          this.zip=this.docs['zipcode']
          //location.reload();
        })

      }


    });



  }

  ngOnInit() {
  }

  register(frm){

    console.log(frm.client_id)
    if(frm.client_id==null){
      this.reg.registerUser(frm as Client).subscribe(
        res=>console.log(res),
        err=>console.log(err),
        ()=>{
          this.resmsg="Record Saved Successfully..."
          this.toastr.success(`New Record Added Successfully`,'Clients Register')
          
        })
    }
    else{
      this.reg.registerUser(frm as Client).subscribe(
        res=>console.log(res),
        err=>console.log(err),
        ()=>{
          this.resmsg="Record Updated Successfully..."
          this.toastr.success(`New Record Updated Successfully`,'Clients Register')
          
        })
    }
    

  }
}