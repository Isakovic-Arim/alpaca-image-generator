import { TestBed } from '@angular/core/testing';

import { VisualInteractionService } from './visual-interaction.service';

describe('VisualInteractionService', () => {
  let service: VisualInteractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualInteractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
