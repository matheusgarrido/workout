import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';
import { statusWorkout } from '../workout/workout.component';
import { exerciseType } from '../exercise-insert/exercise-insert.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { buttonList } from '../exercise-current-buttons/exercise-current-buttons.component';

@Component({
  selector: 'exercise-current-information',
  templateUrl: './exercise-current-information.component.html',
  styleUrls: ['./exercise-current-information.component.scss'],
})
export class ExerciseCurrentInformationComponent implements OnInit, OnChanges {
  @Input() status: statusWorkout = 'exercise';
  @Input() exercises: exerciseType[] = [];
  @Input() timer: number = 0;
  currentExercise = 0;
  currentRepetition = 0;

  get TotalRepetitions(): number {
    if (this.exercises[this.currentExercise].repetitions !== null) {
      return this.exercises[this.currentExercise].repetitions as number;
    }
    return 0;
  }

  buttonClick(btn: buttonList) {
    switch (btn) {
      case 'continue':
        this.continueExercise();
        break;
      case 'restart':
        this.restartExercise();
        break;
      case 'previous':
        this.previousExercise();
        break;
      case 'next':
        this.nextExercise();
        break;
    }
  }
  changeRepetition() {
    this.status = this.status === 'exercise' ? 'rest' : 'exercise';
  }
  changeExercise() {
    this.changeRepetition();
    if (this.status === 'rest') {
      this.currentRepetition = 0;
    }
  }
  continueExercise() {
    this.changeRepetition();
    if (this.status === 'rest') {
      this.currentRepetition++;
      if (
        this.currentRepetition ===
        this.exercises[this.currentExercise].repetitions
      ) {
        this.currentRepetition = 0;
        this.currentExercise++;
      }
    }
    if (
      this.currentExercise === this.exercises.length &&
      this.status === 'exercise'
    ) {
      this.currentExercise = 0;
      this.status = 'finished';
    }
  }
  restartExercise() {
    this.status = 'exercise';
    this.currentRepetition = 0;
  }
  nextExercise() {
    this.changeExercise();
    this.currentExercise++;
  }
  previousExercise() {
    this.changeExercise();
    this.currentExercise--;
  }
  ngOnInit(): void {
    console.log(this.exercises);
    console.log(this.timer);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.status = changes.status.currentValue;
    this.exercises = changes.exercises.currentValue;
    this.timer = changes.timer.currentValue;
  }
}
