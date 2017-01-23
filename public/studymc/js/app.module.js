/// <reference path="../../../typings/browser.d.ts" />
System.register(['@angular/core', '@angular/platform-browser', './app.component', './course/course.component', './course/courseTopics.component', './topic/topic.component', './topic/topicLearn.component', './topic/topicTest.component', './topic/topicReview.component', './courses/courses.component', './shared/compoundCanvas.component', './shared/alertBox.component', './shared/endMessage.component', './app.routing', './core/core.module', './shared/shared.module', "@angular/forms", './shared/pipes/percent.pipe'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, core_2, app_component_1, course_component_1, courseTopics_component_1, topic_component_1, topicLearn_component_1, topicTest_component_1, topicReview_component_1, courses_component_1, compoundCanvas_component_1, alertBox_component_1, endMessage_component_1, app_routing_1, core_module_1, shared_module_1, forms_1, percent_pipe_1;
    var Components, Pipes, AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (courseTopics_component_1_1) {
                courseTopics_component_1 = courseTopics_component_1_1;
            },
            function (topic_component_1_1) {
                topic_component_1 = topic_component_1_1;
            },
            function (topicLearn_component_1_1) {
                topicLearn_component_1 = topicLearn_component_1_1;
            },
            function (topicTest_component_1_1) {
                topicTest_component_1 = topicTest_component_1_1;
            },
            function (topicReview_component_1_1) {
                topicReview_component_1 = topicReview_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (compoundCanvas_component_1_1) {
                compoundCanvas_component_1 = compoundCanvas_component_1_1;
            },
            function (alertBox_component_1_1) {
                alertBox_component_1 = alertBox_component_1_1;
            },
            function (endMessage_component_1_1) {
                endMessage_component_1 = endMessage_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (percent_pipe_1_1) {
                percent_pipe_1 = percent_pipe_1_1;
            }],
        execute: function() {
            Components = [
                app_component_1.AppComponent,
                course_component_1.CourseComponent,
                courses_component_1.CoursesComponent,
                courseTopics_component_1.CourseTopicsComponent,
                topic_component_1.TopicComponent,
                topicLearn_component_1.TopicLearnComponent,
                topicTest_component_1.TopicTestComponent,
                topicReview_component_1.TopicReviewComponent,
                compoundCanvas_component_1.CompoundCanvasComponent,
                alertBox_component_1.AlertBoxComponent,
                endMessage_component_1.EndMessageComponent
            ];
            Pipes = [
                percent_pipe_1.MyPercentPipe
            ];
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        declarations: [Components, Pipes],
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routing_1.app_routing,
                            forms_1.ReactiveFormsModule,
                            core_module_1.CoreModule,
                            shared_module_1.SharedModule //Shared (multi-instance) objects
                        ],
                        schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
