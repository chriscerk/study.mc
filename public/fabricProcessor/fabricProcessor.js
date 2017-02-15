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
          setCanvasSize(canvasId, option.canvasSize)
        }
      }
  }

  my.applyObjects = function(canvasId, objects) {
    for(var i in objects) {
      let object = object[i];

      fabric.Image.fromURL(object, function(img) {
        img.scale(0.5).set({
          left: 50,
          top: 75,
          angle: -15
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
