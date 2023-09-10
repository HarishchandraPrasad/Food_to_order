export class Order{
    id:number
    restaurant_id:number
    order_date:string
    dishes_id:number[]
    num_of_dishes1:number[]
    user_id:number
    order_total:number
    payment_mode:string
    
    constructor(i:number,r_id:number,o_d:string,d_id:number[],n_o_d:number[],u_id:number,o_t:number,P_M:string){
        this.id=i
        this.restaurant_id=r_id
        this.order_date=o_d
        this.dishes_id=d_id
        this.num_of_dishes1=n_o_d
        this.user_id=u_id
        this.order_total=o_t
        this.payment_mode=P_M
    }
}