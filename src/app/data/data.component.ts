import { Component, OnInit } from '@angular/core';
import { CRUDService } from '../service/crud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  userList :any;
  vList:any;
  data ={
    "code":0,
    "name":"Arthi",
    "email":"arthi@example.com",
    "password":"Arthi@123",
    "mobileNo":9361835204
  }
  constructor(private service: CRUDService) { 
    this.userList = service.getUserInfo();
    console.log(this.userList);
    this.vList = service.getAllVidios().subscribe(result=>{
      this.vList = result;
    })
    console.log(this.vList);
  }

  ngOnInit() {
  }
  // save(){
  //   this.service.saveData(data:any)
  // }
}



