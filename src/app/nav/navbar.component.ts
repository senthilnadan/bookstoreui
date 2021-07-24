import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthService } from "../user/auth.Service";


@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html'

})
export class NavBarComponent {

    constructor(public auth: AuthService) {
    
    }
}