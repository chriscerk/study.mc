System.register(['@angular/router', './courses.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, courses_component_1;
    var courses_routes, courses_routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            }],
        execute: function() {
            courses_routes = [
                { path: '', pathMatch: 'full', redirectTo: 'studymc/courses' },
                { path: '/studymc/courses', component: courses_component_1.CoursesComponent }
            ];
            exports_1("courses_routing", courses_routing = router_1.RouterModule.forChild(courses_routes));
        }
    }
});

//# sourceMappingURL=courses.routing.js.map
