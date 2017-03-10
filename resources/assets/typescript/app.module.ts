/// <reference path="../../../typings/browser.d.ts" />

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent }  from './app.component';
import { CourseComponent }  from './course/course.component';
import { CourseTopicsComponent }  from './course/courseTopics.component';

import { TrainingComponent } from './training/training.component';
import { TopicComponent }  from './topic/topic.component';
import { TopicLearnComponent } from './topic/topicLearn.component';
import { TopicTestComponent } from './topic/topicTest.component';
import { TopicReviewComponent } from './topic/topicReview.component';
import { CoursesComponent }  from './courses/courses.component';
import { CompoundCanvasComponent } from './shared/compoundCanvas.component';
import { CanvasAnimationComponent } from './shared/canvasAnimation.component';
import { AlertBoxComponent } from './shared/alertBox.component';
import { EndMessageComponent } from './shared/endMessage.component';

import { app_routing } from './app.routing';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import {ReactiveFormsModule} from "@angular/forms";

import { MyPercentPipe } from './shared/pipes/percent.pipe'

let Components: any[] = [
    AppComponent,
    TrainingComponent,
    CourseComponent, 
    CoursesComponent, 
    CourseTopicsComponent,
    TopicComponent, 
    TopicLearnComponent,
    TopicTestComponent,
    TopicReviewComponent,
    CompoundCanvasComponent,
    CanvasAnimationComponent,
    AlertBoxComponent,
    EndMessageComponent
  ];

  let Pipes: any[] = [
    MyPercentPipe
  ];

@NgModule({
  declarations: [ Components, Pipes ],
  imports: [
    BrowserModule,
    app_routing,
    ReactiveFormsModule,
    CoreModule,   //Singleton objects
    SharedModule  //Shared (multi-instance) objects
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }