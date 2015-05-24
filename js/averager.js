/**
 * Add closure to keep track of the counter
 */
var add = (function() {
	var counter = 0;
	return function() {
		return counter += 1;
	}
})();


/**
 * Change the counter text
 */
function change() {
	var myNewTitle = add();
	var title = document.getElementById('title');
	title.innerHTML = 'You have pressed the button ' + myNewTitle + ' times!';
}


/**
 * Find out how big the displayed image is
 */
function inspect() {
	var img = document.getElementById('thePic');
	var info = document.getElementById('picInfo');
	info.innerHTML = 'This image is ' + img.width + ' pixels wide and '
			+ img.height + ' pixels tall!';
}


/**
 * Load a new image
 */
function update() {
	var address = document.getElementById('imageAddress').value;
	if (address.length == 0) {
		return;
	}
	var info = document.getElementById('picInfo');
	info.innerHTML = 'New image set to ' + address;
	var img = document.getElementById('thePic');
	img.src = address;
}


/**
 * Go back to the default picture
 */
function reset() {
	var img = document.getElementById('thePic');
	img.src = 'imgs/default.jpg';
}


/**
 * A WORK IN PROGRESS
 *
 * Going to average the colors of the surrounding pixels
 */
function average() {
	var canvas = document.getElementById('imgZone');
	var image = canvas.getContext('2d');
	var imageData = image.getImageData(0,0,imageWidth,imageHeight);
	var r, g, b, a, count, pixel, data, rgba;
	// Loop through all the pixels
	for (i = 1; i < imageWidth - 1; i++) {
		for (j = 1; j < imageHeight - 1; j++) {
			r = 0; g = 0; b = 0; a = 0; count = 0;
            idx = (i + j * imageWidth) * 4; 
            for (ii = -1; ii < 1; ii++) {
				for (jj = -1; jj < 1; jj++) {
                    temp_idx = ((i+ii) + (j+jj) * imageWidth) * 4;
					r += imageData.data[temp_idx + 0];
					g += imageData.data[temp_idx + 1];
					b += imageData.data[temp_idx + 2];
					a += imageData.data[temp_idx + 3];
					count += 1;
				}
			}
            imageData.data[idx+0] = Math.floor((r + 0.5) / count);
			imageData.data[idx+1] = Math.floor((g + 0.5) / count);
            imageData.data[idx+2] = Math.floor((b + 0.5) / count);
			imageData.data[idx+3] = Math.floor((a + 0.5) / count);
	     }   
    }
    image.putImageData(imageData,0,0);
	console.log("done!");
}


function upload() {
	//do nothing
}
