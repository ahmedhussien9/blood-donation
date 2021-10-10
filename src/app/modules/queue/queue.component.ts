import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentI } from 'src/app/shared/models/students.model';
import { GenerateBarcodeDialogComponent } from './components/generate-barcode-dialog/generate-barcode-dialog.component';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  students: StudentI[];
  loading: boolean = false;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
  selected: { startDate: Date; endDate: Date };
  getRequests = [];
  mockData = [
    {
      ticketId: 1,
      progress: 'Done',
      action: 'admitted',
      donorData: {
        name: 'Ahmed Khattab',
        mobile: '+201000322322',
        emirateId: '65656566565',
        nationality: 'United Arab Emirates',
      },
    },
    {
      ticketId: 2,
      progress: 'Pending',
      action: 'proceed',
      donorData: {
        name: 'Mohamed Salah',
        mobile: '+201300322322',
        emirateId: '9835565655',
        nationality: 'United Arab Emirates',
      },
    },
  ];
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
    // this.loading = true;
    // this.page = page;
    // this.formGroup.get('page').setValue(page);
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

  openDialogBarCode(data) {
    if (data.action == 'proceed') {
      const dialogRef = this.dialogRef.open(GenerateBarcodeDialogComponent, {
        maxWidth: '90%',
        width: '700px',
        minHeight: '300px',
        disableClose: true,
        data: data,
      });
      dialogRef
        .afterClosed()
        // .pipe(takeUntil(this.$destroy))
        .subscribe();
    }
  }

  approveStudent(studentId) {}
}
