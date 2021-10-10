import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ActionButtonComponent implements OnInit {
  @Input() title: string;
  @Input() className: string | 'admitted' | 'proceed';
  @Output() isClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  isClickButton() {
    this.isClicked.emit();
  }
}
