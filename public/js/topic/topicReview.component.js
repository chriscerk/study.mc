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
    var TopicReviewComponent;
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
            TopicReviewComponent = (function () {
                function TopicReviewComponent(route, router, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                    this.router = router;
                    this.studentName = "";
                    this.currentItem = 0;
                    this.nextItem = 1;
                    this.printingOptionsVisible = false;
                    this.reviewComplete = false;
                }
                TopicReviewComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.parent.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this.dataService.getTopic(id)
                            .subscribe(function (topic) { return _this.topic = topic; });
                    });
                    this.lastItem = this.topic.reviewItems.length - 1;
                };
                TopicReviewComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                TopicReviewComponent.prototype.toNextItem = function () {
                    if (this.currentItem == this.lastItem) {
                        this.currentItem = 0;
                    }
                    else if (this.nextItem == this.lastItem) {
                        this.reviewComplete = true;
                        this.currentItem++;
                    }
                    else {
                        this.currentItem++;
                    }
                    this.nextItem = this.currentItem + 1;
                };
                TopicReviewComponent.prototype.toPreviousItem = function () {
                    if (this.currentItem == 0) {
                        this.currentItem = this.lastItem;
                    }
                    else {
                        this.currentItem--;
                    }
                    this.nextItem = this.currentItem + 1;
                };
                TopicReviewComponent.prototype.printPage = function () {
                    window.print();
                };
                TopicReviewComponent.prototype.generateExampleReview = function () {
                    this.topic.reviewItems = this.topic.exampleReview;
                };
                TopicReviewComponent.prototype.togglePrintingOptions = function () {
                    this.printingOptionsVisible = !this.printingOptionsVisible;
                };
                TopicReviewComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'topic-review',
                        template: "\n<div *ngIf=\"topic\">\n<div class=\"review-print-hide\">\n  <h1><b>Review</b> of {{topic.name}}</h1>\n  <div class=\"alert alert-info review-alert\" role=\"alert\" style=\"display:none;\">\n    <a href=\"#\" class=\"alert-link\"> Reviewing on a mobile device <strong>not available</strong> due to the large amount of <strong>typing</strong> required along with <strong>printing</strong>.</a>\n  </div>\n  <p>Please fill each section of the review. Below is a generated review worksheet, printable upon completion.</p>\n<div class=\"content review-module\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\" method=\"post\">\n  <div *ngFor=\"let reviewItem of topic.reviewItems; let i = index\">\n    <div *ngIf=\"currentItem == i\">    \n        <h2>Section {{i+1}}: {{reviewItem.title}}</h2> \n        <div class=\"action-buttons\">\n         <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"toPreviousItem()\"> Previous </button>\n          <button type=\"button\" class=\"btn btn-default\" *ngIf=\"reviewComplete\" (click)=\"toNextItem()\"> Next </button>\n         </div>\n            <br>\n            <br>\n            <button type=\"submit\" class=\"btn btn-success btn-lg\" *ngIf=\"!reviewComplete\" (click)=\"toNextItem()\"> Next </button>\n            <button type=\"submit\" class=\"btn btn-success btn-lg\" *ngIf=\"reviewComplete\" (click)=\"printPage()\"> Print! </button>\n        </div>\n\n        <ul class=\"flex-container\">\n          <li *ngFor=\"let section of reviewItem.sections; let j = index\">\n            <div class=\"input-group input-group-lg\">\n              <input type=\"text\" \n                      class=\"form-control\" \n                      [(ngModel)]=\"section.title\" \n                      aria-describedby=\"basic-addon1\" \n                      name=\"sectionTitle{{j}}\" \n                      required>\n              <br>\n              <div *ngIf=\"section.imagePath\">\n                <img src=\"/studymc-media/compounds/{{topic.name}}/{{section.imagePath}}\" id=\"logo\" alt=\"{{section.imagePath}}\" style=\"max-width: 150px;\">\n              </div>\n              <div *ngIf=\"!section.imagePath\">\n                <textarea class=\"form-control\" \n                          [(ngModel)]=\"section.content\" \n                          name=\"sectionContent{{j}}\" \n                          rows=\"10\" rows=\"5\" \n                          id=\"comment\" \n                          required>\n                </textarea>\n                </div>\n              <br>\n            </div>\n            <br>\n          </li>\n        </ul>\n\n      </div>\n  </div>\n  <div class=\"input-group input-group-lg\">\n          <label for=\"studentName\">Your Name: </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"studentName\" name=\"studentName\" required>\n  </div>\n  <div *ngIf=\"!topic.reviewItems.length\">\n        <div class=\"alert alert-info review-alert\" role=\"alert\">\n          <a href=\"#\" class=\"alert-link\"> There is currently no Review for {{topic.name}}.</a>\n        </div>\n  </div>\n    \n    <h2> Preview Below &nbsp;  <span class=\"glyphicon glyphicon-arrow-down\"></span></h2> \n  <hr>\n  </form>\n </div>\n</div>\n  <h1 style=\"text-align: center;\">Review of <strong>{{topic.name}}</strong> | {{studentName}} </h1>\n    <ul class=\"flex-container\">\n        <li *ngFor=\"let reviewItem of topic.reviewItems;\" class=\"flex-item review-print-item\">\n            <h3><strong>{{reviewItem.title}}</strong></h3>\n\n            <ul class=\"flex-container\" style=\"border: solid #afafaf; border-width: 1px; border-radius: 10px;\">\n              <li *ngFor=\"let section of reviewItem.sections\" style=\"width: 200px; padding: 3px;\">\n                <h4>{{section.title}}</h4>\n                <p class=\"review\">{{section.content}}</p>\n                <div *ngIf=\"section.imagePath\">\n                  <img src=\"/studymc-media/compounds/{{topic.name}}/{{section.imagePath}}\" id=\"logo\" alt=\"{{section.imagePath}}\" style=\"max-width: 150px;\">\n                </div>  \n              </li>\n            </ul>\n      </li>\n    </ul>\n</div>\n\n<div *ngIf=\"!topic\" class=\"row\">\nNo topic found\n</div> \n"
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, data_service_1.DataService])
                ], TopicReviewComponent);
                return TopicReviewComponent;
            }());
            exports_1("TopicReviewComponent", TopicReviewComponent);
        }
    }
});

//# sourceMappingURL=topicReview.component.js.map
