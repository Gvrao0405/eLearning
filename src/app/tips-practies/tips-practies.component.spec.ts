import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsPractiesComponent } from './tips-practies.component';

describe('TipsPractiesComponent', () => {
  let component: TipsPractiesComponent;
  let fixture: ComponentFixture<TipsPractiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipsPractiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsPractiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
