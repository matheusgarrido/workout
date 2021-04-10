import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { exerciseType } from '../exercise-insert/exercise-insert.component';

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnChanges {
  @Input() exercises: exerciseType[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
