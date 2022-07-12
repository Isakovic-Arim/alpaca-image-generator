import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsAccessorizeComponent } from './options-accessorize.component';

describe('OptionsAccessorizeComponent', () => {
  let component: OptionsAccessorizeComponent;
  let fixture: ComponentFixture<OptionsAccessorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsAccessorizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsAccessorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
