import { UrlResolver } from '../../../../public/studymc/@angular/compiler';
declare var FabricProcessor:any;
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ITopic, ILearnItem, MovementAnimation } from '../shared/interfaces';


// TODO: FabricProcessor not implemented, current model reflects future FabricProcessor capability 
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

        FabricProcessor.initCanvas();
        FabricProcessor.applyObjects(this.learnItem.images, relativeImgPath);
        FabricProcessor.applyMovements(this.learnItem.movements);
    }

    showCompoundAreas() {
      FabricProcessor.fireAllAnimations(this.canvasId);
  }
}