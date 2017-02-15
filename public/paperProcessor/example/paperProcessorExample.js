//Example Image
var image = "benzodiazepine.PNG";

var animations = [
      {
            title: "Test",
            options: [
                  {
                        name: "canvasSize",
                        canvasSize: { width: 500, height: 500 }
                  }
            ],
            movements: [
                  {
                        destination: { x: 30, y:30 },
                        origin: { x: 50, y:50 },
                        object: image
                  }
            ],
            images: [
                  image
            ]
      }
]

var currentCanvasId = "myProcessedCanvas";
var currentAnimation = animations[0];

PaperProcessor.initCanvas(currentCanvasId, currentAnimation.options);

function getCanvasId(buttonId) {
	var pattern = /^(\w*)(-button)$/;
	canvasId = pattern.exec(buttonId)[1];
	return canvasId;
}
