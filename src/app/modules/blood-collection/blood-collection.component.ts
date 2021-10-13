import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentI } from 'src/app/shared/models/students.model';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './blood-collection.component.html',
  styleUrls: ['./blood-collection.component.scss']
})
export class BloodCollectionComponent implements OnInit {
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
      name: 'Ahmed Khattab',
      action: 'Admitted',
      progress: 'Done',
     
    },
    {
      id: 1,
      name: 'Ahmed Khattab',
      action: 'Proceed',
      progress: 'Pending',
     
    },
    {
      id: 1,
      name: 'Ahmed Khattab',
      action: 'Proceed',
      progress: 'Pending',
     
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
    { key: 'Donor ID', value: '784-1234-1234567-1' },
    { key: 'Donor Number', value: '9876623' },
    { key: 'Blood Group', value: 'O Rh Negative' },
    { key: 'Collection Date', value: '07/10/21' },
    { key: 'Expires', value: '07/05/22' },
    { key: 'Unit Number', value: '12' }
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
  generateLabel(){

  }
  printLabel(){}
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
  openDonorDialog() {
    this.openSigntureComp();
  }
  openStaffDialog() {
    this.openSigntureComp();
  }
  submit() {
    this.nextDonor = true;
  }
  openSigntureComp(): void {
 
  }

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
