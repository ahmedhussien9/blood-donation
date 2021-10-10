import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentI } from 'src/app/shared/models/students.model';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  students: StudentI[];
  loading: boolean = true;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
  selected: { startDate: Date; endDate: Date };
  getRequests = [];
  constructor(
    @Optional() public dialogRef: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {
    this.initFormFilter();
  }

  initFormFilter() {
    return (this.formGroup = this.fb.group({
      page: [1],
      search: [''],
      to: [''],
      from: [''],
    }));
  }

  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page) {
    this.loading = true;
    this.page = page;
    this.formGroup.get('page').setValue(page);

    const tickets = [
      {
        id:1, 
        name: "Ahmed",
        mobile: "+2012121121211",

      }
    ]
    // this.httpTesterService
    //   .getTesterApi(this.formGroup.value, 'true')
    //   .pipe(
    //     tap((data) => {
    //       this.students = data['body'].users;
    //       this.totalItems = data['body'].length;
    //       this.loading = false;
    //     }),
    //     finalize(() => (this.loading = false))
    //   )
    //   .subscribe();
  }

  displayAttachments(attachments, title, image) {
    // const dialogRef = this.dialogRef.open(AttachmentsDialogComponent, {
    //   maxWidth: '90%',
    //   width: '500px',
    //   minHeight: '200px',
    //   disableClose: true,
    //   data: {
    //     attachments: attachments,
    //     title: title,
    //     image: image,
    //   },
    // });
    // dialogRef
    //   .afterClosed()
    //   // .pipe(takeUntil(this.$destroy))
    //   .subscribe();
  }

  approveStudent(studentId) {
  }
}
