// Add closure to keep track of the counter
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
 * Load the image into the canvas
 */
window.onload = function() {
    var c=document.getElementById("imgZone");
    var ctx=c.getContext("2d");
    var img="/imgs/default.jpg";
    ctx.drawImage(img,10,10);
};


/**
 * A WORK IN PROGRESS
 * 
 * Going to average the colors of the surrounding pixels
 */
function average() {
	var img = document.getElementById('thePic');

	// Loop through all the pixels
	for (i = 1; i < img.width - 1; i++) {
		for (j = 1; j < img.height - 1; j++) {
			// do something
		}
	}

}