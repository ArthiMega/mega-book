import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-editebooks',
  templateUrl: './editebooks.component.html',
  styleUrls: ['./editebooks.component.css']
})
export class EditebooksComponent implements OnInit {

  books!:any;
  constructor(private crudservice:CRUDService) { }
  viewBooks(){
    this.crudservice.getAllBooks().subscribe(response=>{
      this.books = response;
    })
  }

  ngOnInit() {
    this.viewBooks();
  }

}
