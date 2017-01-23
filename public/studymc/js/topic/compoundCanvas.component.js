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
    var CompoundCanvasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (interfaces_1_1) {
                interfaces_1 = interfaces_1_1;
            }],
        execute: function() {
            CompoundCanvasComponent = (function () {
                function CompoundCanvasComponent() {
                }
                CompoundCanvasComponent.prototype.ngOnInit = function () {
                    this.canvasId = this.topic.name + "-Canvas-" + this.i;
                };
                CompoundCanvasComponent.prototype.ngAfterViewInit = function () {
                    var fullImgPath = "/studymc-media/compounds/" + this.topic.name + "/" + this.learnItem.imagePath;
                    var imgWidth = 200;
                    var imgPadding = 150;
                    hotspotsModule.initCanvasImg(this.canvasId, fullImgPath, imgPadding, imgWidth, this.learnItem.compoundHotspots);
                };
                CompoundCanvasComponent.prototype.showCompoundAreas = function () {
                    hotspotsModule.displayAllHotspots(this.canvasId, "black");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', interfaces_1.InteractiveMolecule)
                ], CompoundCanvasComponent.prototype, "learnItem", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CompoundCanvasComponent.prototype, "topic", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], CompoundCanvasComponent.prototype, "i", void 0);
                CompoundCanvasComponent = __decorate([
                    core_1.Component({
                        selector: 'compound-Canvas',
                        template: "\n  <button class=\"btn btn-default\" (click)=\"showCompoundAreas()\" type=\"button\" id=\"{{canvasId}}-button\">Display SAR Areas</button>\n  <canvas id=\"{{canvasId}}\">\n  </canvas>\n  ",
                        styles: ["\n    button {\n      float: left;\n    }\n  "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], CompoundCanvasComponent);
                return CompoundCanvasComponent;
            }());
            exports_1("CompoundCanvasComponent", CompoundCanvasComponent);
        }
    }
});

//# sourceMappingURL=compoundCanvas.component.js.map
