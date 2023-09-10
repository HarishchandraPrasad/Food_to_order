export class Dish{
    id:number
    res_Id:number
    d_Name:string
    d_Description:string
    d_Price:number
    d_Veg:boolean
    available:string

    constructor(i:number,r_i:number,d_N:string,d_D:string,d_P:number,d_V:boolean,av:string){
        this.id=i
        this.res_Id=r_i
        this.d_Name=d_N
        this.d_Description=d_D
        this.d_Price=d_P
        this.d_Veg=d_V
        this.available=av
    }

}