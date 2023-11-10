import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEmbedComponent } from './dash-embed.component';

describe('DashEmbedComponent', () => {
  let component: DashEmbedComponent;
  let fixture: ComponentFixture<DashEmbedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashEmbedComponent]
    });
    fixture = TestBed.createComponent(DashEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
