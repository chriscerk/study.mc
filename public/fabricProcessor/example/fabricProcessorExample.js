//Example Image
var image = "benzodiazepine.PNG";
var firstOverlay = "d-alanine-overlay.PNG";
var secondOverlay = "d-cycloserine-overlay.PNG";

var customAnimations = [
      {
            title: "Test",
            helpText: "",
            options: [
                  {
                        name: "canvasSize",
                        canvasSize: { width: 900, height: 500 }
                  }
            ],
            objects: [
                  { 
                        image: firstOverlay, 
                        startY: 78, 
                        startX: 0, 
                        opacity: .5, 
                        movementLocked: "y", 
                        text: "" ,
                        movement:
                              {
                                    destination: { x: 30, y:30 },
                                    on: ""
                              }
                  },
                  { 
                        image: 
                        secondOverlay, 
                        startY: 80, 
                        startX: 400, 
                        opacity: .5, 
                        movementLocked: "y", 
                        text: "",
                        movement:
                              {
                                    destination: { x: 30, y:30 },
                                    on: ""
                              }
                  }
            ]
      }
]

var currentCanvasId = "myProcessedCanvas";
var currentAnimation = customAnimations[0];

FabricProcessor.initCanvas(currentCanvasId, currentAnimation.options);
FabricProcessor.applyObjects(currentCanvasId, currentAnimation.objects);

function getCanvasId(buttonId) {
	var pattern = /^(\w*)(-button)$/;
	canvasId = pattern.exec(buttonId)[1];
	return canvasId;
}
