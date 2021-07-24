import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { BookService } from "./shared/book.service";
import { Observable } from "rxjs";
import {map,take } from "rxjs/Operators"

@Injectable()
export class BookListRosolver implements Resolve<any>{

    constructor(private bookService:BookService){

    }
    resolve() {
        
        
        const e= this.bookService.getBooks().pipe(map(books => books));
      //  console.log(`The observable that resolve() is about to return: ${JSON.stringify(e)}`);
       // e.subscribe((evt) => console.log(`The value that the observable resolves to: ${JSON.stringify(evt)}`));

        return e.pipe(take(1));
    }
   
}