import { Component, Input } from '@angular/core';
import { exerciseType } from '../exercise-insert/exercise-insert.component';

@Component({
  selector: 'exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent {
  @Input() exercises: exerciseType[] = [];

  removeExercises(index: number) {
    this.exercises.splice(index, 1);
  }
}
