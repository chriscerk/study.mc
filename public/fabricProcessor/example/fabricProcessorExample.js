//Example Image
var image = "benzodiazepine.PNG";
var firstOverlay = "d-alanine-overlay.PNG";
var secondOverlay = "d-cycloserine-overlay.PNG";

var animations = [
      {
            title: "Test",
            options: [
                  {
                        name: "canvasSize",
                        canvasSize: { width: 900, height: 500 }
                  }
            ],
            movements: [
                  {
                        destination: { x: 30, y:30 },
                        origin: { x: 50, y:50 },
                        object: image
                  }
            ],
            objects: [
                  { image: firstOverlay, startX: 10, startY: 10, startAngle: 0 },
                  { image: secondOverlay, startX: 10, startY: 200, startAngle: 0 },
                  { image: image, startX: 10, startY: 400, startAngle: 0 }
            ]
      }
]

var currentCanvasId = "myProcessedCanvas";
var currentAnimation = animations[0];

FabricProcessor.initCanvas(currentCanvasId, currentAnimation.options);

FabricProcessor.applyObjects(currentCanvasId, currentAnimation.objects);

function getCanvasId(buttonId) {
	var pattern = /^(\w*)(-button)$/;
	canvasId = pattern.exec(buttonId)[1];
	return canvasId;
}
