import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GstrprComponent } from './gstrpr.component';

describe('GstrprComponent', () => {
  let component: GstrprComponent;
  let fixture: ComponentFixture<GstrprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GstrprComponent]
    });
    fixture = TestBed.createComponent(GstrprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
