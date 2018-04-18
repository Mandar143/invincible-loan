import { Component, OnInit } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-client-document',
  templateUrl: './client-document.component.html',
  styleUrls: ['./client-document.component.scss'],
  animations: [routerTransition()]
})
export class ClientDocumentComponent implements OnInit {
  clientData:any
  docs :any
  

  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

  constructor(
    private http: HttpClient
  ) {
    this.http.get('http://localhost/invincible-db/select-client.php')
    .subscribe(data =>
      {
       // console.log(data)
        this.clientData= data
      })

      this.http.get('http://localhost/invincible-db/select-category.php').subscribe(data => {
       console.log(data)
      this.docs=data
      
    })


this.dropdownSettings = { 
          singleSelection: false, 
          text:"List Of Categories",
          selectAllText:'Select All',
          unSelectAllText:'UnSelect All',
          enableSearchFilter: true,
          classes:"myclass custom-class"
        };

   }

  ngOnInit() {

            


  }
  onItemSelect(item:any){
    console.log(item);
  }
OnItemDeSelect(item:any){
    console.log(item);
    console.log(this.selectedItems);
}
onSelectAll(items: any){
    console.log(items);
}
onDeSelectAll(items: any){
    console.log(items);
}

}
