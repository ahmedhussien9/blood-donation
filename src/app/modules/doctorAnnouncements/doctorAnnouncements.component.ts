import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentI } from 'src/app/shared/models/students.model';
import { GenerateBarcodeDialogComponent } from '../queue/components/generate-barcode-dialog/generate-barcode-dialog.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctorAnnouncements.component.html',
  styleUrls: ['./doctorAnnouncements.component.scss']
})
export class DoctorAnnouncementsComponent implements OnInit {
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
      title: 'Urgent Case: Serious Accident Condition',
      bloodType: 'B+',
      phone: '+98985656555',
      date: '28-11-2021 to 31-12-2021',
      organizer: 'EHS Hospital'  ,
      requirements: 'Must be in good health and feeling very well. Must weight at least 110 lbs.      '
    },
    {
      title: 'Urgent Case: Serious Accident Condition',
      bloodType: 'B+',
      phone: '+98985656555',
      date: '28-11-2021 to 31-12-2021',
      organizer: 'EHS Hospital'  ,
      requirements: 'Must be in good health and feeling very well. Must weight at least 110 lbs.      '
    },
    {
      title: 'Urgent Case: Serious Accident Condition',
      bloodType: 'B+',
      phone: '+98985656555',
      date: '28-11-2021 to 31-12-2021',
      organizer: 'EHS Hospital'  ,
      requirements: 'Must be in good health and feeling very well. Must weight at least 110 lbs.      '
    }
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
      from: ['']
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
    const dialogRef = this.dialogRef.open(GenerateBarcodeDialogComponent, {
      maxWidth: '90%',
      width: '500px',
      minHeight: '200px',
      disableClose: true,
      data: data
    });
    dialogRef
      .afterClosed()
      // .pipe(takeUntil(this.$destroy))
      .subscribe();
  }

  approveStudent(studentId) {}
}
