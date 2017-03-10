System.register(['@angular/router', './training.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, training_component_1;
    var training_routes, training_routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (training_component_1_1) {
                training_component_1 = training_component_1_1;
            }],
        execute: function() {
            training_routes = [
                {
                    path: '',
                    component: training_component_1.TrainingComponent
                }
            ];
            exports_1("training_routing", training_routing = router_1.RouterModule.forChild(training_routes));
        }
    }
});

//# sourceMappingURL=training.routing.js.map
