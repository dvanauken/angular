import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomTextComponent } from './custom-text/custom-text.component';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { CustomCheckBoxComponent } from './custom-check-box/custom-check-box.component';
import { CustomImageComponent } from './custom-image/custom-image.component';
import { AppRoutingModule } from './app-routing.module';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    CustomTextComponent,
    CustomSelectComponent,
    CustomCheckBoxComponent,
    CustomImageComponent,
    PageOneComponent,
    PageTwoComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
