import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoTable',
  templateUrl: './infoTable.component.html',
  styleUrls: ['./infoTable.component.scss']
})
export class InfoTableComponent implements OnInit {
  @Input() list;
  constructor() { }

  ngOnInit(): void {
  }

}
