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
  @Output() setDisplayTime = new EventEmitter<number>();
  @Output() setCurrentRep = new EventEmitter<number[]>();
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
    this.updateDisplayTime();
  }

  updateDisplayTime() {
    switch (this.status) {
      case 'exercise':
        console.log(this.exercises[this.currentExercise].time);
        this.setDisplayTime.emit(
          this.exercises[this.currentExercise].time as number
        );
        break;
      case 'rest':
        console.log(this.timer);
        this.setDisplayTime.emit(this.timer as number);
        break;
      default:
        this.setDisplayTime.emit(0);
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
    this.setCurrentRep.emit([this.currentRepetition, this.currentExercise]);
  }
  restartExercise() {
    this.status = 'exercise';
    this.currentRepetition = 0;
    this.setCurrentRep.emit([this.currentRepetition, this.currentExercise]);
  }
  nextExercise() {
    this.changeExercise();
    this.currentExercise++;
    this.setCurrentRep.emit([this.currentRepetition, this.currentExercise]);
  }
  previousExercise() {
    this.changeExercise();
    this.currentExercise--;
    this.setCurrentRep.emit([this.currentRepetition, this.currentExercise]);
  }
  ngOnInit(): void {
    this.setDisplayTime.emit(this.exercises[0].time as number);
    this.setCurrentRep.emit([this.currentRepetition, this.currentExercise]);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.status = changes.status.currentValue;
    this.exercises = changes.exercises.currentValue;
    this.timer = changes.timer.currentValue;
  }
}
