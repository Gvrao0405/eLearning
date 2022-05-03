import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentforumComponent } from './studentforum.component';

describe('StudentforumComponent', () => {
  let component: StudentforumComponent;
  let fixture: ComponentFixture<StudentforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentforumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
