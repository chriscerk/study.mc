System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    function routerTransition() {
        return slideToLeft();
    }
    exports_1("routerTransition", routerTransition);
    function slideToRight() {
        return core_1.trigger('routerTransition', [
            core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
            core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
            core_1.transition(':enter', [
                core_1.style({ transform: 'translateX(-100%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
            ]),
            core_1.transition(':leave', [
                core_1.style({ transform: 'translateX(0%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(100%)' }))
            ])
        ]);
    }
    function slideToLeft() {
        return core_1.trigger('routerTransition', [
            core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
            core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
            core_1.transition(':enter', [
                core_1.style({ transform: 'translateX(100%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
            ]),
            core_1.transition(':leave', [
                core_1.style({ transform: 'translateX(0%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(-100%)' }))
            ])
        ]);
    }
    function slideToBottom() {
        return core_1.trigger('routerTransition', [
            core_1.state('void', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
            core_1.state('*', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
            core_1.transition(':enter', [
                core_1.style({ transform: 'translateY(-100%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(0%)' }))
            ]),
            core_1.transition(':leave', [
                core_1.style({ transform: 'translateY(0%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(100%)' }))
            ])
        ]);
    }
    function slideToTop() {
        return core_1.trigger('routerTransition', [
            core_1.state('void', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
            core_1.state('*', core_1.style({ position: 'fixed', width: '100%', height: '100%' })),
            core_1.transition(':enter', [
                core_1.style({ transform: 'translateY(100%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(0%)' }))
            ]),
            core_1.transition(':leave', [
                core_1.style({ transform: 'translateY(0%)' }),
                core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateY(-100%)' }))
            ])
        ]);
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=router.animations.js.map
