import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCurrentButtonsComponent } from './exercise-current-buttons.component';

describe('ExerciseCurrentButtonsComponent', () => {
  let component: ExerciseCurrentButtonsComponent;
  let fixture: ComponentFixture<ExerciseCurrentButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseCurrentButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCurrentButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
