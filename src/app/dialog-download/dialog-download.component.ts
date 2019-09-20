import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from '../course.service';
import { NgForm } from '@angular/forms';
@Component({  
  selector: 'app-dialog-download',
  templateUrl: './dialog-download.component.html',
  styleUrls: ['./dialog-download.component.css']
})
export class DialogDownloadComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private toastr: ToastrService,
    private service: CourseService
  ) { }

  ngOnInit() {
  }

  code: string;
  valid: boolean;
  downloadFile(id: number, isValid: boolean){
    if (isValid){
      console.log(isValid);
      this.toastr.success("Đang tạo liên kết tải về vui lòng chờ", "Thành công");
      this.service.downloadFile(id);
    } 
    else this.toastr.error("Vui lòng nhập lại hoặc liên hệ Admin để lấy code", "Code sai");
  }

  onSubmit(){
    this.service.checkCode(this.code).then(res => {
      this.valid = res;
      this.downloadFile(this.data.exercise.id, this.valid);
    });
    //this.downloadFile(this.data.exercise.id, this.service.codeValid);
  }

}
