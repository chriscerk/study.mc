System.register(['@angular/core', '../core/services/data.service'], function(exports_1, context_1) {
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
    var core_1, data_service_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            CoursesComponent = (function () {
                function CoursesComponent(dataService) {
                    this.dataService = dataService;
                    this.courses = [];
                    this.filteredCourses = [];
                }
                CoursesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.appTitle = 'Study.MC';
                    this.college = 'College of Pharmacy';
                    this.university = 'University of Michigan';
                    this.dataService.getCourses()
                        .subscribe(function (courses) {
                        _this.courses = _this.filteredCourses = courses;
                    });
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n  <ul class=\"flex-container\">\n    <li class=\"flex-item\">\n      <div class=\"landing\">\n        <h2>{{university}}</h2>\n        <h1>{{college}}</h1>\n        <div class=\"title\">{{appTitle}}</div>\n      </div>\n    </li>\n\n    <li>\n      <div *ngFor=\"let course of courses;\">\n        <a [routerLink]=\"['/studymc/course',course.id,'topics']\">\n          <li class=\"flex-item classBox hvr-back-pulse {{course.status + '-course' }}\">{{course.number}}</li>\n        </a>\n      </div>\n      <div *ngIf=\"!courses.length\">\n        <h1>No Courses Found!</h1>\n      </div>\n    </li>\n  </ul>\n\n          "
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});

//# sourceMappingURL=courses.component.js.map
