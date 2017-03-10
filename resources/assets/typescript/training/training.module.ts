import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingComponent } from './training.component';

import { SharedModule }   from '../shared/shared.module';
import { training_routing } from './training.routing';

@NgModule({
  imports:      [ CommonModule, training_routing, SharedModule ],
  declarations: [ TrainingComponent ],
  exports: [TrainingComponent]
})
export class TrainingModule { }