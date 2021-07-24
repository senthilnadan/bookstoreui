import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { BookService } from "./shared";

@Component({
    templateUrl:'./book-create.component.html'
})
export class BookCreateComponent{
    newBook
    isDirty:boolean= false;
    constructor(private router:Router, private bookService:BookService){

    }

    cancel(){
        this.router.navigate(['/books']);
    }

    saveBook(formValues) {
        console.log(formValues);
        this.bookService.saveBook(formValues).subscribe(() => {
          this.isDirty = false
          this.router.navigate(['/books'])
        })
      }
}