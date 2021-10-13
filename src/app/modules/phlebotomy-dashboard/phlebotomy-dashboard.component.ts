import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentI } from 'src/app/shared/models/students.model';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './phlebotomy-dashboard.component.html',
  styleUrls: ['./phlebotomy-dashboard.component.scss']
})
export class PhlebotomyDashboardComponent implements OnInit {
  students: StudentI[];
  loading: boolean = false;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
  selected: { startDate: Date; endDate: Date };
  getRequests = [];
  showDonorDateBtns = false;
  mockData = [
    {
      id: 1,
      number: '8725363',
      donorDetails: 'View',
      progress: [
        { key: 'Receptionist', value: true },
        { key: 'CBC', value: true },
        { key: "Dr's Room", value: true },
        { key: 'Phlebotomy', value: true },
        { key: 'Done', value: true }
      ],
      statusProgress: 'Stopped',
      reason: 'Fainted'
    },
    {
      id: 1,
      number: '8725363',
      donorDetails: 'View',
      progress: [
        { key: 'Receptionist', value: true },
        { key: 'CBC', value: false },
        { key: "Dr's Room", value: false },
        { key: 'Phlebotomy', value: false },
        { key: 'Done', value: false }
      ],
      statusProgress: 'Stopped',
      reason: 'Fainted'
    },
    {
      id: 1,
      number: '8725363',
      donorDetails: 'View',
      progress: [
        { key: 'Receptionist', value: true },
        { key: 'CBC', value: true },
        { key: "Dr's Room", value: true },
        { key: 'Phlebotomy', value: false },
        { key: 'Done', value: false }
      ],
      statusProgress: 'Stopped',
      reason: 'Fainted'
    }
  ];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  firstFormGroup1: FormGroup;
  secondFormGroup2: FormGroup;
  nextDonor: boolean = false;
  animal: string;
  name: string;
  list = [
    { key: 'Donor Name', value: 'Hammad Salem Naser' },
    { key: 'Donor ID', value: '784-1234-1234567-1' },
    { key: 'Donor Number', value: '9876623' }
  ];

  list2 = [
    { key: 'Blood Group', value: 'Hammad Salem Naser' },
    { key: 'Collection Date', value: '784-1234-1234567-1' },
    { key: 'Expires', value: '9876623' },
    { key: 'Unit Numbert', value: '7/10/21 11:30 AM' }
  ];

  list3 = [
    { key: 'Donor Name', value: 'Hammad Salem Naser' },
    { key: 'Blood Group', value: 'AB-' },
    { key: 'Full Name', value: 'Bruno Den' },
    { key: 'Gender', value: 'Male' },
    { key: 'DOB', value: '07/05/22' },
    { key: 'Weight', value: '75 Kgs' },
    { key: 'Address', value: 'business bay, sky towers, 12th floor' },
    { key: 'Contact', value: '+97156437624' },
    { key: 'Blood Quantity', value: '360' },
    { key: 'Collection Date', value: ': 07/10/21' }
  ];

  pageNumber = 1;
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
  generateLabel() {}
  printLabel() {}
  ngOnInit(): void {
    this.getPage(1);
    this.loading = true;
    setTimeout(() => (this.loading = false), 1000);
  }
  submitEvent() {
    if (this.pageNumber == 2) return (this.pageNumber = 0);
    this.pageNumber++;
    console.log('submitEvent');
  }
  openDonorDialog(): void {
    const dialogRef = this.dialogRef.open(DonorDetailsComponent, {
      data: { list: this.list3 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openStaffDialog() {
    this.openSigntureComp();
  }
  submit() {
    this.nextDonor = true;
  }
  openSigntureComp(): void {}

  nextStep() {}
  showDonorDateBtnsHandler(flag) {
    console.log(flag, 'flag');
    this.showDonorDateBtns = flag;
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

  approveStudent(studentId) {}
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './donorDetails.html'
})
export class DonorDetailsComponent {
  dataList = [];
  constructor(public dialogRef: MatDialogRef<DonorDetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {
   this.dataList = data['list']

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
