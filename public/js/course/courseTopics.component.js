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
    var CourseTopicsComponent;
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
            CourseTopicsComponent = (function () {
                function CourseTopicsComponent(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                }
                CourseTopicsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.parent.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this.dataService.getCourse(id)
                            .subscribe(function (course) { return _this.course = course; });
                    });
                };
                CourseTopicsComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                CourseTopicsComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'course-learn',
                        template: "\n    <div *ngIf=\"course\">\n        <div class=\"row\">\n        <h1>Course Topics for {{course.abbreviation}} - {{course.number}} </h1><br><br>\n\n        <ul class=\"flex-container\"> \n        <div *ngFor=\"let topic of course.topics;\">\n            <a [routerLink]=\"['/studymc/topic', topic.id,'learn']\" class=\"{{topic.status + '-link' }}\">\n                <li class=\"flex-item topicBox hvr-back-pulse {{topic.status + '-course' }}\">{{topic.title}}</li>\n            </a>\n        </div>\n        <div *ngIf=\"!course.topics.length\">\n            <h1>No Topics!</h1>\n        </div>\n        </ul>\n\n    </div>   \n    <div *ngIf=\"!course\" class=\"row\">\n        No course found\n    </div>  \n"
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, data_service_1.DataService])
                ], CourseTopicsComponent);
                return CourseTopicsComponent;
            }());
            exports_1("CourseTopicsComponent", CourseTopicsComponent);
        }
    }
});

//# sourceMappingURL=courseTopics.component.js.map
