import { TestBed, inject } from '@angular/core/testing';

import { WishesService } from './wishes.service';

describe('WishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishesService]
    });
  });

  it('should be created', inject([WishesService], (service: WishesService) => {
    expect(service).toBeTruthy();
  }));
});
