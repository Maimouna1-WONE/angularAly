import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBienComponent } from './item-bien.component';

describe('ItemBienComponent', () => {
  let component: ItemBienComponent;
  let fixture: ComponentFixture<ItemBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
