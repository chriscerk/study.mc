System.register(['@angular/core', '../shared/interfaces'], function(exports_1, context_1) {
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
    var core_1, interfaces_1;
    var CanvasAnimationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (interfaces_1_1) {
                interfaces_1 = interfaces_1_1;
            }],
        execute: function() {
            // TODO: PaperProcessor nto implemented, current model reflects future PaperProcessor capability 
            CanvasAnimationComponent = (function () {
                function CanvasAnimationComponent() {
                }
                CanvasAnimationComponent.prototype.ngOnInit = function () {
                    this.canvasId = this.topic.name + "-Canvas-" + this.i;
                };
                CanvasAnimationComponent.prototype.ngAfterViewInit = function () {
                    var relativeImgPath = "/studymc-media/compounds/" + this.topic.name + "/";
                    PaperProcessor.applyObjects(this.learnItem.images, relativeImgPath);
                    PaperProcessor.applyMovements(this.learnItem.movements);
                };
                CanvasAnimationComponent.prototype.showCompoundAreas = function () {
                    PaperProcessor.displayAllHotspots(this.canvasId, "black");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', interfaces_1.MovementAnimation)
                ], CanvasAnimationComponent.prototype, "learnItem", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CanvasAnimationComponent.prototype, "topic", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CanvasAnimationComponent.prototype, "i", void 0);
                CanvasAnimationComponent = __decorate([
                    core_1.Component({
                        selector: 'Canvas-Animation',
                        template: "\n  <button class=\"btn btn-default\" (click)=\"showCompoundAreas()\" type=\"button\" id=\"{{canvasId}}-button\">Display Areas</button>\n  <canvas id=\"{{canvasId}}\">\n  </canvas>",
                        styles: ["\n    button {\n      float: left;\n    }\n  "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], CanvasAnimationComponent);
                return CanvasAnimationComponent;
            }());
            exports_1("CanvasAnimationComponent", CanvasAnimationComponent);
        }
    }
});

//# sourceMappingURL=canvasAnimation.component.js.map
