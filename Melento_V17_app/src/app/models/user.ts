import { Address } from "./address"

export class User{
    id:number
    first_name:string
    last_name:string
    dob:string
    email:string
    password:string
    mobile:string
    address:Address
    role:string

    constructor(i:number,f_N:string,l_N:string,db:string,em:string,pwd:string,mb:string,addr:Address,rl:string){
        this.id=i
        this.first_name=f_N
        this.last_name=l_N
        this.dob=db
        this.email=em
        this.password=pwd
        this.mobile=mb
        this.address=addr
        this.role=rl
    }
    
}