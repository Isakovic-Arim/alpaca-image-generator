import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsStyleComponent } from './options-style.component';

describe('OptionsStyleComponent', () => {
  let component: OptionsStyleComponent;
  let fixture: ComponentFixture<OptionsStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
