import { Component, OnInit,OnChanges } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DocService} from '../doc/doc.service';
@Component({
  selector: 'app-new-doc',
  templateUrl: './new-doc.component.html',
  styleUrls: ['./new-doc.component.css']
})
export class NewDocComponent implements OnInit {
  docs:any

  constructor(
    private http: HttpClient,
    private document:DocService
  ) { 
    
  }

  ngOnInit() {
    this.document.abc();
  }

  ngOnChanges(){
    
  }

  

}
