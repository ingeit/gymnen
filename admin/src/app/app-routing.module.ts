import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'addExercise', component: AddExerciseComponent }
];

@NgModule({
  exports: [ 
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
