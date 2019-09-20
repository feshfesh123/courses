import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';
import { Exercise } from '../exercise';
import { CourseService } from '../course.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DialogDownloadComponent } from '../dialog-download/dialog-download.component';
@Component({
  selector: 'app-course-exercises',
  templateUrl: './course-exercises.component.html',
  styleUrls: ['./course-exercises.component.scss']
})
export class CourseExercisesComponent implements OnInit {
  constructor(
    private service: CourseService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  downloadClick(exercise){
    let dialogDownload = this.dialog.open(DialogDownloadComponent, 
      {data :{
        title: exercise.title,
        deadline: exercise.deadline,
        exercise: exercise}});
  }
}
