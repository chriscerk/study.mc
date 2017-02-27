var gulp = require("gulp");
var elixir = require("laravel-elixir");
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var pagespeed = require('psi');
var reload = browserSync.reload;

require('laravel-elixir-livereload');
var elixirTypscript = require('elixir-typescript');

var vendors = '../../assets/vendors/';

var paths = {
    'jquery': vendors + 'jquery/dist',
    'jqueryUi': vendors + 'jquery-ui',
    'moment': vendors + 'moment',
    'bootstrap': vendors + 'bootstrap/dist',
    'fontawesome': vendors + 'font-awesome',
    'eonasdanBootstrapDatetimepicker': vendors + 'eonasdan-bootstrap-datetimepicker/build',
    'tether' : vendors + 'tether/dist'
};

elixir(function (mix) {
    mix.copy('node_modules/@angular', 'public/@angular');
    mix.copy('node_modules/rxjs', 'public/rxjs');
    mix.copy('node_modules/systemjs', 'public/systemjs');
    mix.copy('node_modules/es6-promise', 'public/es6-promise');
    mix.copy('node_modules/es6-shim', 'public/es6-shim');
    mix.copy('node_modules/zone.js', 'public/zone.js');
    mix.copy('node_modules/satellizer', 'public/satellizer');
    mix.copy('node_modules/platform', 'public/platform');
    mix.copy('node_modules/reflect-metadata', 'public/reflect-metadata');
    mix.copy('node_modules/sw-precache', 'public/sw-precache');
    mix.typescript(
        '/**/*.ts',
        'public/js',
        {
            "target": "es5",
            "module": "system",
            "moduleResolution": "node",
            "sourceMap": true,
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "removeComments": false,
            "noImplicitAny": false
        }
    );
    mix.livereload();
    mix.browserSync({proxy: 'localhost:8000'});
});

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public/studymc';

  swPrecache.write(path.join(rootDir, 'service-worker.js'), {
    staticFileGlobs: [rootDir + '/**/*.{js,html,css,png,jpg,gif}'],
    stripPrefix: rootDir
  }, callback);
});

gulp.task('pagespeed', pagespeed.bind(null, {
  url: 'http://dev-apps.phar.umich.edu/studymc/',
  strategy: 'mobile'
}));

