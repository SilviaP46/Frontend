import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPrinterComponent } from './error-printer.component';

describe('ErrorPrinterComponent', () => {
  let component: ErrorPrinterComponent;
  let fixture: ComponentFixture<ErrorPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
