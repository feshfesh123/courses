import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseExercisesComponent } from './course-exercises.component';

describe('CourseExercisesComponent', () => {
  let component: CourseExercisesComponent;
  let fixture: ComponentFixture<CourseExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
