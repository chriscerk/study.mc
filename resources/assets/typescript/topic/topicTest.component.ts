import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { ITopic } from '../shared/interfaces';
import { MyPercentPipe } from '../shared/pipes/percent.pipe'

import { DataService } from '../core/services/data.service';

@Component({
  selector: 'topic-test',
  template: `
<div *ngIf="topic">
  <h1><b>Test</b> your Knowledge on {{topic.name}}</h1>
<div class="content">
    <div *ngFor="let testItem of topic.testItems; let i = index">
      <div *ngIf="currentQuestion == i">
        <br>
          <h2> {{i/topic.testItems.length | MyPercentPipe }} Complete</h2> 
        <br>

        <form #f="ngForm" (ngSubmit)="onSubmit()" *ngIf="validAnswer" method="post">
          <p class="test-question">
            {{testItem.question}}

            <select class="form-control input-lg" [(ngModel)]="userAnswer" name="userAnswerInput" required>
              <option  value="" selected="selected" disabled="disabled"></option>
              <option *ngFor="let option of testItem.options;">{{option}}</option>
            </select>
          </p>
          <div class="action-buttons">
            <button type="submit" 
                    class="btn btn-success btn-lg" 
                    *ngIf="testItem.answer == userAnswer">
              Submit
            </button>

            <button type="button" 
                    (click)="wrongAnswer()"
                    [disabled]="!f.form.valid" 
                    class="btn btn-success btn-lg" 
                    *ngIf="testItem.answer != userAnswer">
              Submit
            </button>
          </div>
        </form>

         <div class="alert alert-danger" role="alert" *ngIf="!validAnswer">
            <a href="#" class="alert-link">Incorrect Answer!</a>
         </div>

         <div class="action-buttons">
          <button (click)="retryQuestion()" class="btn btn-danger btn-lg" *ngIf="!validAnswer">Retry</button>
        </div>

      </div>
       <div class="alert alert-success" role="alert" *ngIf="topic.testItems.length == currentQuestion">
            <a href="#" class="alert-link">Congrats! You completed the {{topic.name}} Test</a>
      </div>
    </div>

    <div *ngIf="!topic.testItems.length">
        <div class="alert alert-info review-alert" role="alert">
          <a href="#" class="alert-link"> There are currently no Test items for {{topic.name}}.</a>
        </div>
    </div>


</div>
<div *ngIf="!topic" class="row">
  No topic found
</div>
</div>
                
`
})
export class TopicTestComponent implements OnInit {

  topic: ITopic;
  private sub: Subscription;

  router: Router;

  userAnswer: string;
  correctAnswer: string;
  currentQuestion: number;
  validAnswer: boolean;

  constructor(private route: ActivatedRoute, router: Router, private dataService: DataService) {
      this.router = router;
      this.validAnswer = true;
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

  onSubmit(){
    this.userAnswer = "Current Question Not Answered Yet";
    this.currentQuestion++;
  }

  wrongAnswer(){
    this.validAnswer = false;
  }

  retryQuestion(){
    this.userAnswer = "Current Question Not Answered Yet";
    this.validAnswer = true;
  }

}