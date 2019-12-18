import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { QAService } from './../services/qa-service.service'
import { FormsModule } from '@angular/forms';
import { MatInputModule,
         MatButtonModule,
         MatCheckboxModule,
         MatProgressSpinnerModule 
                        } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    QuestionAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [ QAService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
