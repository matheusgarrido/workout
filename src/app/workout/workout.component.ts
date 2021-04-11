import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { exerciseType } from '../exercise-insert/exercise-insert.component';

export type statusWorkout = 'notInitialized' | 'exercise' | 'rest' | 'finished';

const currentYear = new Date().getFullYear();
@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnChanges {
  @Input() exercises: exerciseType[] = [];
  @Input() displayTime: number = 0;
  timer: number = 0;
  currentRep: number[] = [0, 0];
  status: statusWorkout = 'notInitialized';
  year: string = '2021' + (currentYear > 2021 ? ` - ${currentYear}` : '');

  setDisplayTime(value: number) {
    this.displayTime = value;
    if (!value) this.status = 'finished';
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
