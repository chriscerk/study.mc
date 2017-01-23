System.register(['@angular/core', '@angular/common', './courses.component', '../shared/shared.module', './courses.routing'], function(exports_1, context_1) {
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
    var core_1, common_1, courses_component_1, shared_module_1, courses_routing_1;
    var CoursesModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (courses_routing_1_1) {
                courses_routing_1 = courses_routing_1_1;
            }],
        execute: function() {
            CoursesModule = (function () {
                function CoursesModule() {
                }
                CoursesModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, courses_routing_1.courses_routing, shared_module_1.SharedModule],
                        declarations: [courses_component_1.CoursesComponent],
                        exports: [courses_component_1.CoursesComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CoursesModule);
                return CoursesModule;
            }());
            exports_1("CoursesModule", CoursesModule);
        }
    }
});

//# sourceMappingURL=courses.module.js.map
