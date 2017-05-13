var ImageResizer = (function () {

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  function convertFileToImage(file) {
    var image = document.createElement('img');
    image.src = URL.createObjectURL(file);
  } 

  function resize (image, width, height, type) {
    if(!height) {
      height = width;
    }

    if(!type) {
      type = 'image/jpeg';
    }

    if(width < 1) {
      var currentWidth = image.width;
      var currentHeight = image.height;
      width = currentWidth * width;
      height = currentHeight * height;
    }

    if(image instanceof File) {
      image = convertFileToImage(image);
    }

    canvas.width = width;
    canvas.height = height;

    console.log(width, height);
    context.drawImage(image, 0, 0, width, height);
    return canvas.toDataURL(type);
  };

  return {
    resize: resize
  };

})();
