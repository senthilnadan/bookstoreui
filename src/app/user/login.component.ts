import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.Service";

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent{

    constructor(private authService: AuthService,private router:Router){

    }
    userName
    password

    login(formObject){
        console.log(formObject);
        this.authService.loginUser(formObject.userName, formObject.password);
        this.router.navigate(['books'])
    }
}