import { TestBed, inject } from '@angular/core/testing';

import { ClientDocumentService } from './client-document.service';

describe('ClientDocumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientDocumentService]
    });
  });

  it('should be created', inject([ClientDocumentService], (service: ClientDocumentService) => {
    expect(service).toBeTruthy();
  }));
});
