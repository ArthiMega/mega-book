import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CRUDService } from '../service/crud.service';
import { NavService } from '../service/nav.service';
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  position = "center";
  visible = false;
  percentage = 0;
  login:FormGroup|any;
  constructor(private http:HttpClient,
     private route:Router, 
     private service: CRUDService,
     public nav: NavService
     ) {
    this.nav.hide()
   }
   
  ngOnInit() {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl(),
    });
  }
  

  logindata(login:FormGroup){
    if(login.value.email ==="arthi@test.com" && login.value.password === "567"){
      this.route.navigate(['admin'])
    }
    else{
    
    this.http.get<any>("http://localhost:3000/user-data")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password
      });
      if(user){
        console.log(res);
        this.login.reset();
        alert("Logged in successfully!")
        this.route.navigate(['home']);
      }
      else
      {
        alert('Usernot found')
        this.route.navigate(['login']);
      }
    },err=>{
      alert('Something was wrong');
    })
  }
  // sbtn1(){
  //   $('.form-box').css('display','none');
  //   $('.form-box1').css('display','block');
  // }
  //-----------tost message----------------->
  }
}
