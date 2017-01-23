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
    var AlertBoxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AlertBoxComponent = (function () {
                function AlertBoxComponent() {
                }
                AlertBoxComponent.prototype.ngOnInit = function () {
                };
                AlertBoxComponent.prototype.ngAfterViewInit = function () {
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AlertBoxComponent.prototype, "learnItem", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], AlertBoxComponent.prototype, "testItem", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AlertBoxComponent.prototype, "validAnswer", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], AlertBoxComponent.prototype, "answerSubmitted", void 0);
                AlertBoxComponent = __decorate([
                    core_1.Component({
                        selector: 'alert-box',
                        template: "\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!validAnswer && answerSubmitted\">\n    <a href=\"#\" class=\"alert-link\">Incorrect Answer!</a>\n    <p>Please click \"Retry\" to attempt answering the question again.</p>\n</div>\n\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"validAnswer && answerSubmitted\">\n    <a href=\"#\" class=\"alert-link\">Correct Answer!</a>\n    <p> Correct Answer was {{learnItem.answer}}.</p> \n    <p *ngIf=\"learnItem.explanation\">\n        <strong>Why?</strong>: \n        {{learnItem.explanation}}\n    </p>\n</div>\n",
                        styles: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AlertBoxComponent);
                return AlertBoxComponent;
            }());
            exports_1("AlertBoxComponent", AlertBoxComponent);
        }
    }
});

//# sourceMappingURL=alertBox.component.js.map
