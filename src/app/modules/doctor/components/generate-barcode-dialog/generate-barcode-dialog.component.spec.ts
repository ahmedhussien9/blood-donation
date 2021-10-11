import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBarcodeDialogComponent } from './generate-barcode-dialog.component';

describe('GenerateBarcodeDialogComponent', () => {
  let component: GenerateBarcodeDialogComponent;
  let fixture: ComponentFixture<GenerateBarcodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateBarcodeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBarcodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
