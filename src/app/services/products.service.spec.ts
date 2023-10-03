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

  it('getAll return value', (doneFn) => {
    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(MOCK_PRODUCTOS.length);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products`;
    const req = httpController.expectOne(url);
    req.flush(MOCK_PRODUCTOS);
    httpController.verify();
  });

  it('getAll return value with taxes', (doneFn) => {
    service.getAll().subscribe((data) => {
      expect(data[0].taxes).toEqual(19);
      expect(data[1].taxes).toEqual(380);
      expect(data[2].taxes).toEqual(0);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products`;
    const req = httpController.expectOne(url);
    req.flush(MOCK_PRODUCTOS);
    httpController.verify();
  });

  it('getAll with query params (limit and offset)', (doneFn) => {
    const limit = 10;
    const offset = 3;

    service.getAll(limit, offset).subscribe((data) => {
      expect(data[0].taxes).toEqual(19);
      expect(data[1].taxes).toEqual(380);
      expect(data[2].taxes).toEqual(0);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products?limit=${limit}&offset=${offset}`;
    const req = httpController.expectOne(url);
    req.flush(MOCK_PRODUCTOS);
    const params = req.request.params;
    expect(params.get('limit')).toEqual(`${limit}`);
    expect(params.get('offset')).toEqual(`${offset}`);
    httpController.verify();
  });
});
