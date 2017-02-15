var canvas = new fabric.Canvas('myCanvas');
fabric.Image.fromURL('benzodiazepine.PNG', function(img) {
  img.scale(0.5).set({
    left: 50,
    top: 75,
    angle: -15
  });
  canvas.add(img).setActiveObject(img);
});

