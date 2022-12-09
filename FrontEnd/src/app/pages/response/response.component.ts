import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  constructor(public apiservice : ApiService, private router: Router) { }
  responses:any=[];
  responseForm:any

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.apiservice.getResponse().subscribe(res=>{
      this.responses = res;
    })
  }

}
