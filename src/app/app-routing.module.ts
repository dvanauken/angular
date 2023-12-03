import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from "./page-one/page-one.component";
import { PageTwoComponent } from "./page-two/page-two.component";

const routes: Routes = [
  { path: 'page1', component: PageOneComponent },
  { path: 'page2', component: PageTwoComponent },
  { path: '', redirectTo: '/page1', pathMatch: 'full' } // Default redirect
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
