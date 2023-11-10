import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaloutputComponent } from './finaloutput.component';

describe('FinaloutputComponent', () => {
  let component: FinaloutputComponent;
  let fixture: ComponentFixture<FinaloutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinaloutputComponent]
    });
    fixture = TestBed.createComponent(FinaloutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
