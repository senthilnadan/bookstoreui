import { Injectable } from "@angular/core";

declare let toastr

@Injectable()
export class ToastrService{
    success(message:String , title?:String){
        toastr.success(message,title);
    }
}