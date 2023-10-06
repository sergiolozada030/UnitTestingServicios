import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  MOCK_NEW_PRODUCT,
  MOCK_PRODUCTOS,
} from '../shared/mocks/products.mock';
import { environment } from 'src/environments/environment';
import { HttpStatusCode } from '@angular/common/http';

fdescribe('ProductsService', () => {
  let service: ProductsService;
  let httpController: HttpTestingController;
  const responseProduct = { ...MOCK_PRODUCTOS[0] };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
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
  });

  it('should return new product', (doneFn) => {
    service.create(MOCK_NEW_PRODUCT).subscribe((data) => {
      expect(data).toEqual(responseProduct);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products`;
    const req = httpController.expectOne(url);
    req.flush(responseProduct);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(MOCK_NEW_PRODUCT);
  });

  it('Test Method Put', (doneFn) => {
    const id = '204';
    service.update(id, MOCK_NEW_PRODUCT).subscribe((data) => {
      expect(data).toEqual(responseProduct);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products/${id}`;
    const req = httpController.expectOne(url);
    req.flush(responseProduct);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(MOCK_NEW_PRODUCT);
  });

  it('Test Method Delete', (doneFn) => {
    const responseDelete = true;
    const id = '204';
    service.delete(id).subscribe((data) => {
      expect(data).toEqual(responseDelete);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products/${id}`;
    const req = httpController.expectOne(url);
    req.flush(responseDelete);
    expect(req.request.method).toEqual('DELETE');
  });

  it('should getOne return product', (doneFn) => {
    const id = '204';
    service.getOne(id).subscribe((data) => {
      expect(data).toEqual(responseProduct);
      doneFn();
    });

    // httpConfig
    const url = `${environment.API_URL}/api/v1/products/${id}`;
    const req = httpController.expectOne(url);
    req.flush(responseProduct);
    expect(req.request.method).toEqual('GET');
  });

  describe('Test getOne Errors', () => {
    it('Test getOne Error 404', (doneFn) => {
      const msgError = '404 error';
      const mockError = {
        status: HttpStatusCode.NotFound,
        statusText: msgError,
      };

      const id = '204';
      service.getOne(id).subscribe({
        error: (error) => {
          expect(error).toEqual('El producto no existe');
          doneFn();
        },
      });

      // httpConfig
      const url = `${environment.API_URL}/api/v1/products/${id}`;
      const req = httpController.expectOne(url);
      expect(req.request.method).toEqual('GET');
      req.flush(msgError, mockError);
    });

    it('Test getOne Error 409', (doneFn) => {
      const msgError = '409 error';
      const mockError = {
        status: HttpStatusCode.Conflict,
        statusText: msgError,
      };

      const id = '204';
      service.getOne(id).subscribe({
        error: (error) => {
          expect(error).toEqual('Algo esta fallando en el server');
          doneFn();
        },
      });

      // httpConfig
      const url = `${environment.API_URL}/api/v1/products/${id}`;
      const req = httpController.expectOne(url);
      expect(req.request.method).toEqual('GET');
      req.flush(msgError, mockError);
    });
  });
});
