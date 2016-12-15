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
    var TopicTestComponent;
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
            TopicTestComponent = (function () {
                function TopicTestComponent(route, router, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.router = router;
                    this.validAnswer = true;
                    this.userAnswer = "Current Question Not Answered Yet";
                    this.currentQuestion = 0;
                    this.incorrectAnswers = 0;
                    this.moduleIsComplete = false;
                }
                TopicTestComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.parent.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this.dataService.getTopic(id)
                            .subscribe(function (topic) { return _this.topic = topic; });
                    });
                };
                TopicTestComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                TopicTestComponent.prototype.onSubmit = function () {
                    this.userAnswer = "Current Question Not Answered Yet";
                    this.currentQuestion++;
                    if (this.topic.testItems.length == this.currentQuestion) {
                        this.moduleIsComplete = true;
                    }
                };
                TopicTestComponent.prototype.wrongAnswer = function () {
                    this.validAnswer = false;
                };
                TopicTestComponent.prototype.retryQuestion = function () {
                    this.userAnswer = "Current Question Not Answered Yet";
                    this.validAnswer = true;
                    this.incorrectAnswers++;
                };
                TopicTestComponent = __decorate([
                    core_1.Component({
                        selector: 'topic-test',
                        template: "\n<div *ngIf=\"topic\">\n  <h1><b>Test</b> your Knowledge on {{topic.name}}</h1>\n<div class=\"content\">\n  <end-message *ngIf=\"moduleIsComplete\" [topicName]=\"topic.name\" [incorrectAnswers]=\"incorrectAnswers\"></end-message>\n    <div *ngFor=\"let testItem of topic.testItems; let i = index\">\n      <div *ngIf=\"currentQuestion == i\">\n        <br>\n          <h2> {{i/topic.testItems.length | MyPercentPipe }} Complete</h2> \n        <br>\n\n        <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"validAnswer\" method=\"post\">\n          <p class=\"test-question\">\n            {{testItem.question}}\n            <br>\n            <br>\n            <select class=\"form-control input-lg\" [(ngModel)]=\"userAnswer\" name=\"userAnswerInput\" required>\n              <option  value=\"\" selected=\"selected\" disabled=\"disabled\"></option>\n              <option *ngFor=\"let option of testItem.options;\">{{option}}</option>\n            </select>\n          </p>\n          <div class=\"action-buttons\">\n            <button type=\"submit\" \n                    class=\"btn btn-success btn-lg\" \n                    *ngIf=\"testItem.answer == userAnswer\">\n              Submit\n            </button>\n\n            <button type=\"button\" \n                    (click)=\"wrongAnswer()\"\n                    [disabled]=\"!f.form.valid\" \n                    class=\"btn btn-success btn-lg\" \n                    *ngIf=\"testItem.answer != userAnswer\">\n              Submit\n            </button>\n          </div>\n        </form>\n\n         <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!validAnswer\">\n            <a href=\"#\" class=\"alert-link\">Incorrect Answer!</a>\n         </div>\n\n         <div class=\"action-buttons\">\n          <button (click)=\"retryQuestion()\" class=\"btn btn-danger btn-lg\" *ngIf=\"!validAnswer\">Retry</button>\n        </div>\n\n      </div>\n    </div>\n\n    <div *ngIf=\"!topic.testItems.length\">\n        <div class=\"alert alert-info review-alert\" role=\"alert\">\n          <a href=\"#\" class=\"alert-link\"> There are currently no Test items for {{topic.name}}.</a>\n        </div>\n    </div>\n\n\n</div>\n<div *ngIf=\"!topic\" class=\"row\">\n  No topic found\n</div>\n</div>\n                \n"
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, data_service_1.DataService])
                ], TopicTestComponent);
                return TopicTestComponent;
            }());
            exports_1("TopicTestComponent", TopicTestComponent);
        }
    }
});

//# sourceMappingURL=topicTest.component.js.map
