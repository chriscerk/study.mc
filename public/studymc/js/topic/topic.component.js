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
    var TopicComponent, TopicDisplayModeEnum;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TopicComponent = (function () {
                function TopicComponent(router) {
                    this.router = router;
                    this.displayModeEnum = TopicDisplayModeEnum;
                }
                TopicComponent.prototype.ngOnInit = function () {
                    var path = this.router.url.split('/')[3];
                    switch (path) {
                        case 'review':
                            this.displayMode = TopicDisplayModeEnum.Review;
                            break;
                        case 'learn':
                            this.displayMode = TopicDisplayModeEnum.Learn;
                            break;
                        case 'test':
                            this.displayMode = TopicDisplayModeEnum.Test;
                            break;
                        default:
                            this.displayMode = TopicDisplayModeEnum.Learn;
                            break;
                    }
                };
                TopicComponent = __decorate([
                    core_1.Component({
                        //moduleId: module.id,
                        selector: 'topic',
                        template: "\n  \n  <div class=\"topic view\">\n        <div class=\"navbar smart-navbar review-print-hide\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"learn\" \n                       (click)=\"displayMode = displayModeEnum.Learn\" \n                       [class.active]=\"displayMode === displayModeEnum.Learn\">\n                       <span class=\"glyphicon glyphicon-education\"></span>&nbsp;&nbsp;\n                       <span class =\"graphic-title\">Learn</span>\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"test\"\n                       (click)=\"displayMode = displayModeEnum.Test\" \n                       [class.active]=\"displayMode === displayModeEnum.Test\">\n                        <span class=\"glyphicon glyphicon-pencil\"></span>&nbsp;&nbsp;\n                        <span class =\"graphic-title\">Test</span>\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"review\"\n                       (click)=\"displayMode = displayModeEnum.Review\" \n                       [class.active]=\"displayMode === displayModeEnum.Review\">\n                        <span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;\n                        <span class =\"graphic-title\">Review</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n            <router-outlet></router-outlet>\n            <br />\n            <br />\n</div>\n \n  \n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TopicComponent);
                return TopicComponent;
            }());
            exports_1("TopicComponent", TopicComponent);
            (function (TopicDisplayModeEnum) {
                TopicDisplayModeEnum[TopicDisplayModeEnum["Learn"] = 0] = "Learn";
                TopicDisplayModeEnum[TopicDisplayModeEnum["Test"] = 1] = "Test";
                TopicDisplayModeEnum[TopicDisplayModeEnum["Review"] = 2] = "Review";
            })(TopicDisplayModeEnum || (TopicDisplayModeEnum = {}));
        }
    }
});

//# sourceMappingURL=topic.component.js.map
