System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CourseComponent = (function () {
                function CourseComponent(router) {
                    this.router = router;
                }
                CourseComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'course',
                        template: "\n  \n  <div class=\"course view\">\n        <br />\n        <div class=\"smart-navbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"toolbar-item\">\n                    <h3><a routerLink=\"/studymc/\">\n                        <div class=\"message-link\">\n                            <span class=\"glyphicon glyphicon-arrow-left\" style=\"margin-right: 30px;\"></span>\n                            All Courses\n                        </div>\n                        </a>\n                    </h3>\n                </li>\n            </ul>\n        </div>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n            <br />\n            <br />\n            <h3><a routerLink=\"/studymc/\">View all Courses</a></h3>\n        </div>\n</div>\n  \n  \n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});

//# sourceMappingURL=course.component.js.map
