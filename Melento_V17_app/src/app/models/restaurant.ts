import { Address } from "./address"
import { Dish } from "./dish"

export class Restaurant{
    id:number
    r_owner_id:number
    r_Name:string
    r_Img_Path:string
    r_Addresses:Address[]
    r_dishes:Dish[]

    constructor(i:number,r_o_i:number,r_N:string,r_I:string,r_Add:Address[],r_D:Dish[]){
        this.id=i
        this.r_owner_id=r_o_i
        this.r_Name=r_N
        this.r_Img_Path=r_I
        this.r_Addresses=r_Add
        this.r_dishes=r_D
    }
}