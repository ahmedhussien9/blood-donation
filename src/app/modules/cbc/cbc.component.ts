import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentI } from 'src/app/shared/models/students.model';
import { SignatureComponent } from './signature/signature.component';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-doctor',
  templateUrl: './cbc.component.html',
  styleUrls: ['./cbc.component.scss']
})
export class CbcComponent implements OnInit {
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
  @ViewChild('stepper') private myStepper: MatStepper;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  firstFormGroup1: FormGroup;
  secondFormGroup2: FormGroup;
  nextDonor:boolean =false
  animal: string;
  name: string;
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
    { key: 'Email', value: 'mo@salah.com' }
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

  questionList2 = [
    {
      name: 'Have you ever been tested for HIV ?',
      options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:false
    },
    {
      name: 'Have you ever been refused as a blood donor or told not to donate',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:true
    },
    {
      name: 'Is your reason for donating blood to undergo an HIV test?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:false
    },
    {
      name: 'Have you been in contact with anyone with infectious disease in the last 12 months ?',
       options: [{ name: 'Yes', value: true }, { name: 'No', value: false }],
      value:true
    },
    {
      name: 'In the last 12 months, have you had any immunizations, vaccinations or jabs ?',
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
  submit(){
    this.nextDonor = true
  }
  nextDonorHandler(){
    this.myStepper.reset();
  }
  openSigntureComp(): void {
    const dialogRef = this.dialogRef.open(SignatureComponent, {
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
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
