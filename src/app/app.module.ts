import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { CardComponent } from './card/card.component';
import { ExerciseInsertComponent } from './exercise-insert/exercise-insert.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseCurrentInformationComponent } from './exercise-current-information/exercise-current-information.component';
import { TimerComponent } from './timer/timer.component';
import { ExerciseCurrentButtonsComponent } from './exercise-current-buttons/exercise-current-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    CardComponent,
    ExerciseInsertComponent,
    ExerciseListComponent,
    ExerciseCurrentInformationComponent,
    TimerComponent,
    ExerciseCurrentButtonsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
