import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { User_Jwt } from '../models/user_JWT';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl_jwt:string="http://localhost:3500"
  arrCourses:Course[]=[]
  token: any=new Object();

  httpHeader={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
     })
    }
   

  constructor(private httpClient:HttpClient) { 

  }

  registerUser(u:User_Jwt): Observable<User_Jwt>{
    return this.httpClient.post<User_Jwt>(this.baseUrl_jwt+'/auth/register',JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
  }
  
  loginUser(u:User_Jwt): string{
    console.log('method called')
    let jwt_result=this.httpClient.post<string>(this.baseUrl_jwt+'/auth/login',JSON.stringify(u),this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    );
    jwt_result.subscribe((data:string)=>{
      this.token=data
      console.log(this.token)
      return this.token
    })
    return "empty"
  }

  getCourses(): Observable<Course[]>{
    return this.httpClient.get<Course[]>(this.baseUrl_jwt + '/courses')
    .pipe(      
      catchError(this.httpError)
    );
  }

  addCourse(c:Course): Observable<Course>{
    let httpHeader_jwt={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'JWT '+this.token['token']
      })
    }
    return this.httpClient.post<Course>(this.baseUrl_jwt+'/courses',JSON.stringify(c),httpHeader_jwt)
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
