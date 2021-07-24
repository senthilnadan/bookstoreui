import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav/navbar.component';
import { 
  BookRouteActivator,
  BookThumbnailComponent,
  BookListComponent, 
  BookService,
  BookListRosolver,
  BookCreateComponent
  } from './books/index';

import { ToastrService } from './common/toastr.service';
import {  RouterModule } from '@angular/router';
import { appRoute } from './routes';
import { Error404Component } from './error/error404.component';
import { BookComponent } from './book.component';
import { AuthService } from './user/auth.Service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookThumbnailComponent,
    NavBarComponent,
    BookCreateComponent,
    Error404Component

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoute),HttpClientModule, FormsModule,CommonModule
  ],
  providers: [BookService,
    ToastrService,
    BookRouteActivator,
    BookListRosolver,AuthService,
    {provide:'canDeactivateCreateEvent', useValue: checkDirtyState}
    

  ],
  bootstrap: [BookComponent]
})
export class BookModule { }

export function checkDirtyState(component:BookCreateComponent){
  console.log("checkDirtyState " + component.isDirty)
  if(component.isDirty)
    return window.confirm("you have not saved the change ?  do you really want to exit")
  return true;
}