import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError,retry  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string="http://localhost:3000"
  arrCarts:Cart[]=[
    // new Cart(1,1,[1,2],[2,4],0),
    // new Cart(2,2,[2],[3],0)
  ]

  cart=new Cart(0,0,[],[],0,0)
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
     })
    }

  constructor(private httpClient:HttpClient) { }

  getCarts(): Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(this.baseUrl + '/carts')
    .pipe(      
      catchError(this.httpError)
    );
  }


  getCartById(uid:number): Observable<Cart>{
      
    return this.httpClient.get<Cart>(this.baseUrl + '/carts/'  +uid)
    .pipe(      
      catchError(this.httpError)
    );
  }

  addCart(u:Cart): Observable<Cart>{
    console.log(JSON.stringify(u))
    return this.httpClient.post<Cart>(this.baseUrl+'/carts',JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  updateCart(u:Cart): Observable<Cart>{
    console.log(JSON.stringify(u))
    return this.httpClient.put<Cart>(this.baseUrl+'/carts/'+u.id,JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  // getCartById(id:number){
  //   for(let i=0;i<this.arrCarts.length;i++){
  //     if(this.arrCarts[i].id==id){
  //       this.cart=this.arrCarts[i] 
  //       return this.cart
  //    }
  //   }
  //   return this.cart
  // }

  // addToCart(did:number,cartid:number){
  //   for(let i=0;i<this.arrCarts.length;i++){
  //    if(this.arrCarts[i].id==cartid){
  //        this.arrCarts[i].dish_ids.push(did)
  //    }
  //   }

  //   }

  httpError(error:HttpErrorResponse){
    let msg='';
    if(error.error instanceof ErrorEvent){
      msg=error.error.message;
    }
    else{
      msg=`Error Code:${error.status}\nMessafe:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
