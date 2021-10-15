

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './receptionist-dash.component.html',
  styleUrls: ['./receptionist-dash.component.scss'],
})
export class ReceptionistDashboardComponent implements OnInit {

  @ViewChild('donut', { static: false }) donut: ElementRef;
  @ViewChild('cbcPieChart', { static: false }) cbcPieChart: ElementRef;

  @ViewChild('mychart', { static: false }) mychart: ElementRef;
  @ViewChild('barChart', { static: false }) barChart: ElementRef;
  ngOnInit() {}
  constructor() {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    // this.renderDounts();
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


  renderBarChart() {
    let barCtx = this.barChart.nativeElement.getContext('2d');
    var data = {
      labels: ['','called', 'booked',''],

      datasets: [
        {
          label: 'Number of donors',
          backgroundColor: '#123c96',
          borderColor: '#5280e2',
          borderWidth: 3,
          hoverBackgroundColor: '#7f53ac',
          hoverBorderColor: '#647dee',
          data: [30, 50, 100]
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
