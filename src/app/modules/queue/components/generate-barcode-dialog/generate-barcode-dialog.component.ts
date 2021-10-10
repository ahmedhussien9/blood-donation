import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generate-barcode-dialog',
  templateUrl: './generate-barcode-dialog.component.html',
  styleUrls: ['./generate-barcode-dialog.component.scss'],
})
export class GenerateBarcodeDialogComponent implements OnInit {
  userData: any;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<GenerateBarcodeDialogComponent>
  ) {
    this.userData = data;
  }

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
