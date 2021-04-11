import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

const EXERCISES = [
  'Pushup',
  'Lunges',
  'Squats',
  'Burpees',
  'Planks',
  'Side Planks',
].sort((a, b) => a.localeCompare(b));

export interface exerciseType {
  exercise: string;
  time: number | null;
  repetitions: number | null;
}
type exerciseData = 'exercise' | 'time' | 'repetitions' | 'rest';

@Component({
  selector: 'exercise-insert',
  templateUrl: './exercise-insert.component.html',
  styleUrls: ['./exercise-insert.component.scss'],
})
export class ExerciseInsertComponent implements OnInit, OnChanges {
  currentExercise: exerciseType = {
    exercise: '',
    time: null,
    repetitions: null,
  };
  @Input() exercises: exerciseType[] = [];
  restTime: number | null = null;
  filteredExercisesList: string[] = EXERCISES.slice(0, 5);
  @Output() onInsertExercises = new EventEmitter<exerciseType[]>();
  @Output() onStart = new EventEmitter<number>();

  //Refilter the list by input text and exercises added in list
  refilterList() {
    this.filteredExercisesList = EXERCISES.filter((element) => {
      let exerciseAdded = false;
      //Check if has added
      for (let i = 0; i < this.exercises.length; i++) {
        if (
          this.exercises[i].exercise.toLowerCase() === element.toLowerCase()
        ) {
          exerciseAdded = true;
          break;
        }
      }
      //If not added
      //If has the current text value
      //If is not the full current text value
      //Return only the 5 first
      return (
        !exerciseAdded &&
        element
          .toLowerCase()
          .includes(this.currentExercise.exercise.toLowerCase()) &&
        element.toLowerCase() !== this.currentExercise.exercise.toLowerCase()
      );
    }).slice(0, 5);
  }

  //Input update values
  inputExerciseData(event: any, dataType: exerciseData) {
    const target = event.target as HTMLTextAreaElement;
    const value = target.value;
    if (dataType === 'exercise') {
      this.currentExercise.exercise = value;
      this.refilterList();
      return;
    }
    if (event.data === '-')
      if (dataType === 'rest') this.restTime = this.restTime;
      else this.currentExercise[dataType] = this.currentExercise[dataType];
    try {
      const v = parseInt(value);
      switch (dataType) {
        case 'repetitions':
          this.currentExercise.repetitions = v;
          break;
        case 'rest':
          this.restTime = v;
          break;
        case 'time':
          this.currentExercise.time = v;
          break;
      }
    } catch (err) {
      // console.log(err);
    }
    this.onInsertExercises.emit(this.exercises);
  }

  //Button add
  addValue(event: MouseEvent) {
    event.preventDefault();
    if (this.currentExercise.repetitions && this.currentExercise.time) {
      this.exercises.push({
        exercise: this.currentExercise.exercise,
        repetitions: this.currentExercise.repetitions,
        time: this.currentExercise.time,
      });
      this.currentExercise = {
        exercise: '',
        repetitions: null,
        time: null,
      };
      this.refilterList();
    }
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges) {
    this.exercises = changes.exercises.currentValue;
    this.refilterList();
  }

  start(event: MouseEvent) {
    event.preventDefault();
    if (this.exercises.length && this.restTime && this.restTime > 0) {
      this.onStart.emit(this.restTime);
    }
  }
}
