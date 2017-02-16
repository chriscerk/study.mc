var FabricProcessor = (function () {
  var my = {},
      canvases = [],
      contexts = [],
      fabricCanvases = [],
      imageObjs = [];

  function setCanvasSize(canvasId, canvasSize) {
    contexts[canvasId].canvas.width = canvasSize.width;
    contexts[canvasId].canvas.height = canvasSize.height;
  };

  my.moduleName = "FabricProcessor";

  my.initCanvas = function(canvasId, options) {
      canvases[canvasId] = document.getElementById(canvasId);
      contexts[canvasId] = canvases[canvasId].getContext('2d');

      fabricCanvases[canvasId] = new fabric.Canvas(canvasId);

      for(var i in options) {
        let option = options[i];
        if(option.name == "canvasSize") {
          fabricCanvases[canvasId].setDimensions(option.canvasSize)
        }
      }

      fabricCanvases[canvasId].on({
        'object:moving': onChange,
        'object:scaling': onChange,
        'object:rotating': onChange,
      });

      function onChange(options) {
        options.target.setCoords();
        fabricCanvases[canvasId].forEachObject(function(obj) {
          if (obj === options.target) return;
          obj.setOpacity(options.target.intersectsWithObject(obj) ? 0.5 : 1);
        });
      }
  }

  my.applyObjects = function(canvasId, objects) {
    for(var i in objects) {
      let object = objects[i];

      fabric.Image.fromURL(object.image, function(img) {

        img.scale(0.5).set({
          left: object.startY,
          top: object.startX,
          angle: object.startAngle
        });

        img.setControlsVisibility({
            mt: false, // middle top disable
            mb: false, // midle bottom
            ml: false, // middle left
            mr: false, // I think you get it
        });

        fabricCanvases[canvasId].add(img).setActiveObject(img);
      });
    }
  };

  my.applyMovements = function(canvasId, movements) {
    alert("Not Yet Implemented");
  };

  my.fireAllAnimations = function(canvasId, canvasId) {
    alert("Not Yet Implemented");
  };

  return my;
}());
