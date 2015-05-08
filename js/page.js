var canvas = document.getElementById('imgZone');
var context = canvas.getContext('2d');
var imageObj = new Image();

imageObj.onload = function() {
  context.drawImage(imageObj, 0, 0);
};
imageObj.src = 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
