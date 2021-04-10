import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { CardComponent } from './card/card.component';
import { ExerciseInsertComponent } from './exercise-insert/exercise-insert.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    CardComponent,
    ExerciseInsertComponent,
    ExerciseListComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
