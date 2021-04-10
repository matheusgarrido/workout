import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseInsertComponent } from './exercise-insert.component';

describe('ExerciseInsertComponent', () => {
  let component: ExerciseInsertComponent;
  let fixture: ComponentFixture<ExerciseInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseInsertComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
