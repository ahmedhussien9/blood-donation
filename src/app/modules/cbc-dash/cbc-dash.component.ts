import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-cbc-dash',
  templateUrl: './cbc-dash.component.html',
  styleUrls: ['./cbc-dash.component.scss']
})
export class CbcDashboardComponent implements OnInit {
  @ViewChild('donut', { static: false }) donut: ElementRef;
  @ViewChild('cbcPieChart', { static: false }) cbcPieChart: ElementRef;

  @ViewChild('mychart', { static: false }) mychart: ElementRef;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
  ngOnInit() {}
  constructor() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.renderDounts();
    // this.renderLineChart();
    this.renderBarChart();
  }

  renderDounts() {
    let donutCtx = this.donut.nativeElement.getContext('2d');
    let cbcPieChartCtx = this.cbcPieChart.nativeElement.getContext('2d');

    
    var data = {
      labels: ['successful', 'Failed'],
      datasets: [
        {
          data: [724, 494], // Example data
          backgroundColor: ['#fc5296', '#7f53ac']
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

    var chart = new Chart(cbcPieChartCtx, {
      type: 'doughnut',

      data: cbcPieChartData,
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
  }
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
  // }

  renderBarChart() {
    let barCtx = this.barChart.nativeElement.getContext('2d');
    var data = {
      labels: ['','High blood pressure', 'Low blood pressure', 'Hemoglobin', 'Infections', 'On Medicationay',''],

      datasets: [
        {
          label: 'Reasons of deferral and % of each',
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
