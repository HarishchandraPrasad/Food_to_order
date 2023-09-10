import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  // arrCourses:Course[]=[]
  // course:Course= new Course('')
  // constructor(private courseServices:CourseService){
  //   this.courseServices.getCourses().subscribe(data=>{
  //     this.arrCourses=data
  //     console.log(this.arrCourses)
  //   })
  // }

  // addcou(cou:string){
  //   let u = new Course(cou)
  //   this.courseServices.addCourse(u).subscribe(data=>{
  //     this.course=data
  //   })
  // }

  

}
