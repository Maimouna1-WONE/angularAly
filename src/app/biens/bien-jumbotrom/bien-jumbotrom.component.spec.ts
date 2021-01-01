import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienJumbotromComponent } from './bien-jumbotrom.component';

describe('BienJumbotromComponent', () => {
  let component: BienJumbotromComponent;
  let fixture: ComponentFixture<BienJumbotromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienJumbotromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienJumbotromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
