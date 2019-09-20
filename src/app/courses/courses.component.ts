import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseExercisesComponent } from '../course-exercises/course-exercises.component';
@Component({
  selector: 'app-courses',
  providers: [ CourseExercisesComponent ],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  
  constructor(
    private service: CourseService,
    private exerciseComp: CourseExercisesComponent
  ) { }

  ngOnInit() {
    this.service.getCourses();
  }
  
  onSelect(course: Course): void{
    this.service.selectedCourse = course;
    this.service.getExercises(course);
  }
}
