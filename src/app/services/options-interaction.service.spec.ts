import { TestBed } from '@angular/core/testing';

import { OptionsInteractionService } from './options-interaction.service';

describe('OptionsInteractionService', () => {
  let service: OptionsInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionsInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
