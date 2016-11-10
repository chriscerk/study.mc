System.register(['@angular/router', './course.component', './courseTopics.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, course_component_1, courseTopics_component_1;
    var course_routes, course_routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (courseTopics_component_1_1) {
                courseTopics_component_1 = courseTopics_component_1_1;
            }],
        execute: function() {
            course_routes = [
                {
                    path: '',
                    component: course_component_1.CourseComponent,
                    children: [
                        { path: 'studymc/topics', component: courseTopics_component_1.CourseTopicsComponent }
                    ]
                }
            ];
            exports_1("course_routing", course_routing = router_1.RouterModule.forChild(course_routes));
        }
    }
});

//# sourceMappingURL=course.routing.js.map
