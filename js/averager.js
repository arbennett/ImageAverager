/**
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


/**
 *  Set a new image in the canvas
 */
function upload(e) {
	console.log("You've pressed the upload button!");
    var content = document.getElementById('imgWrapper'); 
    var canvas = document.getElementById('imgZone');
    var context = canvas.getContext('2d');
    var reader = new FileReader();
    reader.onload = function(event) {
        var imageObj = new Image();
        imageObj.src = event.target.result;
        
        console.log("preparing to load the new image");
        imageObj.onload = function() {
            imageWidth = imageObj.width;
            imageHeight = imageObj.height;
            var imageRatio = imageObj.width / imageObj.height;
            var canvasRatio = canvas.width / canvas.height;
            setHeight = 0;
            setWidth = 0;
            
           console.log(setWidth + " " + setHeight); 

            // Resize the canvas if the image is too small or big
            if (imageRatio > 1) {
                // Image is wider than tall
            	setWidth = content.offsetHeight * imageRatio;
            	setHeight = content.offsetHeight;
            } else {
            	// Image is taller than wide
            	setWidth = content.offsetWidth;
            	setHeight = content.offsetWidth / imageRatio;
            }
           console.log(setWidth + " " + setHeight); 

            // Scale the image vertically
            if (setHeight > content.offsetHeight) {
            	setWidth = setWidth * (content.offsetHeight / setHeight);
            	setHeight = content.offsetHeight;
            }
            console.log(setWidth + " " + setHeight); 
            
            // If the image is smaller than the canvas, shrink the canvas
            if (setHeight > imageHeight) { setHeight = imageHeight; }
            if (setWidth > imageWidth) { setWidth = imageWidth; }
    
            // Draw the image
    		canvas.height = setHeight;
    		canvas.width = setWidth;
            console.log(setWidth + " " + setHeight);
    	    context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height,
    			  0, 0, setWidth, setHeight);
    	};
    
    }
    reader.readAsDataURL(e.target.files[0]);
}
