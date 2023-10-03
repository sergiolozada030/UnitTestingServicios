import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MOCK_PRODUCTOS } from '../shared/mocks/products.mock';
import { environment } from 'src/environments/environment';

fdescribe('ProductsService', () => {
  let service: ProductsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllSimple return value', (doneFn) => {
    service.getAllSimple().subscribe((data) => {
      expect(data).toEqual(MOCK_PRODUCTOS);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products`;
    const req = httpController.expectOne(url);
    req.flush(MOCK_PRODUCTOS);
    httpController.verify();
  });
});
