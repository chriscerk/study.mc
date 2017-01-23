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
    var CourseLearnComponent;
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
            CourseLearnComponent = (function () {
                function CourseLearnComponent(route, dataService) {
                    this.route = route;
                    this.dataService = dataService;
                }
                CourseLearnComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.parent.params.subscribe(function (params) {
                        var id = +params['id'];
                        _this.dataService.getCourse(id)
                            .subscribe(function (course) { return _this.course = course; });
                    });
                };
                CourseLearnComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                CourseLearnComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'course-learn',
                        template: "<div *ngIf=\"course\">\n                  <div class=\"row\">\n                    <h1><b>Learn</b> about</h1>\n                </div>   \n                <div *ngIf=\"!course\" class=\"row\">\n                  No course found\n                </div>  "
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, data_service_1.DataService])
                ], CourseLearnComponent);
                return CourseLearnComponent;
            }());
            exports_1("CourseLearnComponent", CourseLearnComponent);
        }
    }
});

//# sourceMappingURL=courseLearn.component.js.map
