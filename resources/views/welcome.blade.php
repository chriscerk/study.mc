<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100,300" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet" />
        <base href="/">

        {{ Html::style('css/studymc.css') }}

        <!-- IE required polyfills, in this exact order -->
        {{ Html::script('es6-shim/es6-shim.min.js') }}
        {{ Html::script('zone.js/dist/zone.js') }}
        {{ Html::script('reflect-metadata/Reflect.js') }}
        {{ Html::script('systemjs/dist/system.src.js') }}
        {{ Html::script('systemjs.config.js') }}
        <script src="https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js"></script>
        <script src="http://study.mc/systemjs.config.js"></script>
        <script src="./canvasHotspots/hotspots.js"></script>
        <script src="./fabricProcessor/fabricProcessor.js"></script>
        <script type="text/javascript" src="./fabric/dist/fabric.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
 
    </head>

    @yield('layout')   
    
</html>
