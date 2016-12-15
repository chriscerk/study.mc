System.register(['@angular/core', '@angular/common', "@angular/forms", './topic.component', './topicLearn.component', './topicTest.component', './topicReview.component', '../shared/compoundCanvas.component', '../shared/alertBox.component', '../shared/endMessage.component', '../shared/shared.module', './topic.routing', '../shared/pipes/percent.pipe'], function(exports_1, context_1) {
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
    var core_1, common_1, forms_1, topic_component_1, topicLearn_component_1, topicTest_component_1, topicReview_component_1, compoundCanvas_component_1, alertBox_component_1, endMessage_component_1, shared_module_1, topic_routing_1, percent_pipe_1;
    var TopicModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
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
            function (compoundCanvas_component_1_1) {
                compoundCanvas_component_1 = compoundCanvas_component_1_1;
            },
            function (alertBox_component_1_1) {
                alertBox_component_1 = alertBox_component_1_1;
            },
            function (endMessage_component_1_1) {
                endMessage_component_1 = endMessage_component_1_1;
            },
            function (shared_module_1_1) {
                shared_module_1 = shared_module_1_1;
            },
            function (topic_routing_1_1) {
                topic_routing_1 = topic_routing_1_1;
            },
            function (percent_pipe_1_1) {
                percent_pipe_1 = percent_pipe_1_1;
            }],
        execute: function() {
            TopicModule = (function () {
                function TopicModule() {
                }
                TopicModule = __decorate([
                    core_1.NgModule({
                        imports: [common_1.CommonModule, percent_pipe_1.MyPercentPipe, topic_routing_1.topic_routing, shared_module_1.SharedModule, forms_1.ReactiveFormsModule],
                        declarations: [endMessage_component_1.EndMessageComponent, compoundCanvas_component_1.CompoundCanvasComponent, alertBox_component_1.AlertBoxComponent, topic_component_1.TopicComponent, percent_pipe_1.MyPercentPipe, topicLearn_component_1.TopicLearnComponent,
                            topicTest_component_1.TopicTestComponent, topicReview_component_1.TopicReviewComponent],
                        exports: [topic_component_1.TopicComponent, percent_pipe_1.MyPercentPipe],
                        bootstrap: [topicLearn_component_1.TopicLearnComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TopicModule);
                return TopicModule;
            }());
            exports_1("TopicModule", TopicModule);
        }
    }
});

//# sourceMappingURL=topic.module.js.map
