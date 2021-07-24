import { Component, OnInit } from "@angular/core";
import { BookService } from "../shared/book.service";
import { ActivatedRoute } from "@angular/router";
import { CurrencyPipe } from "@angular/common";


@Component({    
    templateUrl: './book.detail.component.html'
})
export class BookDetailComponent implements OnInit{

    book:any
    constructor (private bookService:BookService , private route:ActivatedRoute){

    }

    ngOnInit(){
        console.log(+this.route.snapshot.params["id"]);
        var id = +this.route.snapshot.params["id"];
         this.bookService.getBook(id).subscribe(book => this.book = book);
         
    }
}