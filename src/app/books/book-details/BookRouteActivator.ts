import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";


@Injectable()
export class  BookRouteActivator implements CanActivate{
    constructor(private router:Router){}

    canActivate(route: ActivatedRouteSnapshot ) {
        const eventExists =(+route.params['id'] < 150)        
        if(!eventExists) this.router.navigate(['/404'])
        return eventExists;
    }

}