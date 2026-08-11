import { TestBed } from '@angular/core/testing';

import { Celulares } from './juegos';

describe('Celulares', () => {
  let service: Celulares;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Celulares);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
