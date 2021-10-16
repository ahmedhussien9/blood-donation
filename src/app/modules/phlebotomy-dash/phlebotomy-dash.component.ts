import { Component, ElementRef, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Chart from 'chart.js';
import { StudentI } from 'src/app/shared/models/students.model';



export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-phlebotomy-dash',
  templateUrl: './phlebotomy-dash.component.html',
  styleUrls: ['./phlebotomy-dash.component.scss']
})

export class PhlebotomyDashboardComponent implements OnInit {
  animal: string;
  name: string;
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
  @ViewChild('donut', { static: false }) donut: ElementRef;
  @ViewChild('cbcPieChart', { static: false }) cbcPieChart: ElementRef;

  @ViewChild('mychart', { static: false }) mychart: ElementRef;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
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
  ngOnInit() {}
  constructor(    @Optional() public dialogRef: MatDialog,
  ) {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.renderDounts();
    // this.renderLineChart();
    this.renderBarChart();
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
  renderDounts() {
    let donutCtx = this.donut.nativeElement.getContext('2d');
    // let cbcPieChartCtx = this.cbcPieChart.nativeElement.getContext('2d');

    
    var data = {
      labels: ['deferred', 'completed','stopped'],
      datasets: [
        {
          data: [34, 50,16], // Example data
          backgroundColor: ['#fc5296', '#7f53ac','#e26565']
        }
      ]
    };

    var cbcPieChartData = {
      labels: ['Deferral', 'Accepted'],
      datasets: [
        {
          data: [655, 122], // Example data
          backgroundColor: ['#30da64', '#e26565']
        }
      ]
    };
    var chart = new Chart(donutCtx, {
      type: 'doughnut',

      data: data,
      options: {
        cutoutPercentage: 50,
        legend: {
          labels: {
            fontFamily: '"Poppins", sans-serif'
          }
        },
        animation: {
          animateScale: true,
          animateRotate: false
        }
      }
    });

  //   var chart = new Chart(cbcPieChartCtx, {
  //     type: 'doughnut',

  //     data: cbcPieChartData,
  //     options: {
  //       cutoutPercentage: 50,
  //       legend: {
  //         labels: {
  //           fontFamily: '"Poppins", sans-serif'
  //         }
  //       },
  //       animation: {
  //         animateScale: true,
  //         animateRotate: false
  //       }
  //     }
  //   });
  // }
  // renderLineChart() {
  //   let lineCtx = this.mychart.nativeElement.getContext('2d');
  //   let myChart = new Chart(lineCtx, {
  //     type: 'line',
  //     data: {
  //       datasets: [
  //         {
  //           label: 'Höhenlinie',
  //           backgroundColor: 'rgba(255, 99, 132,0.4)',
  //           borderColor: 'rgb(255, 99, 132)',
  //           fill: true,
  //           data: [
  //             { x: 1, y: 2 },
  //             { x: 2500, y: 2.5 },
  //             { x: 3000, y: 5 },
  //             { x: 3400, y: 4.75 },
  //             { x: 3600, y: 4.75 },
  //             { x: 5200, y: 6 },
  //             { x: 6000, y: 9 }
  //           ]
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive: true,
  //       legend: {
  //         labels: {
  //           fontFamily: '"Poppins", sans-serif'
  //         }
  //       },
  //       title: {
  //         display: true,
  //         text: 'Höhenlinie'
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             type: 'linear',
  //             position: 'bottom',
  //             ticks: {},
  //             gridLines: {
  //               display: false
  //             },
  //             scaleLabel: {
  //               labelString: 'Länge',
  //               display: true
  //             }
  //           }
  //         ],
  //         yAxes: [
  //           {
  //             type: 'linear',
  //             ticks: {},
  //             gridLines: {
  //               display: false
  //             },
  //             scaleLabel: {
  //               labelString: 'Höhe',
  //               display: true
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   });
   }

  renderBarChart() {
    let barCtx = this.barChart.nativeElement.getContext('2d');
    var data = {
      labels: ['','Fainting', 'Anemia', 'Low Blood Pressure', 'High Blood Pressure',''],

      datasets: [
        {
          label: ' Chart for reasons for deferral/stopping',
          backgroundColor: '#123c96',
          borderColor: '#5280e2',
          borderWidth: 3,
          hoverBackgroundColor: '#7f53ac',
          hoverBorderColor: '#647dee',
          data: [10, 15, 30, 20, 25,100]
        }
      ]
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        labels: {
          fontFamily: '"Poppins", sans-serif'
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              display: false
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              beginAtZero: false
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    };

    let myChart = new Chart(barCtx, {
      type: 'bar',
      data: data,
      ...options
    });
  }
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