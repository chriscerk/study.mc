declare var PaperProcessor:any;
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ITopic, ILearnItem, MovementAnimation } from '../shared/interfaces';


// TODO: PaperProcessor nto implemented, current model reflects future PaperProcessor capability 
@Component({ 
  selector: 'Canvas-Animation',
  template: 
  `
  <button class="btn btn-default" (click)="showCompoundAreas()" type="button" id="{{canvasId}}-button">Display Areas</button>
  <canvas id="{{canvasId}}">
  </canvas>`,
  styles: [`
    button {
      float: left;
    }
  `],
})
export class CanvasAnimationComponent implements OnInit, AfterViewInit {
    @Input() learnItem: MovementAnimation;
    @Input() topic: ITopic;
    @Input() i: number;
    canvasId: string;
  
    constructor() { }

    ngOnInit() {
      this.canvasId = this.topic.name + "-Canvas-" + this.i;
    }

    ngAfterViewInit() {
        let relativeImgPath = "/studymc-media/compounds/" + this.topic.name + "/";

        PaperProcessor.applyObjects(this.learnItem.images, relativeImgPath);
        PaperProcessor.applyMovements(this.learnItem.movements);
    }

    showCompoundAreas() {
      PaperProcessor.displayAllHotspots(this.canvasId, "black");
  }
}