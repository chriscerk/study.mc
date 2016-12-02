declare var hotspotsModule:any;

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ITopic } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

import { CompoundCanvasComponent } from './compoundCanvas.component';

@Component({
  //moduleId: module.id,
  selector: 'topic-learn',
  template: `
<div *ngIf="topic">
  <h1><b>Learn</b> about {{topic.name}}</h1>
  <div class="content">
    <div *ngFor="let learnItem of topic.learnItems; let i = index">
      <div *ngIf="currentQuestion == i">

        <h3>{{i/topic.learnItems.length | MyPercentPipe }} Complete</h3>
        <h2>{{learnItem.title}}</h2> 
        <br>

        <div class="alert alert-danger" role="alert" *ngIf="!validAnswer && answerSubmitted">
            <a href="#" class="alert-link">Incorrect Answer!</a>
            <p>Please click "Retry" to attempt answering the question again.</p>
        </div>

        <div class="alert alert-success" role="alert" *ngIf="validAnswer && answerSubmitted">
            <a href="#" class="alert-link">Correct Answer!</a>
            <p>Correct Answer was {{learnItem.answer}}. <strong>Why?</strong>: {{learnItem.explanation}}</p>
        </div>

        <form #f="ngForm" (ngSubmit)="onSubmit()" method="post">
          <p>{{learnItem.name}}</p>

            <div class="action-buttons">
              <div class="shaded">
                <button  type="button" class="btn btn-default" (click)="previousItem()"> Previous </button>
              </div>
              <br>
              <div *ngIf="learnItem.answer && !answerSubmitted">
                <button type="button" 
                        (click)="rightAnswer()" 
                        class="btn btn-success btn-lg" 
                        *ngIf="learnItem.answer == userAnswer">
                    Submit
                </button>
                <button type="button" 
                        (click)="wrongAnswer()" 
                        class="btn btn-success btn-lg" 
                        *ngIf="learnItem.answer != userAnswer && validAnswer">
                    Submit
                </button>
              </div>

              <div *ngIf="!learnItem.answer || answerSubmitted">
                <button type="submit" class="btn btn-success btn-lg" *ngIf="validAnswer">
                  Next
                </button>
              </div>
              <button (click)="retryQuestion()" class="btn btn-danger btn-lg" *ngIf="!validAnswer">Retry</button>
              <br>

            </div>
          <div *ngIf="learnItem.compoundHotspots">
            <compound-Canvas [learnItem]="learnItem" [topic]="topic" [i]="i">Loading Canvas...</compound-Canvas>
          </div>

          <ul *ngIf="!learnItem.compoundHotspots" class="flex-container">
            <li class="flex-item">
              <img src="/studymc-media/compounds/{{topic.name}}/{{learnItem.imagePath}}" id="logo" alt="logo">
            </li>
            <li class="flex-item" style="width: 400px;">
              <ul>
                <li *ngFor="let info of learnItem.colorLocationAssociations">
                      <p [style.color]=[info.color]> {{info.description}} </p>
                </li>
              </ul>
              <p *ngIf="learnItem.answer">
                {{learnItem.question}}
                <select class="form-control input-lg" [(ngModel)]="userAnswer" name="userAnswerInput" *ngIf="!answerSubmitted" required>
                  <option [value]="''" disabled="disabled"></option>
                  <option *ngFor="let option of learnItem.options;">{{option}}</option>
                </select>
              </p>
              <br>
            </li>
          </ul>

        </form>

      </div>
      <div class="alert alert-success" role="alert" *ngIf="topic.learnItems.length == currentQuestion">
            <a href="#" class="alert-link">Congrats! You finished learning about {{topic.name}} </a>
      </div>
    </div>

    <div *ngIf="!topic.learnItems.length">
        <div class="alert alert-info review-alert" role="alert">
          <a href="#" class="alert-link"> There are currently no Learning items for {{topic.name}}.</a>
        </div>
    </div>
  </div>
  <div *ngIf="!topic" class="row">
    No topic found
  </div>
</div> 
                
`
})
export class TopicLearnComponent implements OnInit {

  topic: ITopic;
  private sub: Subscription;

  router: Router;

  userAnswer: string;
  correctAnswer: string;
  currentQuestion: number;
  validAnswer: boolean;
  answerSubmitted: boolean;

  constructor(private route: ActivatedRoute, router: Router, private dataService: DataService) {
      this.router = router;
      this.validAnswer = true;
      this.answerSubmitted = false;
      this.userAnswer = "Current Question Not Answered Yet";
      this.currentQuestion = 0;
   } 

  ngOnInit() {
      this.sub = this.route.parent.params.subscribe(params => {
        let id = +params['id'];
        this.dataService.getTopic(id)
            .subscribe((topic: ITopic) => this.topic = topic);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  previousItem() {
    if(this.currentQuestion == 0)
    {
      return;
    }
    else{
      this.currentQuestion--;
    }
  }

  onSubmit(){
    this.answerSubmitted = false;
    this.userAnswer = "Current Question Not Answered Yet";
    this.currentQuestion++;
  }

  wrongAnswer(){
    this.answerSubmitted = true;
    this.validAnswer = false;
  }

  rightAnswer(){
    this.answerSubmitted = true;
    this.validAnswer = true;
  }

  retryQuestion(){
    this.answerSubmitted = false;
    this.userAnswer = "Current Question Not Answered Yet";
    this.validAnswer = true;
  }

}