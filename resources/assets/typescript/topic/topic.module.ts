import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { TopicComponent } from './topic.component';
import { TopicLearnComponent } from './topicLearn.component';
import { TopicTestComponent } from './topicTest.component';
import { TopicReviewComponent } from './topicReview.component';
import { CompoundCanvasComponent } from '../shared/compoundCanvas.component';
import { AlertBoxComponent } from '../shared/alertBox.component';
import { EndMessageComponent } from '../shared/endMessage.component';

import { SharedModule }   from '../shared/shared.module';
import { topic_routing } from './topic.routing';
import { MyPercentPipe } from '../shared/pipes/percent.pipe'

@NgModule({
  imports:      [ CommonModule, MyPercentPipe, topic_routing, SharedModule, ReactiveFormsModule ],
  declarations: [ EndMessageComponent, CompoundCanvasComponent, AlertBoxComponent, TopicComponent, MyPercentPipe, TopicLearnComponent, 
                  TopicTestComponent, TopicReviewComponent],
  exports: [TopicComponent, MyPercentPipe],
  bootstrap: [ TopicLearnComponent ]
})
export class TopicModule { }