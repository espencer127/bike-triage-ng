import { TestBed } from '@angular/core/testing';

import { ControllerService } from './controller-service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { EnvVarService } from './env-var-service';
import { weatherResponse } from '../../resources/test/weatherResponse.json';

describe('ControllerService', () => {
  let service: ControllerService;
  let envVarService: EnvVarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ControllerService,
        EnvVarService
      ]
    });
    envVarService = TestBed.inject(EnvVarService);
    service = TestBed.inject(ControllerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify that no outstanding requests are pending after each test
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return back mock data', () => {
    const mockResponse = weatherResponse;
    service.getWeather().subscribe(data => {
      console.debug("data: " + JSON.stringify(data));
      expect(data).toEqual(weatherResponse);
    });

    const req = httpMock.expectOne(service.apiUrl);

    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);

  });
});
