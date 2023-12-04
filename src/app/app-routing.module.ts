import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from "./page-one/page-one.component";
import { PageTwoComponent } from "./page-two/page-two.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'page1', component: PageOneComponent },
  { path: 'page2', component: PageTwoComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user-form/:username', component: UserFormComponent },
  { path: '', redirectTo: '/page1', pathMatch: 'full' } // Default redirect
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
