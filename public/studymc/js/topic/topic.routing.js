System.register(['@angular/router', './topic.component', './topicLearn.component', './topicTest.component', './topicReview.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, topic_component_1, topicLearn_component_1, topicTest_component_1, topicReview_component_1;
    var topic_routes, topic_routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            }],
        execute: function() {
            topic_routes = [
                {
                    path: '',
                    component: topic_component_1.TopicComponent,
                    children: [
                        { path: 'learn', component: topicLearn_component_1.TopicLearnComponent },
                        { path: 'test', component: topicTest_component_1.TopicTestComponent },
                        { path: 'review', component: topicReview_component_1.TopicReviewComponent }
                    ]
                }
            ];
            exports_1("topic_routing", topic_routing = router_1.RouterModule.forChild(topic_routes));
        }
    }
});

//# sourceMappingURL=topic.routing.js.map
