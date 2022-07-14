import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRandomComponent } from './button-random.component';

describe('ButtonRandomComponent', () => {
  let component: ButtonRandomComponent;
  let fixture: ComponentFixture<ButtonRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonRandomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
