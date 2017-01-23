System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var nextPrevAnimation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Component transition animations
            exports_1("nextPrevAnimation", nextPrevAnimation = core_1.trigger("NextPrevAnimation", [
                core_1.transition('next => void', [
                    core_1.style({ transform: 'translateX(100%)' }),
                    core_1.animate('200ms ease-in')
                ]),
                core_1.transition('previous => void', [
                    core_1.style({ transform: 'translateX(-100%)' }),
                    core_1.animate('200ms ease-in')
                ])
            ]));
        }
    }
});

//# sourceMappingURL=animations.js.map
