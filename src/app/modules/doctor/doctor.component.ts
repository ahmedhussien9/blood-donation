import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentI } from 'src/app/shared/models/students.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  students: StudentI[];
  loading: boolean = false;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem('LOCALIZE_DEFAULT_LANGUAGE');
  selected: { startDate: Date; endDate: Date };
  getRequests = [];
  showDonorDateBtns = false
  mockData = [
    {
      id: 1,
      name: 'Ahmed Khattab',
      mobile: '+201000322322',
      emirateId: '65656566565',
      status: 'Done',
      nationality: 'United Arab Emirates'
    },
    {
      id: 1,
      name: 'Ahmed Khattab',
      mobile: '+201000322322',
      emirateId: '65656566565',
      status: 'Done',
      nationality: 'United Arab Emirates'
    },
    {
      id: 1,
      name: 'Ahmed Khattab',
      mobile: '+201000322322',
      emirateId: '65656566565',
      status: 'Done',
      nationality: 'United Arab Emirates'
    },
    {
      id: 1,
      name: 'Ahmed Khattab',
      mobile: '+201000322322',
      emirateId: '65656566565',
      status: 'Done',
      nationality: 'United Arab Emirates'
    },
    {
      id: 1,
      name: 'Ahmed Khattab',
      mobile: '+201000322322',
      emirateId: '65656566565',
      status: 'Done',
      nationality: 'United Arab Emirates'
    },
    {
      id: 1,
      name: 'Ahmed Khattab',
      mobile: '+201000322322',
      emirateId: '65656566565',
      status: 'Done',
      nationality: 'United Arab Emirates'
    }
  ];
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  firstFormGroup1: FormGroup;
  secondFormGroup2: FormGroup;
  list = [
    { key: 'Donor Name', value: 'Hammad Salem Naser' },
    { key: 'Donor ID', value: '784-1234-1234567-1' },
    { key: 'Donor Number', value: '9876623' }
  ];
  
  list2 = [
    { key: 'Donor Name', value: 'Hammad Salem Naser' },
    { key: 'Donor ID', value: '784-1234-1234567-1' },
    { key: 'Donor Number', value: '9876623' },
    { key: 'Date of Appointment', value: '7/10/21 11:30 AM' }
  ];
  list3 = [
    { key: 'First Name', value: 'Hammad Salem Naser' },
    { key: 'Last Name', value: '784-1234-1234567-1' },
    { key: 'Gender', value: 'male' },
    { key: 'Occupation', value: '7/10/21 11:30 AM' },
    { key: 'Address', value: 'madia,Egypt' },
    { key: 'Email', value: 'mo@salah.com' },
  ];

  questionList = [
    {
      name: 'Are you feeling well and in good health today ?',
      options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:false
    },
    {
      name: 'In the last 4 hours, have you had a meal or snack?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:true
    },
    {
      name: 'Have you already given blood in the last 16 weeks?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:false
    },
    {
      name: 'Are you pregnant or breastfeeding?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:true
    },
    {
      name: 'Do you have or have you ever had ?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:false
    },
    {
      name: 'Lung disease, tuberculosis, or asthma?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:false
    },
    {
      name: 'Cancer, a blood disease, or abnormal bleeding disorder ?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:false
    }
    

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

  ngOnInit(): void {
    this.getPage(1);
    this.loading = true;
    setTimeout(() => (this.loading = false), 7000);
  }
  submitEvent() {
    if (this.pageNumber == 2) return (this.pageNumber = 0);
    this.pageNumber++;
    console.log('submitEvent');
  }

  openInputDialog(): void {
    const dialogRef = this.dialogRef.open(InputDialogPopup, {
      height: '400px',
      width: '600px',
      data: { list: this.list3 }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result,'The dialog was closed');
      // this.animal = result;
    });
  }
  nextStep() {}
  showDonorDateBtnsHandler(flag){
    console.log(flag,'flag')
    this.showDonorDateBtns = flag
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
  templateUrl: './inputDialogPopup.html'
})
export class InputDialogPopup {
  dataList = [];
  constructor(public dialogRef: MatDialogRef<InputDialogPopup>,@Inject(MAT_DIALOG_DATA) public data: any) {
   

  }
  submitDeferReason(){
    console.log('done signature')
    this.dialogRef.close();
  }

 cancelDialog(){
  this.dialogRef.close();
 }



}