import { Component, Output, EventEmitter } from '@angular/core';

export type buttonList = 'continue' | 'restart' | 'next' | 'previous';

@Component({
  selector: 'exercise-current-buttons',
  templateUrl: './exercise-current-buttons.component.html',
  styleUrls: ['./exercise-current-buttons.component.scss'],
})
export class ExerciseCurrentButtonsComponent {
  @Output() btnClick = new EventEmitter<buttonList>();

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
}
