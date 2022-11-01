import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgbModalModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './calendar/event/event.component';
import { SplitLastPipe } from './Pipes/split-last.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './calendar/event/add-event/add-event.component';
import { UpdateEventComponent } from './calendar/event/update-event/update-event.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventComponent,
    SplitLastPipe,
    AddEventComponent,
    UpdateEventComponent,
    
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ EventComponent ]
})
export class AppModule { }