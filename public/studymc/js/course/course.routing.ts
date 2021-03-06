import { Routes, RouterModule } from '@angular/router';
import { CourseComponent }   from './course.component';
import { CourseTopicsComponent } from './courseTopics.component';

const course_routes: Routes = [
  { 
    path: '', 
    component: CourseComponent,
    children: [
      { path:'studymc/topics', component: CourseTopicsComponent }
    ]
  }
];

export const course_routing = RouterModule.forChild(course_routes);
