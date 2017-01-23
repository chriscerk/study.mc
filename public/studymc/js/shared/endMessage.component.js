System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var EndMessageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EndMessageComponent = (function () {
                function EndMessageComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], EndMessageComponent.prototype, "topicName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], EndMessageComponent.prototype, "incorrectAnswers", void 0);
                EndMessageComponent = __decorate([
                    core_1.Component({
                        selector: 'end-message',
                        template: "\n  <div class=\"alert alert-success\" role=\"alert\">\n    <p>Congrats! You finished this {{topicName}} module</p>\n    <h2>{{incorrectAnswers}}</h2>\n    <p>Incorrect Answer(s)</p>\n    <a href=\"#\" class=\"alert-link\">Head to Homepage</a>\n  </div>\n",
                        styles: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], EndMessageComponent);
                return EndMessageComponent;
            }());
            exports_1("EndMessageComponent", EndMessageComponent);
        }
    }
});

//# sourceMappingURL=endMessage.component.js.map
