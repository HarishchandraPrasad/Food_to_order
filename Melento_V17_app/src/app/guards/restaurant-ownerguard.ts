import { CanActivate } from "@angular/router";

export class RestaurantOwnerGuard implements CanActivate{
     role:any='restaurant owner'

    canActivate(){
        
        this.role=localStorage.getItem('role')

        if(this.role=="restaurant owner"){
            return true;
        }
        alert("Sorry...... No access")
        return false;
    }
}