import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './doctor-dash.component.html',
  styleUrls: ['./doctor-dash.component.scss']
})
export class DoctorDashboardComponent implements OnInit {
  @ViewChild('donut', { static: false }) donut: ElementRef;
  // @ViewChild('cbcPieChart', { static: false }) cbcPieChart: ElementRef;

  @ViewChild('mychart', { static: false }) mychart: ElementRef;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
  ngOnInit() {}
  constructor() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.renderDounts();
     this.renderLineChart();
    this.renderBarChart();
  }

  renderDounts() {
    let donutCtx = this.donut.nativeElement.getContext('2d');
    // let cbcPieChartCtx = this.cbcPieChart.nativeElement.getContext('2d');

    var data = {
      labels: ['phlebotomy', 'deferred'],
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

    // var chart = new Chart(cbcPieChartCtx, {
    //   type: 'doughnut',

    //   data: cbcPieChartData,
    //   options: {
    //     cutoutPercentage: 50,
    //     legend: {
    //       labels: {
    //         fontFamily: '"Poppins", sans-serif'
    //       }
    //     },
    //     animation: {
    //       animateScale: true,
    //       animateRotate: false
    //     }
    //   }
    // });
  }
  renderLineChart() {
    let lineCtx = this.mychart.nativeElement.getContext('2d');
    var data = {
      labels:  ["","CBC results", "Questionnaire Revision", ""],

      datasets: [
        {
          label: 'Reasons of deferral and % of each',
          backgroundColor: '#123c96',
          borderColor: '#5280e2',
          borderWidth: 3,
          hoverBackgroundColor: '#7f53ac',
          hoverBorderColor: '#647dee',
          data: [20, 10,55,16,5,56,51,65,]
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
        x: {
          type: 'time',
          time: {
            displayFormats: {
              quarter: 'MMM YYYY'
            }
          }
        },
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
    let myChart = new Chart(lineCtx, {
      type: 'bar',
      data: data,
      ...options
    });
  }

  renderBarChart() {
    let barCtx = this.barChart.nativeElement.getContext('2d');
    var data = {
      labels:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],

      datasets: [
        {
          label: 'Reasons of deferral and % of each',
          backgroundColor: '#123c96',
          borderColor: '#5280e2',
          borderWidth: 3,
          hoverBackgroundColor: '#7f53ac',
          hoverBorderColor: '#647dee',
          data: [20, 10,55,16,5,56,51,65,]
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
        x: {
          type: 'time',
          time: {
            displayFormats: {
              quarter: 'MMM YYYY'
            }
          }
        },
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
