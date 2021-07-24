import { Routes } from "@angular/router";
import { BookCreateComponent } from "./books/book-create.component";
import { BookDetailComponent } from "./books/book-details/book.detail.component";
import { BookRouteActivator } from "./books/book-details/BookRouteActivator";
import { BookListRosolver } from "./books/book-list-resolver";
import { BookListComponent } from "./books/books-list.component";
import { Error404Component } from "./error/error404.component";

export const appRoute:Routes = [
{path:'books/new', component:BookCreateComponent , canDeactivate: ['canDeactivateCreateEvent']},    
{path:'books', component:BookListComponent,  resolve:{books:BookListRosolver} },
{path:'bookslist', component:BookListComponent, resolve:{books:BookListRosolver} },
{path:'books/:id', component:BookDetailComponent,  canActivate:[BookRouteActivator]},
{path:'' , redirectTo: '/books', pathMatch:'full'},
{path:'404' , component:Error404Component },
{ 
    path: 'user', 
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
]