import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EditebooksComponent } from './components/editebooks/editebooks.component';
import { HeaderComponent } from './components/header/header.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

import { AdminhomeRoutingModule } from './adminhome-routing.module';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    EditebooksComponent,
    HeaderComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    AdminhomeRoutingModule
  ]
})
export class AdminhomeModule { }
