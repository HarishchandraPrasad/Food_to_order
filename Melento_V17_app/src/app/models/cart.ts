export class Cart{
    id:number
    user_id:number
    dish_ids:number[]
    number_of_each_dish:number[]
    cart_restaurant_id:number
    total:number
    
    constructor(i:number,u_id:number,d_ids:number[],num_dishes:number[],c_r_i:number,tot:number){
        this.id=i
        this.user_id=u_id
        this.dish_ids=d_ids
        this.number_of_each_dish=num_dishes
        this.cart_restaurant_id=c_r_i
        this.total=tot
    }
}