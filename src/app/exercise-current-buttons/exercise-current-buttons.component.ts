import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { statusWorkout } from '../workout/workout.component';

export type buttonList = 'continue' | 'restart' | 'next' | 'previous';

@Component({
  selector: 'exercise-current-buttons',
  templateUrl: './exercise-current-buttons.component.html',
  styleUrls: ['./exercise-current-buttons.component.scss'],
})
export class ExerciseCurrentButtonsComponent implements OnChanges {
  @Input() status: statusWorkout = 'exercise';
  @Output()
  btnClick = new EventEmitter<buttonList>();

  continueExercise() {
    this.btnClick.emit('continue');
  }
  restartExercise() {
    this.btnClick.emit('restart');
  }
  nextExercise() {
    this.btnClick.emit('next');
  }
  previousExercise() {
    this.btnClick.emit('previous');
  }
  ngOnChanges(changes: SimpleChanges) {
    this.status = changes.status.currentValue;
  }
}
