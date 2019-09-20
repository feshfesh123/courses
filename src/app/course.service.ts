import { Injectable } from '@angular/core';
import { Course } from './course';
import { Exercise } from './exercise';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  readonly baseUrl = 'https://courses-web-api.azurewebsites.net/api/';
  courses: Course[];
  selectedCourse: Course;
  exercises: Exercise[];
  codeValid: boolean;

  getCourses(){
    this.http.get<Course[]>(this.baseUrl+'courses').subscribe(res =>
      this.courses = res);
  }

  getExercises(course: Course){
    this.http.get<Exercise[]>(this.baseUrl+'exercises/'+course.id).subscribe(res =>
      this.exercises = res);
  }
  
  downloadFile(id: number){
    this.http.get(this.baseUrl+'download/'+id, {responseType: 'arraybuffer'})
    .subscribe(data => {
      const blob = new Blob([data], {type: 'application/x-rar-compressed'});
      const fileName = 'answer.rar';
      saveAs(blob, fileName);
    });
  }

  checkCode(code: string): Promise<boolean>{
    return this.http.get<boolean>(this.baseUrl+'checkcode/'+code).toPromise();
  }

   constructor(
    private http: HttpClient
  ) { }
}
