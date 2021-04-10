import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCurrentInformationComponent } from './exercise-current-information.component';

describe('ExerciseCurrentInformationComponent', () => {
  let component: ExerciseCurrentInformationComponent;
  let fixture: ComponentFixture<ExerciseCurrentInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseCurrentInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCurrentInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
