import { TestBed } from '@angular/core/testing';

import { ErrorPrintingService } from './error-printing.service';

describe('ErrorPrintingService', () => {
  let service: ErrorPrintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorPrintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
