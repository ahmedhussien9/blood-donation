import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

   signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 700,
    'canvasHeight': 300,

    
  };
  constructor(
    public dialogRef: MatDialogRef<any>) {}

  ngOnInit(): void {
  }
  submitSignature(){
    console.log('done signature')
    this.dialogRef.close();
  }

 cancelDialog(){
  this.dialogRef.close();
 }

 ngAfterViewInit() {
  // this.signaturePad is now available
  this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
  this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
}

drawComplete() {
  // will be notified of szimek/signature_pad's onEnd event
  console.log(this.signaturePad.toDataURL());
}

drawStart() {
  // will be notified of szimek/signature_pad's onBegin event
  console.log('begin drawing');
}
clear(){
  this.signaturePad.clear();
}
}
