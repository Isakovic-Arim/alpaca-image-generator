import { TestBed } from '@angular/core/testing';

import { ButtonInteractionService } from './button-interaction.service';

describe('ButtonInteractionService', () => {
  let service: ButtonInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
