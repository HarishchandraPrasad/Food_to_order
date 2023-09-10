import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError,retry, throwError } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl:string="http://localhost:3000"
  arrOrders:Order[]=[]
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
     })
    }

  constructor(private httpClient:HttpClient) { }

  getOrders(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.baseUrl + '/orders')
    .pipe(      
      catchError(this.httpError)
    );
  }

  getOrderById(uid:number): Observable<Order>{
    return this.httpClient.get<Order>(this.baseUrl + '/orders/'+uid)
    .pipe(      
      catchError(this.httpError)
    );
  }

  jsontoexcel(): Observable<string>{
    return this.httpClient.get<string>(this.baseUrl + '/ordersexcel')
    .pipe(      
      catchError(this.httpError)
    );
  }

  addOrder(u:Order): Observable<Order>{
    console.log(JSON.stringify(u))
    return this.httpClient.post<Order>(this.baseUrl+'/orders',JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  updateOrder(u:Order): Observable<Order>{
    console.log(JSON.stringify(u))
    return this.httpClient.put<Order>(this.baseUrl+'/orders/'+u.id,JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

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
