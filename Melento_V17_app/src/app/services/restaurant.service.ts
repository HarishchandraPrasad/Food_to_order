import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  baseUrl:string="http://localhost:3000"
  arrRestaurants:Restaurant[]=[//new Restaurant(1,'Ganesh Food Joint','../assets/images/restaurants/dosa.jpeg',[
  //   new Address(0,'25','5th Main','Mvm','Blr','India','333333'),
  //   new Address(0,'35','7th Main','Rajajinagar','Blr','India','555555'),
  // ],[new Dish(1,1,'Biryani',' mixed rice dish originating among the Muslims of South Asia',250,false),
  // new Dish(2,1,'Noodles','piece of pasta, especially a long, skinny one',100,true)]),

  // new Restaurant(1,'Truffles','../assets/images/restaurants/cake.jpeg',[
  //   new Address(0,'12','9th Cross','Indira Nagar','Blr','India','777777'),
  //   new Address(0,'35','23rd Cross','Koramangala','Blr','India','666666'),
  // ],[new Dish(1,1,'Biryani',' mixed rice dish originating among the Muslims of South Asia',250,false),
  // new Dish(2,1,'Noodles','piece of pasta, especially a long, skinny one',100,true)])
  ]
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
     })
    }

  constructor(private httpClient:HttpClient) { }
  
    // getRestaurants(){
    //   return this.arrRestaurants
    // }
    
    getRestaurants(): Observable<Restaurant[]>{
      return this.httpClient.get<Restaurant[]>(this.baseUrl + '/restaurants')
      .pipe(      
        catchError(this.httpError)
      );
    }

    getRestaurantById(uid:number): Observable<Restaurant>{
      
      return this.httpClient.get<Restaurant>(this.baseUrl + '/restaurants/'  +uid)
      .pipe(      
        catchError(this.httpError)
      );
    }


    // addRestaurant(r:Restaurant){
    //   this.arrRestaurants.push(r)
    // }

    addRestaurant(u:Restaurant): Observable<Restaurant>{
      console.log(JSON.stringify(u))
      return this.httpClient.post<Restaurant>(this.baseUrl+'/restaurants',JSON.stringify(u),this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.httpError)
      );
    }

    updateRestaurant(u:Restaurant): Observable<Restaurant>{
      console.log(JSON.stringify(u))
      return this.httpClient.put<Restaurant>(this.baseUrl+'/restaurants/'+u.id,JSON.stringify(u),this.httpHeader)
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
