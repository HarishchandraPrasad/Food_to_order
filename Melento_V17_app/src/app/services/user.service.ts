import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs';
import { User } from '../models/user';
import { User_Jwt } from '../models/user_JWT';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:3000"
  
  arrUsers:User[]=[
    // new User(1,"Harish","chandu","2022-10-25","harish@hmail.com","harish1234","12345678",
    // new Address(1,'23','8th Main','Mvm','Blr','India',"532216"),"user"),
    // new User(2,"Prasad","chandu","2000-09-10","prasad@hmail.com","prasad1234","12345678",
    // new Address(1,'23','8th Main','Mvm','Blr','India',"532216"),"user")
  ]
  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
     })
    }
  

  constructor(private httpClient:HttpClient) { 

  }

  // getUsers(){
  //   return this.arrUsers
  // }
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl + '/users')
    .pipe(      
      catchError(this.httpError)
    );
  }

  // loginUser(u:any):{

  // }



  getUserById(uid:number): Observable<User>{
    return this.httpClient.get<User>(this.baseUrl + '/users/'+uid)
    .pipe(      
      catchError(this.httpError)
    );
  }

  // getUserById(uid:number){
  //   let user=new User(0,'','','','','','',new Address(0,'','','','','',''),'user')
  //   for(var i=0;i<this.arrUsers.length;i++){
  //     if(uid==this.arrUsers[i].id){
  //       user=this.arrUsers[i]
  //       return user
  //     }
  //   }
  //   return user   
  // }

  // addUser(u:User){
  //   this.arrUsers.push(u)
  //   console.log(this.arrUsers)
  // }

  addUser(u:User): Observable<any>{
    return this.httpClient.post<User>(this.baseUrl+'/users',JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  // updateUser(u:User){
  //   for(var i=0;i<this.arrUsers.length;i++){
  //     if(u.id==this.arrUsers[i].id){
  //       this.arrUsers[i]=u
  //     }
  //   }
  //   this.arrUsers.forEach(u=>{
  //     console.log(u)
  //   })
  // }

  updateUser(u:User): Observable<User>{
    return this.httpClient.put<User>(this.baseUrl+'/users/'+u.id,JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  // deleteUser(uid:number){
  //   for(let i=0;i<this.arrUsers.length;i++){
  //     if(uid==this.arrUsers[i].id){
  //       this.arrUsers.splice(i,1)
  //     }
  //   }
  // }

  deleteUser(uid:number): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/users/'+uid)
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
