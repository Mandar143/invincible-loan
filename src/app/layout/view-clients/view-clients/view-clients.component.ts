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
