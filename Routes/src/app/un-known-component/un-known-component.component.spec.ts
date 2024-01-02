import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnKnownComponentComponent } from './un-known-component.component';

describe('UnKnownComponentComponent', () => {
  let component: UnKnownComponentComponent;
  let fixture: ComponentFixture<UnKnownComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnKnownComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnKnownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
