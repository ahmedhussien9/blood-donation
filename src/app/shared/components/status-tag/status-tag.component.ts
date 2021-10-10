import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.scss'],
})
export class StatusTagComponent implements OnInit {
  @Input() className: string | 'done' | 'pending';
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}
}
