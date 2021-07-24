import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { of, Subject } from "rxjs";
import { Observable } from "rxjs";


@Injectable()
export class BookService{

    constructor(private http: HttpClient) {

    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        }
      }

    getBook(bookId: number): Observable<any> {      
        return this.http.get<any>('/api/book/' + bookId)
        .pipe(catchError(this.handleError<any>('getBook')))
    }

    getBooks(){
        return this.http.get<any[]>('/api/book')
        .pipe(catchError(this.handleError<any[]>('getBooks', [])))
    }

    saveBook(book) {
        let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
        return this.http.post<any>('/api/book', book, options)
        .pipe(catchError(this.handleError<any>('saveBook')))
      }

    // getBooks(){
    //     let subject = new Subject();
    //     setTimeout( () => {subject.next(BOOKS); subject.complete},2000)
    //     return subject;
    // }
}

const  BOOKS =[
    {
        "id": 3,
        "name": "Some Book",
        "edition": 1,
        "price": 100,
        "pages": 100,
        "size": "CROWN",
        "hasPicture": false,
        "paperType": "NS_BOOKPRINT",
        "author": {
            "id": 1,
            "firstName": "Jothi",
            "lastName": "E"
        }
    },
    {
        "id": 4,
        "name": "Some Other Book",
        "edition": 1,
        "price": 100,
        "pages": 100,
        "size": "CROWN",
        "hasPicture": false,
        "paperType": "NS_BOOKPRINT",
        "author": {
            "id": 1,
            "firstName": "Jothi",
            "lastName": "E"
        }
    },
    {
        "id": 5,
        "name": "புதிர் கதைகள்",
        "edition": 1,
        "price": 100,
        "pages": 100,
        "size": "CROWN",
        "hasPicture": false,
        "paperType": "NS_BOOKPRINT",
        "author": {
            "id": 1,
            "firstName": "Jothi",
            "lastName": "E"
        }
    }
];