System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EnsureModuleLoadedOnceGuard;
    return {
        setters:[],
        execute: function() {
            EnsureModuleLoadedOnceGuard = (function () {
                function EnsureModuleLoadedOnceGuard(targetModule) {
                    if (targetModule) {
                        throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
                    }
                }
                return EnsureModuleLoadedOnceGuard;
            }());
            exports_1("EnsureModuleLoadedOnceGuard", EnsureModuleLoadedOnceGuard);
        }
    }
});

//# sourceMappingURL=ensureModuleLoadedOnceGuard.js.map
