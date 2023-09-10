import { CanActivate } from "@angular/router";

export class AdminGuard implements CanActivate{
     role:any='admin'

    canActivate(){
        
        this.role=localStorage.getItem('role')

        if(this.role=="admin"){
            return true;
        }
        alert("Sorry...... No access")
        return false;
    }
}