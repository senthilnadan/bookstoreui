import { ThrowStmt } from "@angular/compiler";
import { EventEmitter } from "@angular/core";
import { Component, Input, Output } from "@angular/core";


@Component({
    selector:'book-thumbnail',
    templateUrl:'book-thumbnail.component.html'
})
export class BookThumbnailComponent{
    @Input() book:any;
    @Output() newItemEvent = new EventEmitter();


    
    handleClickMe(){
        this.newItemEvent.emit(this.book.id)        
    }
}