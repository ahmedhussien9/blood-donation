import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenerateBarcodeDialogComponent } from '../queue/components/generate-barcode-dialog/generate-barcode-dialog.component';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
})
export class CampaignsComponent implements OnInit {
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
      id: 1,
      name: 'Saving lives together',
      organizer: 'Hospital Ray Hope',
      phone: '+98985656555',
      date: '28-11-2021 to 31-12-2021',
      description:
        'Collecting blood for the children in the Hospitals children cancer center',
    },
    {
      id: 1,
      name: 'Power Donors',
      organizer: 'University of Dubai',
      phone: '+971 5 623 8376',
      date: '28-11-2021 to 31-12-2021',
      description:
        'Blood donation walk-in drive for Rainbow’s cancer center',
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
    const dialogRef = this.dialogRef.open(GenerateBarcodeDialogComponent, {
      maxWidth: '90%',
      width: '500px',
      minHeight: '200px',
      disableClose: true,
      data: data,
    });
    dialogRef
      .afterClosed()
      // .pipe(takeUntil(this.$destroy))
      .subscribe();
  }

  approveStudent(studentId) {}
}
