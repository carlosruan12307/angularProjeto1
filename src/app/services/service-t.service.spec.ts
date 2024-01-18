import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ServiceTService } from './service-t.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServiceTService', () => {
  let service: ServiceTService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ServiceTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
