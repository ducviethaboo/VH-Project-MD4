import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { ProductService } from './products.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
=======
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
>>>>>>> c68dc867459c07a8ebf3958e3cbeebd419f518e2

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});