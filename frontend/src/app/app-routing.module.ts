import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';


const routes: Routes = [
  { path: '', component: CalendarComponent, },
  { path: ':date', component: CalendarComponent },
  { path: 'agenda', component: CalendarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }