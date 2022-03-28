import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpClientStub: HttpClient;

  beforeEach(() => {
    httpClientStub = {} as HttpClient;
    service = new ApiService(httpClientStub)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
