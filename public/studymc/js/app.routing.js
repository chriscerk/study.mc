System.register(['@angular/router', './course/course.component', './courses/courses.component', './course/courseTopics.component', './topic/topic.component', './topic/topicLearn.component', './topic/topicTest.component', './topic/topicReview.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, course_component_1, courses_component_1, courseTopics_component_1, topic_component_1, topicLearn_component_1, topicTest_component_1, topicReview_component_1;
    var app_routes, app_routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
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
            }],
        execute: function() {
            app_routes = [
                { path: 'studymc/course', component: course_component_1.CourseComponent },
                { path: 'studymc/courses', component: courses_component_1.CoursesComponent },
                { path: 'studymc/course/:id', component: course_component_1.CourseComponent,
                    children: [
                        { path: '', redirectTo: '/topics', pathMatch: 'full' },
                        { path: 'topics', component: courseTopics_component_1.CourseTopicsComponent },
                    ]
                },
                { path: 'studymc/topic/:id', component: topic_component_1.TopicComponent,
                    children: [
                        { path: '', redirectTo: '/learn', pathMatch: 'full' },
                        { path: 'learn', component: topicLearn_component_1.TopicLearnComponent },
                        { path: 'test', component: topicTest_component_1.TopicTestComponent },
                        { path: 'review', component: topicReview_component_1.TopicReviewComponent }
                    ]
                },
                { path: '**', pathMatch: 'full', redirectTo: 'studymc/courses' } //catch any unfound routes and redirect to home page
            ];
            exports_1("app_routing", app_routing = router_1.RouterModule.forRoot(app_routes));
        }
    }
});

//# sourceMappingURL=app.routing.js.map
