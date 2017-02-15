var PaperProcessor = (function () {
  var my = {},
      canvases = [],
      contexts = [],
      imageObjs = [];

  function setCanvasSize(canvasId, canvasSize) {
    contexts[canvasId].canvas.width = canvasSize.width;
    contexts[canvasId].canvas.height = canvasSize.height;
  };

  my.moduleName = "PaperProcessor";
  my.tool1;
  my.tool2;

  my.initCanvas = function(canvasId, options) {
      canvases[canvasId] = document.getElementById(canvasId);
      contexts[canvasId] = canvases[canvasId].getContext('2d');

      for(var i in options) {
        let option = options[i];
        if(option.name == "canvasSize") {
          setCanvasSize(canvasId, option.canvasSize)
        }
      }

      paper.install(window);
      // Keep global references to both tools, so the HTML
      // links below can access them.
      window.onload = function() {
        paper.setup('myProcessedCanvas');

        var path = new Path.Circle({
          center: paper.view.center,
          radius: 30,
          strokeColor: 'black'
        });

        function onResize(event) {
          // Whenever the window is resized, recenter the path:
          path.position = paper.view.center;
        }


        function onMouseDown(event) {
          path = new Path();
          path.strokeColor = 'black';
          path.add(event.point);
        }

        my.tool1 = new Tool();
        my.tool1.onMouseDown = onMouseDown;

        my.tool1.onMouseDrag = function(event) {
          path.add(event.point);
        }

        my.tool2 = new Tool();
        my.tool2.minDistance = 20;
        my.tool2.onMouseDown = onMouseDown;

        my.tool2.onMouseDrag = function(event) {
          // Use the arcTo command to draw cloudy lines
          path.arcTo(event.point);
        }
      }
  }

  my.applyObjects = function(objects, relativePath) {
    alert("Not Yet Implemented");
  };

  my.applyMovements = function(movements) {
    alert("Not Yet Implemented");
  };

  my.fireAllAnimations = function(canvasId) {
    alert("Not Yet Implemented");
  };

  return my;
}());
