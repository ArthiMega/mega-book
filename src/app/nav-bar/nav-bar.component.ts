import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CRUDService } from '../service/crud.service';
import { NavService } from '../service/nav.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  enteredSearchValue: string = "";
  constructor(public nav: NavService) {
   }
  
  ngOnInit() {
  }
  @Output()
  searchTextChaned: EventEmitter<string> = new EventEmitter<string>();//property
  onSearchTextChanged(){
    this.searchTextChaned.emit(this.enteredSearchValue);
  }
}
