import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdogsComponent } from './hotdogs.component';

describe('HotdogsComponent', () => {
  let component: HotdogsComponent;
  let fixture: ComponentFixture<HotdogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotdogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotdogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
