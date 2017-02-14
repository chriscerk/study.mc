var PaperProcessor = (function () {
  var my = {},
      canvases = [],
      contexts = [],
      imageObjs = [];

  function setCanvasSize(canvasId, width, height) {
    contexts[canvasId].canvas.width = width;
    contexts[canvasId].canvas.height = height;
  };

  my.moduleName = "PaperProcessor";

  my.initCanvas = function(canvasId) {
      canvases[canvasId] = document.getElementById(canvasId);
      contexts[canvasId] = canvases[canvasId].getContext('2d');
  }

  my.applyObjects = function(objects, relativePath) {
    
  };

  my.applyMovements = function(movements) {
    
  };

  my.fireAllAnimations = function(canvasId) {

  };

  return my;
}());
