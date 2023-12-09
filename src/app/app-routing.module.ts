import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from "./page-one/page-one.component";
import { PageTwoComponent } from "./page-two/page-two.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LoginLayoutComponent } from "./login-layout/login-layout.component";
import { MainLayoutComponent } from "./main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' } // Redirect to login from the base path
    ]
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    children: [
      { path: 'page1', component: PageOneComponent, canActivate: [AuthGuard] },
      { path: 'page2', component: PageTwoComponent, canActivate: [AuthGuard] },
      { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
      { path: 'user-form/:username', component: UserFormComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'page1', pathMatch: 'full' } // Redirect from /app base path
    ]
  },
  { path: '**', redirectTo: 'login' } // Fallback for any unknown paths
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
