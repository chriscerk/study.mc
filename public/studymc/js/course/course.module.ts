import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseComponent } from './course.component';
import { CourseTopicsComponent } from './courseTopics.component';

import { SharedModule }   from '../shared/shared.module';
import { course_routing } from './course.routing';

@NgModule({
  imports:      [ CommonModule, course_routing, SharedModule ],
  declarations: [ CourseComponent, CourseTopicsComponent ],
  exports: [CourseComponent]
})
export class CourseModule { }