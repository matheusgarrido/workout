import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { exerciseType } from '../exercise-insert/exercise-insert.component';

export type statusWorkout = 'notInitialized' | 'exercise' | 'rest' | 'finished';

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnChanges {
  @Input() exercises: exerciseType[] = [];
  @Input() displayTime: number = 0;
  // status: statusWorkout = 'notInitialized';
  timer: number = 0;
  status: statusWorkout = 'notInitialized';

  setDisplayTime(value: number) {
    // console.log(value);
    this.displayTime = value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
