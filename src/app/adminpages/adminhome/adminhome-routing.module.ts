import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { EditebooksComponent } from './components/editebooks/editebooks.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'view-user',component:ViewUserComponent},
  {path:'editbooks',component:EditebooksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminhomeRoutingModule { }
