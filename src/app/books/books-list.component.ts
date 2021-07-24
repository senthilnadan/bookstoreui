import { Component, OnInit } from "@angular/core";
import { BookService } from "./shared/book.service";
import { ToastrService } from "../common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/Operators";

@Component({
    selector: 'books',
    templateUrl: './books-list.component.html',
})



export class BookListComponent implements OnInit{
    books:any
    constructor(private bookService: BookService, private toastrService: ToastrService, private route:ActivatedRoute){
        
       // this.books = this.route.snapshot.data['books']

    }

    ngOnInit(){
        console.log(this.books);
        this.books = this.route.snapshot.data['books']
        //this.events = this.route.snapshot.data['events']
        //this.bookService.getBoo).subscribe(books => {this.books = books});
        
        //console.log(this.books);
        // this.route.data.pipe(map(data => data)).subscribe(data => console.log(data))
    }

    

    addItem (data){
        console.log("received "+ data)
    }

    handleThumbNailClick(bookName){
        console.log("received click event from Child  book id: " + bookName);
        //this.toastrService.success(bookName);
    }
}