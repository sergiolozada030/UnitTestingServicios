import { TestBed } from '@angular/core/testing';

import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('valor debe ser "valor inicial"', () => {
    expect(service.getValue()).toBe('valor inicial');
  });

  it('valor debe ser modificado', () => {
    expect(service.getValue()).toBe('valor inicial');
    service.setValue('nuevo valor');
    expect(service.getValue()).toBe('nuevo valor');
  });

  it('valor de la promise es "Promise value"', (doneFn) => {
    service.getPromiseValue().then((value) => {
      expect(value).toBe('Promise value');
      doneFn();
    });
  });

  it('valor de la promise es "Promise value"', async () => {
    const resp = await service.getPromiseValue();
    expect(resp).toBe('Promise value');
  });
});
