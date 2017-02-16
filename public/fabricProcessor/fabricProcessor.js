var FabricProcessor = (function () {
  var my = {},
      canvases = [],
      contexts = [],
      fabricCanvases = [],
      myObjs = [],
      canvasObjs = [],
      canvasMovements = [];

  function setCanvasSize(canvasId, canvasSize) {
    contexts[canvasId].canvas.width = canvasSize.width;
    contexts[canvasId].canvas.height = canvasSize.height;
  };

  function applyObjProps(object, img) {

    if(object.hasOwnProperty("opacity")) {
      img.setOpacity(object.opacity)
    }

    if(object.hasOwnProperty("startAngle")) {
      img.set({angle: object.startAngle});
    }

    if(object.hasOwnProperty("movementLocked")) {
      if(object.movementLocked == "x") {
        img.set({lockMovementX: true});
      }
      else if(object.movementLocked == "y") {
        img.set({lockMovementY: true});
      }
      else {
        img.set({lockMovementX: true, lockMovementY: true});
      }
    }
  }

  my.moduleName = "FabricProcessor";

  my.initCanvas = function(canvasId, options) {
      canvases[canvasId] = document.getElementById(canvasId);
      contexts[canvasId] = canvases[canvasId].getContext('2d');

      fabricCanvases[canvasId] = new fabric.Canvas(canvasId);

      for(var i in options) {
        let option = options[i];
        if(option.hasOwnProperty("canvasSize")) {
          fabricCanvases[canvasId].setDimensions(option.canvasSize)
        }
      }

      fabricCanvases[canvasId].on({
        'object:moving': onMove,
        'object:scaling': onScale,
        'object:rotating': onRotate,
        'object:modified': onModify
      });

      function onModify(obj) { }

      function onScale(options) {
        fadeIfOverlap(options);
      }

      function onRotate(options) {
        fadeIfOverlap(options);
      }

      function onMove(options) {
        fadeIfOverlap(options);
      }

      function fadeIfOverlap(options) {
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

      myObjs[canvasId] = []
      canvasObjs[canvasId] = []

      fabric.Image.fromURL(object.image, function(img) {

        img.scale(0.5).set({
          left: object.startX,
          top: object.startY,
          lockUniScaling: true
        });

        applyObjProps(object, img);

        img.setControlsVisibility({
            mt: false, // middle top 
            mb: false, // midle bottom
            ml: false, // middle left
            mr: false, // middle right
        });

        fabricCanvases[canvasId].add(img).setActiveObject(img);
        myObjs[canvasId].push(object);
        canvasObjs[canvasId].push(object);

        let objectName = object.image + canvasId
        canvasMovements[objectName] = object.movement;
      });
    }
  };

  function moveObjectAnimation(canvasId, object) {

    let canvasObj = fabricCanvases[canvasId];
    let movement = canvasMovements[object.image + canvasId];

    canvasObj._objects[0].animate('left', '+=' + movement.destination.x, {
      duration: 1000,
      onChange: fabricCanvases[canvasId].renderAll.bind(fabricCanvases[canvasId]),
      onComplete: function() {
        
      },
      easing: fabric.util.ease.easeInOutQuad
    });
  };

  my.fireAllAnimations = function(btnId) {

    let canvasId = getCanvasId(btnId);
    let objects = myObjs[canvasId];
    
    for(var i in objects) {
      let object = objects[i];

      moveObjectAnimation(canvasId, object);
    }
  };

  function getCanvasId(buttonId) {
    var pattern = /^(\w*)(-button)$/;
    canvasId = pattern.exec(buttonId)[1];
    return canvasId;
  }


  return my;
}());
