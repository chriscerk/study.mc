System.register(['@angular/core', '@angular/router', '../core/services/data.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, data_service_1;
    var TopicLearnComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            TopicLearnComponent = (function () {
                function TopicLearnComponent(route, router, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.router = router;
                    this.validAnswer = true;
                    this.answerSubmitted = false;
                    this.userAnswer = "Current Question Not Answered Yet";
                    this.currentQuestion = 0;
                    this.moduleIsComplete = false;
                    this.incorrectAnswers = 0;
                    this.currentAction = 'Submit';
                }
                TopicLearnComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.parent.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this.dataService.getTopic(id)
                            .subscribe(function (topic) { return _this.topic = topic; });
                    });
                };
                TopicLearnComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                TopicLearnComponent.prototype.previousItem = function () {
                    if (this.currentQuestion == 0) {
                        return;
                    }
                    else {
                        this.currentQuestion--;
                    }
                };
                TopicLearnComponent.prototype.nextItem = function () {
                    this.answerSubmitted = false;
                    this.userAnswer = "Current Question Not Answered Yet";
                    this.currentQuestion++;
                    if (this.topic.learnItems.length == this.currentQuestion) {
                        this.moduleIsComplete = true;
                    }
                };
                TopicLearnComponent.prototype.wrongAnswer = function () {
                    this.answerSubmitted = true;
                    this.validAnswer = false;
                    this.incorrectAnswers++;
                };
                TopicLearnComponent.prototype.rightAnswer = function () {
                    this.answerSubmitted = true;
                    this.validAnswer = true;
                };
                TopicLearnComponent.prototype.retryQuestion = function () {
                    this.answerSubmitted = false;
                    this.userAnswer = "Current Question Not Answered Yet";
                    this.validAnswer = true;
                };
                TopicLearnComponent.prototype.performAction = function (action) {
                    switch (action) {
                        case 'Next':
                            this.nextItem();
                            break;
                        case 'Previous':
                            this.previousItem();
                            break;
                        case 'Submit':
                            this.checkAnswer();
                            break;
                        case 'Retry':
                            this.retryQuestion();
                            break;
                    }
                };
                TopicLearnComponent.prototype.checkAnswer = function () {
                    if (this.correctAnswer != this.userAnswer) {
                        this.wrongAnswer();
                        this.currentAction = 'retryQuestion';
                    }
                    else {
                        this.rightAnswer();
                        this.currentAction = 'next';
                    }
                };
                TopicLearnComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'topic-learn',
                        template: "\n<div *ngIf=\"topic\">\n  <h1> <strong>Learn</strong> about {{topic.name}}</h1>\n\n    <div class=\"content\">\n      <end-message *ngIf=\"moduleIsComplete\" [topicName]=\"topic.name\" [incorrectAnswers]=\"incorrectAnswers\">\n      </end-message>\n\n    <div *ngFor=\"let learnItem of topic.learnItems; let i = index\">\n      <div *ngIf=\"currentQuestion == i\">\n\n        <h3>{{i/topic.learnItems.length | MyPercentPipe }} Complete</h3>\n        <h2>{{learnItem.title}}</h2> \n        <br>\n\n        <alert-box [learnItem]=\"learnItem\" [validAnswer]=\"validAnswer\" [answerSubmitted]=\"answerSubmitted\"></alert-box>\n  \n          <p>{{learnItem.name}}</p>\n\n            <div class=\"action-buttons\">\n              <div class=\"shaded\">\n                <button  type=\"button\" class=\"btn btn-default\" (click)=\"previousItem()\"> Previous </button>\n              </div>\n\n              <br>\n\n              <div *ngIf=\"learnItem.answer && !answerSubmitted\">\n                <button type=\"button\" \n                        (click)=\"rightAnswer()\" \n                        class=\"btn btn-success btn-lg\" \n                        *ngIf=\"learnItem.answer == userAnswer\">\n                    Submit\n                </button>\n\n                <button type=\"button\" \n                        (click)=\"wrongAnswer()\" \n                        class=\"btn btn-success btn-lg\" \n                        *ngIf=\"learnItem.answer != userAnswer && validAnswer\">\n                    Submit\n                </button>\n\n              </div>\n\n              <div *ngIf=\"!learnItem.answer || answerSubmitted\">\n\n                <button type=\"button\" (click)=\"nextItem()\" class=\"btn btn-success btn-lg\" *ngIf=\"validAnswer\">\n                  Next\n                </button>\n\n              </div>\n\n              <button (click)=\"retryQuestion()\" class=\"btn btn-danger btn-lg\" *ngIf=\"!validAnswer\">Retry</button>\n            </div>\n\n          <div *ngIf=\"learnItem.compoundHotspots\">\n            <compound-Canvas [learnItem]=\"learnItem\" [topic]=\"topic\" [i]=\"i\">Loading Canvas...</compound-Canvas>\n          </div>\n\n          <ul *ngIf=\"!learnItem.compoundHotspots\" class=\"flex-container\">\n            <li class=\"flex-item\">\n              <img src=\"/studymc-media/compounds/{{topic.name}}/{{learnItem.imagePath}}\" id=\"logo\" alt=\"logo\">\n            </li>\n            <li class=\"flex-item\" style=\"width: 400px;\">\n              <ul>\n                <li *ngFor=\"let info of learnItem.colorLocationAssociations\">\n                      <p [style.color]=[info.color]> {{info.description}} </p>\n                </li>\n              </ul>\n\n              <p *ngIf=\"learnItem.answer\">\n                {{learnItem.question}}\n                <br>\n                <br>\n                <select class=\"form-control input-lg\" [(ngModel)]=\"userAnswer\" name=\"userAnswerInput\" *ngIf=\"!answerSubmitted\" required>\n                  <option [value]=\"''\" disabled=\"disabled\"></option>\n                  <option *ngFor=\"let option of learnItem.options;\">{{option}}</option>\n                </select>\n              </p>\n              <br>\n            </li>\n          </ul>\n\n\n      </div>\n    </div>\n\n    <div *ngIf=\"!topic.learnItems.length\">\n        <div class=\"alert alert-info review-alert\" role=\"alert\">\n          <a href=\"#\" class=\"alert-link\"> There are currently no Learning items for {{topic.name}}.</a>\n        </div>\n    </div>\n  </div>\n  <div *ngIf=\"!topic\" class=\"row\">\n    No topic found\n  </div>\n</div> \n                \n"
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, data_service_1.DataService])
                ], TopicLearnComponent);
                return TopicLearnComponent;
            }());
            exports_1("TopicLearnComponent", TopicLearnComponent);
        }
    }
});

//# sourceMappingURL=topicLearn.component.js.map
