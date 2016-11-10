System.register(['@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this._baseUrl = '';
                }
                DataService.prototype.getCourses = function () {
                    var _this = this;
                    if (!this.courses) {
                        return this.http.get(this._baseUrl + 'courses.json')
                            .map(function (res) {
                            _this.courses = res.json();
                            return _this.courses;
                        })
                            .catch(this.handleError);
                    }
                    else {
                        //return cached data
                        return this.createObservable(this.courses);
                    }
                };
                DataService.prototype.getCourse = function (id) {
                    var _this = this;
                    if (this.courses) {
                        //filter using cached data
                        return this.findCourseObservable(id);
                    }
                    else {
                        //Query the existing courses to find the target course
                        return Observable_1.Observable.create(function (observer) {
                            _this.getCourses().subscribe(function (courses) {
                                _this.courses = courses;
                                var cust = _this.filterCourses(id);
                                observer.next(cust);
                                observer.complete();
                            });
                        })
                            .catch(this.handleError);
                    }
                };
                DataService.prototype.getTopics = function () {
                    var _this = this;
                    if (!this.topics) {
                        return this.http.get(this._baseUrl + 'topics.json')
                            .map(function (res) {
                            _this.topics = res.json();
                            return _this.topics;
                        })
                            .catch(this.handleError);
                    }
                    else {
                        //return cached data
                        return this.createObservable(this.topics);
                    }
                };
                DataService.prototype.getTopic = function (id) {
                    var _this = this;
                    if (this.topics) {
                        //filter using cached data
                        return this.findTopicObservable(id);
                    }
                    else {
                        //Query the existing topics to find the target course
                        return Observable_1.Observable.create(function (observer) {
                            _this.getTopics().subscribe(function (topics) {
                                _this.topics = topics;
                                var cust = _this.filterTopics(id);
                                observer.next(cust);
                                observer.complete();
                            });
                        })
                            .catch(this.handleError);
                    }
                };
                DataService.prototype.filterCourses = function (id) {
                    var cs = this.courses.filter(function (c) { return c.id === id; });
                    return (cs.length) ? cs[0] : null;
                };
                DataService.prototype.findCourseObservable = function (id) {
                    return this.createObservable(this.filterCourses(id));
                };
                DataService.prototype.filterTopics = function (id) {
                    var cs = this.topics.filter(function (c) { return c.id === id; });
                    return (cs.length) ? cs[0] : null;
                };
                DataService.prototype.findTopicObservable = function (id) {
                    return this.createObservable(this.filterTopics(id));
                };
                DataService.prototype.createObservable = function (data) {
                    return Observable_1.Observable.create(function (observer) {
                        observer.next(data);
                        observer.complete();
                    });
                };
                DataService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});

//# sourceMappingURL=data.service.js.map
