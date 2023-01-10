import { Component } from '@angular/core';
import { CRUDService } from './service/crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mega-book';
  user = true;
  admin = true;
  posts: any;
  
  constructor(public nav: CRUDService){}
  
  
}
